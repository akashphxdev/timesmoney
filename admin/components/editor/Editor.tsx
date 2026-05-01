'use client';

import {
  IconAlignCenter, IconAlignJustified, IconAlignLeft, IconAlignRight,
  IconArrowBackUp, IconArrowForwardUp, IconBlockquote, IconBold, IconCode,
  IconColumnInsertLeft, IconColumnInsertRight, IconColumnRemove, IconH1, IconH2,
  IconH3, IconHighlight, IconItalic, IconLayoutDistributeHorizontal, IconLine,
  IconLinkMinus, IconLinkPlus, IconList, IconListCheck, IconListNumbers,
  IconPhoto, IconPhotoPlus, IconRowInsertBottom, IconRowInsertTop, IconRowRemove,
  IconStrikethrough, IconSubscript, IconSuperscript, IconTableMinus, IconTablePlus,
  IconUnderline,
} from '@tabler/icons-react';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import { Color } from '@tiptap/extension-color';
import Document from '@tiptap/extension-document';
import Dropcursor from '@tiptap/extension-dropcursor';
import HardBreak from '@tiptap/extension-hard-break';
import Heading from '@tiptap/extension-heading';
import Highlight from '@tiptap/extension-highlight';
import History from '@tiptap/extension-history';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import { Image } from '@tiptap/extension-image';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Strike from '@tiptap/extension-strike';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import { Table } from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import { useRef, useCallback } from 'react';
import ImageResize from 'tiptap-extension-resize-image';
import './EditorStyle.css';
import api from '@/lib/api';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || '';

const LinkedImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      href: { default: null },
      target: { default: '_blank' },
    };
  },
  renderHTML({ HTMLAttributes }) {
  const { href, target, ...rest } = HTMLAttributes;
  const img = ['img', rest];
  return (href ? ['a', { href, target }, img] : img) as any;
},
  parseHTML() {
    return [
      {
        tag: 'a[href] > img',
        getAttrs: (node: any) => {
          const parent = node.parentNode;
          return {
            ...node.attributes,
            href: parent.getAttribute('href'),
            target: parent.getAttribute('target') || '_blank',
          };
        },
      },
      { tag: 'img' },
    ];
  },
});

interface EditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function Editor({ content, onChange }: EditorProps) {
  const processingImagesRef = useRef(false);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const trackedImagesRef = useRef(new Set<string>());
  const deleteImageFromServerRef = useRef<((src: string) => Promise<void>) | null>(null);

  const uploadImage = useCallback(async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await api.post('/blogs/upload/image', formData);
    return `${SERVER_URL}${res.data.path}`;
  }, []);

  const deleteImageFromServer = useCallback(async (src: string) => {
    if (!src || src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) return;
    try {
      const urlPath = src.replace(SERVER_URL, '');
      await api.delete('/blogs/upload/image', { data: { path: urlPath } });
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  }, []);

  deleteImageFromServerRef.current = deleteImageFromServer;

  const replaceAllNonLocalImages = useCallback(async (editorInstance: any) => {
    if (!editorInstance || processingImagesRef.current) return;

    const imageNodes: { pos: number; src: string; isDataUri: boolean }[] = [];
    editorInstance.state.doc.descendants((node: any, pos: number) => {
      if (node.type.name !== 'image') return;
      const src = node.attrs?.src;
      if (typeof src !== 'string') return;
      const isDataUri = src.startsWith('data:image/');
      if (isDataUri) imageNodes.push({ pos, src, isDataUri });
    });

    if (!imageNodes.length) return;

    processingImagesRef.current = true;
    try {
      for (const { pos, src } of imageNodes) {
        const currentNode = editorInstance.state.doc.nodeAt(pos);
        if (!currentNode || currentNode.type.name !== 'image' || currentNode.attrs?.src !== src) continue;

        const res = await fetch(src);
        const blob = await res.blob();
        const file = new File([blob], `pasted-${Date.now()}.jpg`, { type: blob.type });
        const imageUrl = await uploadImage(file);

        editorInstance.chain().setNodeSelection(pos).updateAttributes('image', { src: imageUrl }).run();
      }
    } catch (error) {
      console.error('Error uploading images:', error);
    } finally {
      processingImagesRef.current = false;
      onChangeRef.current(editorInstance.getHTML());
    }
  }, [uploadImage]);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      Document, Paragraph, Text, Dropcursor,
      BulletList, ListItem, OrderedList,
      Heading.configure({ levels: [1, 2, 3] }),
      Bold, Underline, Italic, Strike,
      TextAlign.configure({ types: ['heading', 'paragraph', 'table'] }),
      Table.configure({ resizable: true }),
      TableRow, TableHeader, TableCell,
      Blockquote, HorizontalRule, HardBreak,
      Code,
      Highlight.configure({ multicolor: true }),
      History,
      TextStyle, Color,
      TaskList,
      TaskItem.configure({ nested: true }),
      LinkedImage,
      ImageResize,
      Subscript, Superscript,
      Placeholder.configure({ placeholder: 'Write Content...' }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
      }),
    ],

    content: content || '',

    onCreate: ({ editor: editorInstance }) => {
      const initialSrcs = new Set<string>();
      editorInstance.state.doc.descendants((node: any) => {
        if (node.type.name === 'image') {
          const src = node.attrs?.src;
          if (src && !src.startsWith('data:')) initialSrcs.add(src);
        }
      });
      trackedImagesRef.current = new Set(initialSrcs);
    },

    editorProps: {
      handlePaste(view, event) {
        const items = event.clipboardData?.items;
        if (!items) return false;

        const imageFiles: File[] = [];
        for (const item of items) {
          if (item.kind === 'file' && item.type.startsWith('image/')) {
            const file = item.getAsFile();
            if (file) imageFiles.push(file);
          }
        }

        if (imageFiles.length > 0) {
          event.preventDefault();
          const pastePos = view.state.selection.from;
          imageFiles.forEach(async (file, index) => {
            try {
              const imageUrl = await uploadImage(file);
              editor?.chain().focus().setTextSelection(pastePos + index).setImage({ src: imageUrl }).run();
              onChangeRef.current(editor?.getHTML() || '');
            } catch (error) {
              console.error('Error pasting image:', error);
            }
          });
          return true;
        }
        return false;
      },

      handleDrop(_view, event) {
        const files: File[] = [];
        if (event.dataTransfer?.files?.length) {
          for (const file of event.dataTransfer.files) {
            if (file.type.startsWith('image/')) files.push(file);
          }
        }
        if (!files.length) return false;

        event.preventDefault();
        files.forEach(async (file, index) => {
          try {
            const imageUrl = await uploadImage(file);
            editor?.chain().focus().setImage({ src: imageUrl }).run();
            onChangeRef.current(editor?.getHTML() || '');
          } catch (error) {
            console.error('Error dropping image:', error);
          }
        });
        return true;
      },
    },

    onUpdate: ({ editor: editorInstance }) => {
      if (!processingImagesRef.current) {
        onChangeRef.current(editorInstance.getHTML());
      }

      const currentSrcs = new Set<string>();
      editorInstance.state.doc.descendants((node: any) => {
        if (node.type.name === 'image') {
          const src = node.attrs?.src;
          if (src && !src.startsWith('data:')) currentSrcs.add(src);
        }
      });

      const prevSrcs = trackedImagesRef.current;
      trackedImagesRef.current = new Set(currentSrcs);
      for (const src of prevSrcs) {
        if (!currentSrcs.has(src)) {
          void deleteImageFromServerRef.current?.(src);
        }
      }

      void replaceAllNonLocalImages(editorInstance);
    },
  });

  const setLink = () => {
    if (!editor) return;
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const addImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.click();
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        const imageUrl = await uploadImage(file);
        editor?.chain().focus().setImage({ src: imageUrl }).run();
        onChangeRef.current(editor?.getHTML() || '');
      } catch (error) {
        console.error('Error adding image:', error);
      }
    };
  };

  const handleAddLinkToImage = () => {
    if (!editor) return;
    const { state } = editor;
    const { selection } = state;
    const pos = selection.from;
    const node = state.doc.nodeAt(pos);
    if (!node || node.type.name !== 'image') {
      alert('Please select an image to add a link.');
      return;
    }
    const currentAttrs = node.attrs;
    const href = prompt('Enter URL to link this image:', currentAttrs.href || '');
    if (href !== null) {
      editor.chain().focus().setNodeSelection(pos).updateAttributes('image', { ...currentAttrs, href, target: '_blank' }).run();
    }
  };

  if (!editor) return null;

  return (
    <>
      <div className="control-group">
        <div>
          <div className="btnSection">
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().undo().run(); }} disabled={!editor.can().undo()}><IconArrowBackUp stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().redo().run(); }} disabled={!editor.can().redo()}><IconArrowForwardUp stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBold().run(); }} className={editor.isActive('bold') ? 'is-active' : ''}><IconBold stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleUnderline().run(); }} className={editor.isActive('underline') ? 'is-active' : ''}><IconUnderline stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleItalic().run(); }} className={editor.isActive('italic') ? 'is-active' : ''}><IconItalic stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleStrike().run(); }} className={editor.isActive('strike') ? 'is-active' : ''}><IconStrikethrough stroke={2} /></button>
          </div>

          <div className="btnSection">
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().setHardBreak().run(); }}><IconLine stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleCode().run(); }} className={editor.isActive('code') ? 'is-active' : ''}><IconCode stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleHighlight().run(); }} className={editor.isActive('highlight') ? 'is-active' : ''}><IconHighlight stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().setHorizontalRule().run(); }}><IconLayoutDistributeHorizontal stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleSubscript().run(); }} className={editor.isActive('subscript') ? 'is-active' : ''}><IconSubscript stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleSuperscript().run(); }} className={editor.isActive('superscript') ? 'is-active' : ''}><IconSuperscript stroke={2} /></button>
          </div>

          <div className="btnSection">
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBulletList().run(); }} className={editor.isActive('bulletList') ? 'is-active' : ''}><IconList stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleOrderedList().run(); }} className={editor.isActive('orderedList') ? 'is-active' : ''}><IconListNumbers stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleTaskList().run(); }} className={editor.isActive('taskList') ? 'is-active' : ''}><IconListCheck stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBlockquote().run(); }} className={editor.isActive('blockquote') ? 'is-active' : ''}><IconBlockquote stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); addImage(); }}><IconPhotoPlus stroke={2} /></button>
          </div>

          <div className="btnSection">
            <button onClick={(e) => { e.preventDefault(); setLink(); }} className={editor.isActive('link') ? 'is-active' : ''}><IconLinkPlus stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().unsetLink().run(); }} disabled={!editor.isActive('link')}><IconLinkMinus stroke={2} /></button>
          </div>

          <div className="btnSection">
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().setTextAlign('left').run(); }} className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}><IconAlignLeft stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().setTextAlign('center').run(); }} className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}><IconAlignCenter stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().setTextAlign('right').run(); }} className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}><IconAlignRight stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().setTextAlign('justify').run(); }} className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}><IconAlignJustified stroke={2} /></button>
          </div>

          <div className="btnSection">
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 1 }).run(); }} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}><IconH1 stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 2 }).run(); }} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}><IconH2 stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 3 }).run(); }} className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}><IconH3 stroke={2} /></button>
          </div>

          <div className="btnSection">
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(); }}><IconTablePlus stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().addRowBefore().run(); }}><IconRowInsertTop stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().addRowAfter().run(); }}><IconRowInsertBottom stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().deleteRow().run(); }}><IconRowRemove stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().addColumnBefore().run(); }}><IconColumnInsertLeft stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().addColumnAfter().run(); }}><IconColumnInsertRight stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().deleteColumn().run(); }}><IconColumnRemove stroke={2} /></button>
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().deleteTable().run(); }}><IconTableMinus stroke={2} /></button>
          </div>

          <div className="btnSection">
            <input
              type="color"
              onInput={(e) => editor.chain().focus().setColor((e.target as HTMLInputElement).value).run()}
              value={editor.getAttributes('textStyle').color || '#000000'}
            />
            {[
              { label: 'Purple', color: '#958DF1' },
              { label: 'Red', color: '#F98181' },
              { label: 'Orange', color: '#FBBC88' },
              { label: 'Yellow', color: '#FAF594' },
              { label: 'Blue', color: '#70CFF8' },
              { label: 'Teal', color: '#94FADB' },
              { label: 'Green', color: '#B9F18D' },
            ].map(({ label, color }) => (
              <button
                key={color}
                onClick={(e) => { e.preventDefault(); editor.chain().focus().setColor(color).run(); }}
                className={editor.isActive('textStyle', { color }) ? 'is-active' : ''}
                data-testid={`set${label}`}
              >{label}</button>
            ))}
            <button onClick={(e) => { e.preventDefault(); editor.chain().focus().unsetColor().run(); }}>Unset color</button>
          </div>

          <div className="btnSection">
            <button onClick={(e) => { e.preventDefault(); handleAddLinkToImage(); }}><IconPhoto stroke={2} /></button>
          </div>
        </div>
      </div>

      <div className="editor-container">
        <EditorContent editor={editor} />
      </div>
    </>
  );
}