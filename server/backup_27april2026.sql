--
-- PostgreSQL database dump
--

\restrict OFbNYXgroQEIxbcB9H97m9oaUi3aQxrIZcnDxomLgjPQjfXiNMi4KKI2MfaGnih

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


--
-- Name: AdPlacement; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."AdPlacement" AS ENUM (
    'HOMEPAGE_TOP',
    'HOMEPAGE_BOTTOM',
    'BLOG_TOP',
    'BLOG_BOTTOM',
    'PRODUCT_PAGE',
    'BETWEEN_CONTENT',
    'CALCULATOR_TOP',
    'CALCULATOR_BOTTOM',
    'CATEGORY_TOP',
    'CATEGORY_BOTTOM'
);


ALTER TYPE public."AdPlacement" OWNER TO postgres;

--
-- Name: CmsAdminRole; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."CmsAdminRole" AS ENUM (
    'SUPER_ADMIN',
    'EDITOR',
    'VIEWER'
);


ALTER TYPE public."CmsAdminRole" OWNER TO postgres;

--
-- Name: CmsStatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."CmsStatus" AS ENUM (
    'DRAFT',
    'PUBLISHED',
    'ARCHIVED'
);


ALTER TYPE public."CmsStatus" OWNER TO postgres;

--
-- Name: LeadStatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."LeadStatus" AS ENUM (
    'NEW',
    'CONTACTED',
    'QUALIFIED',
    'CONVERTED',
    'REJECTED'
);


ALTER TYPE public."LeadStatus" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: cms_admins; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cms_admins (
    id text NOT NULL,
    email text NOT NULL,
    "passwordHash" text NOT NULL,
    name text NOT NULL,
    role public."CmsAdminRole" DEFAULT 'VIEWER'::public."CmsAdminRole" NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL,
    "lastLoginAt" timestamp(3) without time zone,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.cms_admins OWNER TO postgres;

--
-- Name: cms_ads; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cms_ads (
    id text NOT NULL,
    title text NOT NULL,
    image text NOT NULL,
    link text,
    placement public."AdPlacement"[] NOT NULL,
    "startDate" timestamp(3) without time zone,
    "endDate" timestamp(3) without time zone,
    active boolean DEFAULT true NOT NULL,
    clicks integer DEFAULT 0 NOT NULL,
    impressions integer DEFAULT 0 NOT NULL,
    "sortOrder" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "categoryId" text
);


ALTER TABLE public.cms_ads OWNER TO postgres;

--
-- Name: cms_blogs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cms_blogs (
    id text NOT NULL,
    title text NOT NULL,
    slug text NOT NULL,
    excerpt text,
    content text NOT NULL,
    "coverImage" text,
    tags text[] DEFAULT ARRAY[]::text[],
    author text,
    status public."CmsStatus" DEFAULT 'DRAFT'::public."CmsStatus" NOT NULL,
    "publishedAt" timestamp(3) without time zone,
    "seoTitle" text,
    "seoDescription" text,
    "viewCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "categoryId" text,
    "subCategoryId" text
);


ALTER TABLE public.cms_blogs OWNER TO postgres;

--
-- Name: cms_categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cms_categories (
    id text NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    "imageUrl" text,
    "isActive" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.cms_categories OWNER TO postgres;

--
-- Name: cms_leads; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cms_leads (
    id text NOT NULL,
    name text NOT NULL,
    email text,
    phone text,
    message text,
    "customData" jsonb,
    status public."LeadStatus" DEFAULT 'NEW'::public."LeadStatus" NOT NULL,
    notes text,
    "assignedTo" text,
    source text,
    "utmSource" text,
    "utmMedium" text,
    "utmCampaign" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "productId" text,
    "categoryId" text
);


ALTER TABLE public.cms_leads OWNER TO postgres;

--
-- Name: cms_partners; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cms_partners (
    id text NOT NULL,
    name text NOT NULL,
    "imageUrl" text,
    "isActive" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.cms_partners OWNER TO postgres;

--
-- Name: cms_products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cms_products (
    id text NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    "shortDescription" text,
    description text,
    image text,
    provider text,
    "providerLogo" text,
    "interestRate" text,
    "processingFee" text,
    "minAmount" text,
    "maxAmount" text,
    tenure text,
    features jsonb,
    benefits jsonb,
    eligibility jsonb,
    "formFields" jsonb,
    "applyUrl" text,
    status public."CmsStatus" DEFAULT 'DRAFT'::public."CmsStatus" NOT NULL,
    featured boolean DEFAULT false NOT NULL,
    "isBestSeller" boolean DEFAULT false NOT NULL,
    badge text,
    "sortOrder" integer DEFAULT 0 NOT NULL,
    "seoTitle" text,
    "seoDescription" text,
    "viewCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "categoryId" text,
    "subCategoryId" text
);


ALTER TABLE public.cms_products OWNER TO postgres;

--
-- Name: cms_sub_categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cms_sub_categories (
    id text NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    "imageUrl" text,
    "isActive" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "categoryId" text NOT NULL
);


ALTER TABLE public.cms_sub_categories OWNER TO postgres;

--
-- Name: cms_testimonials; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cms_testimonials (
    id text NOT NULL,
    name text NOT NULL,
    role text,
    avatar text,
    content text NOT NULL,
    rating integer DEFAULT 5 NOT NULL,
    featured boolean DEFAULT false NOT NULL,
    active boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.cms_testimonials OWNER TO postgres;

--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
c2d9094d-cbe1-4557-a33e-f59a3e44e096	19863bd2f8ea31db7dc2171c7aa44a640a2ed7c972dcd7792d06f0d48eb04d61	2026-04-16 11:01:06.056676+05:30	20260411070840_init	\N	\N	2026-04-16 11:01:05.99482+05:30	1
51813b25-7338-4f9c-9d16-e2f76d621326	6ae996102986046ed66b02aabb38cf49d5b15b7accb9d0c5c204f842003a95e9	2026-04-16 11:01:06.128838+05:30	20260413041428_add_blogs	\N	\N	2026-04-16 11:01:06.057795+05:30	1
17e3cf9c-81be-4b5e-bdb7-f9ffd5ae767a	ddd8a77328851fccfa536883930061c9e0b7c31bd62c84cd529b5629e4509ece	2026-04-16 11:01:06.198336+05:30	20260413113751_add_cms_partners	\N	\N	2026-04-16 11:01:06.129699+05:30	1
511e83a8-ebfa-4476-9bf1-b24131d40449	10cacddb974a2f7c7abf3196ba10b4f7eed48629cc6fa0ec79fd5d397fba766d	2026-04-16 11:01:06.27145+05:30	20260413122449_add_categories	\N	\N	2026-04-16 11:01:06.199115+05:30	1
7139183f-06c1-43d9-8ebc-2e0023060df9	104778192487dff54b4deea7615876029cb11a1db09811241618d752af67f58c	2026-04-16 11:01:06.338628+05:30	20260413130356_add_testimonials	\N	\N	2026-04-16 11:01:06.272786+05:30	1
7724adc5-7b64-4e35-93fb-38fb1998f642	6db93b01057669acdffefd50dd4f69803503c905ff47fb634fb6e8bf2f75abe2	2026-04-16 11:01:06.398405+05:30	20260414040959_blog_category_relation	\N	\N	2026-04-16 11:01:06.339689+05:30	1
b5e2cc11-eb2f-4f74-bfcf-f43a0aae5506	6bb5fd9934d55270593d577a53954a74f0a20f61a42a4867a570d2817ab0f90d	2026-04-16 11:01:06.482077+05:30	20260414051625_add_products_leads	\N	\N	2026-04-16 11:01:06.399375+05:30	1
465ea0fe-d65c-4822-aeff-ce6abb03ff5c	337306cf308ba40ad6c7eaf02c76e827c0963772f09e2d875b3a5f6c8369fcfa	2026-04-16 11:01:06.560088+05:30	20260415071315_add_calculator_table	\N	\N	2026-04-16 11:01:06.482879+05:30	1
ec7fc488-886f-44dd-b5ce-3aa68d3bb57e	0d43b0035a46c1a4dde31e62dbef8afe1ce8c043cb2bb4acb60f104228dd506f	2026-04-16 11:01:06.62444+05:30	20260416042733_add_cms_ads	\N	\N	2026-04-16 11:01:06.560819+05:30	1
357220ea-e51a-488e-9875-3b0ae5688938	fdb224a2ef2a7d6f9d7c3dbc3cf1edcc9eaeb90d3cd944e196cd4e43f221aeee	2026-04-16 11:01:06.725474+05:30	20260416052653_ad_placement_array	\N	\N	2026-04-16 11:01:06.625572+05:30	1
8e13974e-df97-4e2f-82c1-b3763c0b3677	d15352b322276944bfb6e41b1bcdc9c96dd329056a2a8b0243d82cc14410a3f5	2026-04-16 14:57:57.51514+05:30	20260416092757_remove_calculator_table	\N	\N	2026-04-16 14:57:57.469013+05:30	1
\.


--
-- Data for Name: cms_admins; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cms_admins (id, email, "passwordHash", name, role, "isActive", "lastLoginAt", "createdAt", "updatedAt") FROM stdin;
cmo11powx0000tow2rv8q98s0	admin@timesmoney.in	$2b$10$mRodOOA5KNDLbE1xNUwuF.tA8D724RiVHvPKvpB99GUZFAOe./bWi	Super Admin	SUPER_ADMIN	t	2026-04-25 09:19:06.888	2026-04-16 05:35:30.657	2026-04-25 09:19:06.902
\.


--
-- Data for Name: cms_ads; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cms_ads (id, title, image, link, placement, "startDate", "endDate", active, clicks, impressions, "sortOrder", "createdAt", "updatedAt", "categoryId") FROM stdin;
\.


--
-- Data for Name: cms_blogs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cms_blogs (id, title, slug, excerpt, content, "coverImage", tags, author, status, "publishedAt", "seoTitle", "seoDescription", "viewCount", "createdAt", "updatedAt", "categoryId", "subCategoryId") FROM stdin;
cmo45rwku000dy0w2g5r7tcfl	Health Insurance in India: Complete Guide to Plans, Benefits & How to Choose (2026)	health-insurance-in-india-complete-guide-to-plans-benefits-how-to-choose-2026	Learn what health insurance is, types of plans, benefits, and how to choose the best policy in India.	<h2><strong>Introduction</strong></h2><p>Medical costs in India are rising fast. One hospitalization can wipe out years of savings.</p><p>If you don’t have health insurance, you’re not “saving money”—you’re taking a financial risk.</p><p>Health insurance protects you from unexpected medical expenses and ensures you get proper treatment without worrying about cost.</p><hr><h2><strong>What is Health Insurance?</strong></h2><p>Health insurance is a policy where an insurance company covers your medical expenses in exchange for a premium.</p><p>It typically covers:</p><ul><li><p>Hospitalization costs</p></li><li><p>Surgeries</p></li><li><p>Pre &amp; post-hospitalization expenses</p></li><li><p>Daycare procedures</p></li></ul><hr><h2><strong>How Health Insurance Works</strong></h2><p>Simple flow:</p><ol><li><p>You buy a policy and pay premium</p></li><li><p>You get coverage (e.g., ₹5 lakh)</p></li><li><p>If hospitalized:</p><ul><li><p>Either <strong>cashless treatment</strong> at network hospital</p></li><li><p>Or reimbursement after payment</p></li></ul></li></ol><hr><h2><strong>Types of Health Insurance Plans in India</strong></h2><h3><strong>1. Individual Health Insurance</strong></h3><p>Covers one person only.</p><h3><strong>2. Family Floater Plan</strong></h3><p>One sum insured shared among family members.</p><p>👉 Best for most people.</p><h3><strong>3. Critical Illness Insurance</strong></h3><p>Covers serious diseases like cancer, heart attack.</p><h3><strong>4. Senior Citizen Health Insurance</strong></h3><p>Special plans for people above 60.</p><h3><strong>5. Group Health Insurance</strong></h3><p>Provided by employers.</p><hr><h2><strong>Key Benefits of Health Insurance</strong></h2><ul><li><p>Financial protection during medical emergencies</p></li><li><p>Cashless treatment at network hospitals</p></li><li><p>Covers expensive treatments</p></li><li><p>Tax benefits under Section 80D</p></li><li><p>Peace of mind</p></li></ul><hr><h2><strong>What is Covered?</strong></h2><p>Most policies include:</p><ul><li><p>Hospitalization expenses</p></li><li><p>ICU charges</p></li><li><p>Doctor fees</p></li><li><p>Medicines</p></li><li><p>Pre &amp; post hospitalization</p></li></ul><hr><h2><strong>What is NOT Covered?</strong></h2><p>Be clear on exclusions:</p><ul><li><p>Pre-existing diseases (initial waiting period)</p></li><li><p>Cosmetic surgery</p></li><li><p>Self-inflicted injuries</p></li><li><p>Non-medical expenses</p></li></ul><p>Blunt truth:<br>People only read benefits—not exclusions—and regret later.</p><hr><h2><strong>Important Terms You Must Understand</strong></h2><h3><strong>1. Sum Insured</strong></h3><p>Maximum amount insurer will pay.</p><h3><strong>2. Premium</strong></h3><p>Amount you pay yearly.</p><h3><strong>3. Waiting Period</strong></h3><p>Time before certain diseases are covered.</p><h3><strong>4. Network Hospitals</strong></h3><p>Hospitals where cashless treatment is available.</p><hr><h2><strong>How Much Coverage Do You Need?</strong></h2><p>Minimum recommendation:</p><ul><li><p>Individual: ₹5–10 lakh</p></li><li><p>Family: ₹10–20 lakh</p></li></ul><p>If you live in metro cities → go higher.</p><hr><h2><strong>How to Choose the Best Health Insurance</strong></h2><p>Don’t pick randomly. Check:</p><ul><li><p>Claim settlement ratio</p></li><li><p>Network hospitals</p></li><li><p>Waiting period</p></li><li><p>Premium vs coverage</p></li><li><p>Add-ons (like room rent waiver)</p></li></ul><hr><h2><strong>Best Way to Buy Health Insurance</strong></h2><p>You can buy from:</p><ul><li><p>Insurance company websites</p></li><li><p>Banks</p></li><li><p>Aggregator platforms like Policybazaar</p></li></ul><p>Compare before buying—never go with the first option.</p><hr><h2><strong>Common Mistakes to Avoid</strong></h2><ul><li><p>Buying low coverage to save premium</p></li><li><p>Ignoring waiting period</p></li><li><p>Not disclosing medical history</p></li><li><p>Relying only on employer insurance</p></li></ul><hr><h2><strong>Health Insurance vs Medical Savings</strong></h2><table style="min-width: 75px;"><colgroup><col style="min-width: 25px;"><col style="min-width: 25px;"><col style="min-width: 25px;"></colgroup><tbody><tr><th colspan="1" rowspan="1"><p>Feature</p></th><th colspan="1" rowspan="1"><p>Insurance</p></th><th colspan="1" rowspan="1"><p>Savings</p></th></tr><tr><td colspan="1" rowspan="1"><p>Protection</p></td><td colspan="1" rowspan="1"><p>High</p></td><td colspan="1" rowspan="1"><p>Low</p></td></tr><tr><td colspan="1" rowspan="1"><p>Cost</p></td><td colspan="1" rowspan="1"><p>Fixed premium</p></td><td colspan="1" rowspan="1"><p>Uncertain</p></td></tr><tr><td colspan="1" rowspan="1"><p>Risk</p></td><td colspan="1" rowspan="1"><p>Covered</p></td><td colspan="1" rowspan="1"><p>Fully yours</p></td></tr></tbody></table><p>Blunt truth:<br>Savings alone are NOT enough for medical emergencies.</p><hr><h2><strong>Final Verdict</strong></h2><p>Health insurance is not optional anymore.</p><p>If you don’t have it:</p><ul><li><p>One hospital bill = financial setback</p></li></ul><p>If you have it:</p><ul><li><p>You stay protected</p></li></ul><p>Simple decision.</p>	/uploads/blog-covers/1776505950817-677332187.jpg	{"health insurance","medical insurance",india,policy}	Admin	PUBLISHED	2026-04-18 09:52:30.892	Health Insurance in India: Plans, Benefits & How to Choose (2026)	Find the best health insurance in India. Learn types, coverage, benefits, and tips to choose the right policy for your needs.	8	2026-04-18 09:52:30.894	2026-04-25 11:51:30.365	cmo14o61u0001rcw22x10wlh5	cmo1818sd000trcw2ilkczzsk
cmo45z1nt000ey0w2thsplxbg	Personal Loan in India: Complete Guide to Interest Rates, Eligibility & Smart Usage (2026)	personal-loan-in-india-complete-guide-to-interest-rates-eligibility-smart-usage-2026	Learn everything about personal loans in India including interest rates, eligibility, benefits, and when you should or should not take one.	<h2><strong>Introduction</strong></h2><p>Personal loans are the easiest loans to get—and that’s exactly why most people misuse them.</p><p>No collateral, quick approval, instant money. Sounds great, right?<br>But high interest rates can trap you if you’re not careful.</p><p>This guide will tell you <strong>when a personal loan makes sense—and when it’s a bad decision</strong>.</p><hr><h2><strong>What is a Personal Loan?</strong></h2><p>A personal loan is an unsecured loan provided by banks or NBFCs without requiring any collateral.</p><p>You can use it for:</p><ul><li><p>Medical emergencies</p></li><li><p>Weddings</p></li><li><p>Travel</p></li><li><p>Education</p></li><li><p>Debt consolidation</p></li></ul><p>No restrictions—but that doesn’t mean you should use it carelessly.</p><hr><h2><strong>How Personal Loans Work</strong></h2><p>Simple breakdown:</p><ol><li><p>You apply for a loan</p></li><li><p>Lender checks your:</p><ul><li><p>Income</p></li><li><p>Credit score</p></li><li><p>Repayment capacity</p></li></ul></li><li><p>Loan gets approved</p></li><li><p>Money is credited to your account</p></li><li><p>You repay in EMIs (monthly installments)</p></li></ol><hr><h2><strong>Interest Rates in India</strong></h2><p>Personal loans have higher interest rates because they are unsecured.</p><p>Typical range:</p><ul><li><p><strong>10% to 24% per year</strong></p></li></ul><p>Your rate depends on:</p><ul><li><p>Credit score</p></li><li><p>Income</p></li><li><p>Employer profile</p></li></ul><p>Blunt truth:<br>Low credit score = you pay more.</p><hr><h2><strong>Eligibility Criteria</strong></h2><p>Most lenders require:</p><ul><li><p>Age: 21–60 years</p></li><li><p>Stable income</p></li><li><p>Good credit score (750+)</p></li><li><p>Employment (salaried/self-employed)</p></li></ul><hr><h2><strong>Documents Required</strong></h2><ul><li><p>PAN Card</p></li><li><p>Aadhaar Card</p></li><li><p>Salary slips / Income proof</p></li><li><p>Bank statements</p></li></ul><hr><h2><strong>Advantages of Personal Loans</strong></h2><ul><li><p>No collateral required</p></li><li><p>Quick approval (sometimes within hours)</p></li><li><p>Flexible usage</p></li><li><p>Minimal documentation</p></li></ul><hr><h2><strong>Disadvantages (Important)</strong></h2><p>Don’t ignore this:</p><ul><li><p>High interest rates</p></li><li><p>Penalties for late payment</p></li><li><p>Can lead to debt trap</p></li><li><p>Impacts credit score if mismanaged</p></li></ul><hr><h2><strong>When Should You Take a Personal Loan?</strong></h2><p>✔ Good reasons:</p><ul><li><p>Medical emergency</p></li><li><p>Urgent financial need</p></li><li><p>Debt consolidation (to reduce interest burden)</p></li></ul><p>❌ Bad reasons:</p><ul><li><p>Buying gadgets</p></li><li><p>Luxury spending</p></li><li><p>Vacations (unless you can repay easily)</p></li></ul><p>Blunt truth:<br>If it’s not urgent or important, don’t take a loan.</p><hr><h2><strong>How EMI is Calculated</strong></h2><p>Your EMI depends on:</p><ul><li><p>Loan amount</p></li><li><p>Interest rate</p></li><li><p>Tenure</p></li></ul><p>Higher tenure = lower EMI but more total interest<br>Lower tenure = higher EMI but less interest</p><hr><h2><strong>Tips to Get Lowest Interest Rate</strong></h2><ul><li><p>Maintain high credit score</p></li><li><p>Compare lenders before applying</p></li><li><p>Choose shorter tenure</p></li><li><p>Avoid multiple loan applications</p></li></ul><hr><h2><strong>Where to Apply for Personal Loan</strong></h2><p>You can apply through:</p><ul><li><p>Banks (HDFC, SBI, ICICI)</p></li><li><p>NBFCs</p></li><li><p>Online platforms like Bajaj Finserv</p></li></ul><hr><h2><strong>Common Mistakes to Avoid</strong></h2><ul><li><p>Taking loan without repayment plan</p></li><li><p>Ignoring hidden charges</p></li><li><p>Choosing long tenure blindly</p></li><li><p>Missing EMIs</p></li></ul><hr><h2><strong>Personal Loan vs Credit Card Loan</strong></h2><table style="min-width: 75px;"><colgroup><col style="min-width: 25px;"><col style="min-width: 25px;"><col style="min-width: 25px;"></colgroup><tbody><tr><th colspan="1" rowspan="1"><p>Feature</p></th><th colspan="1" rowspan="1"><p>Personal Loan</p></th><th colspan="1" rowspan="1"><p>Credit Card Loan</p></th></tr><tr><td colspan="1" rowspan="1"><p>Interest</p></td><td colspan="1" rowspan="1"><p>Lower</p></td><td colspan="1" rowspan="1"><p>Higher</p></td></tr><tr><td colspan="1" rowspan="1"><p>Tenure</p></td><td colspan="1" rowspan="1"><p>Flexible</p></td><td colspan="1" rowspan="1"><p>Short</p></td></tr><tr><td colspan="1" rowspan="1"><p>Amount</p></td><td colspan="1" rowspan="1"><p>Higher</p></td><td colspan="1" rowspan="1"><p>Limited</p></td></tr></tbody></table><hr><h2><strong>Final Verdict</strong></h2><p>Personal loans are useful—but dangerous if misused.</p><p>If you’re disciplined → it helps<br>If you’re careless → it traps you</p>	/uploads/blog-covers/1776506283993-389584751.png	{"personal loan","loan india",emi,"interest rates"}	Super Admin	PUBLISHED	2026-04-18 09:58:04.07	Personal Loan in India: Interest Rates, Eligibility & EMI Guide (2026)	Check personal loan interest rates, eligibility, EMI calculation, and tips to get the lowest rates in India. Complete guide for smart borrowing.	21	2026-04-18 09:58:04.073	2026-04-25 12:24:28.83	cmo12drmn0000gkw2kartjfyj	cmo12guqz0002gkw2609coxu9
cmo45nphx000cy0w2xvocfo0j	NPS Explained: Complete Guide to National Pension Scheme in India (2026)	nps-explained-complete-guide-to-national-pension-scheme-in-india-2026	Understand NPS, its benefits, tax savings, returns, and how to invest for a secure retirement in India.	<h2><strong>Introduction</strong></h2><p>If you’re planning for retirement and still relying only on savings or fixed deposits, you’re already behind. Inflation will eat your money.</p><p>The <strong>National Pension Scheme (NPS)</strong> is one of the most powerful long-term investment options in India, combining <strong>market-linked returns + tax benefits + disciplined savings</strong>.</p><p>This guide breaks it down in the simplest way possible.</p><hr><h2><strong>What is NPS?</strong></h2><p>NPS is a government-backed retirement scheme regulated by the Pension Fund Regulatory and Development Authority (PFRDA).</p><p>It allows you to:</p><ul><li><p>Invest regularly during your working years</p></li><li><p>Build a retirement corpus</p></li><li><p>Withdraw partially + receive pension after retirement</p></li></ul><hr><h2><strong>How NPS Works</strong></h2><p>Here’s the simple flow:</p><ol><li><p>You open an NPS account</p></li><li><p>Invest regularly (monthly/yearly)</p></li><li><p>Money is invested in:</p><ul><li><p>Equity (stocks)</p></li><li><p>Corporate bonds</p></li><li><p>Government securities</p></li></ul></li><li><p>At retirement (age 60):</p><ul><li><p>You can withdraw <strong>60% lump sum (tax-free)</strong></p></li><li><p>Remaining <strong>40% is used to buy annuity (pension)</strong></p></li></ul></li></ol><hr><h2><strong>Types of NPS Accounts</strong></h2><h3><strong>1. Tier I Account (Main Account)</strong></h3><ul><li><p>Mandatory for NPS</p></li><li><p>Lock-in till retirement</p></li><li><p>Tax benefits available</p></li></ul><h3><strong>2. Tier II Account (Optional)</strong></h3><ul><li><p>Like a savings account</p></li><li><p>No lock-in</p></li><li><p>No major tax benefits</p></li></ul><p>Blunt truth:<br>If you’re serious about retirement → Tier I is what matters.</p><hr><h2><strong>Investment Options in NPS</strong></h2><h3><strong>1. Active Choice</strong></h3><p>You decide allocation:</p><ul><li><p>Equity (E)</p></li><li><p>Corporate Bonds (C)</p></li><li><p>Government Securities (G)</p></li></ul><h3><strong>2. Auto Choice</strong></h3><p>System automatically adjusts risk based on age.</p><p>If you don’t understand markets → go Auto.<br>If you do → go Active.</p><hr><h2><strong>NPS Returns (Reality Check)</strong></h2><p>NPS is <strong>market-linked</strong>, so returns are not fixed.</p><p>Average historical returns:</p><ul><li><p>Equity: 10–12%</p></li><li><p>Debt: 7–9%</p></li></ul><p>Overall blended returns: <strong>8%–10%</strong></p><p>Not crazy high, but solid for long-term retirement.</p><hr><h2><strong>Tax Benefits of NPS</strong></h2><p>This is where NPS dominates.</p><h3>Under Section 80C:</h3><ul><li><p>Up to ₹1.5 lakh deduction</p></li></ul><h3>Under Section 80CCD(1B):</h3><ul><li><p>Extra ₹50,000 deduction</p></li></ul><p>👉 Total: ₹2 lakh tax benefit</p><h3>On Withdrawal:</h3><ul><li><p>60% withdrawal = <strong>Tax-Free</strong></p></li></ul><hr><h2><strong>Advantages of NPS</strong></h2><ul><li><p>Government-backed (safe structure)</p></li><li><p>Low cost (cheapest investment product in India)</p></li><li><p>Tax-saving powerhouse</p></li><li><p>Long-term wealth creation</p></li><li><p>Flexible investment choice</p></li></ul><hr><h2><strong>Disadvantages of NPS</strong></h2><p>Let’s be real—it's not perfect.</p><ul><li><p>Lock-in till 60 years</p></li><li><p>Mandatory annuity (less flexibility)</p></li><li><p>Pension returns depend on annuity rates</p></li><li><p>Not ideal for short-term goals</p></li></ul><hr><h2><strong>Who Should Invest in NPS?</strong></h2><p>NPS is ideal for:</p><ul><li><p>Salaried individuals</p></li><li><p>People in 20s–40s planning retirement</p></li><li><p>Tax-saving focused investors</p></li><li><p>Long-term disciplined investors</p></li></ul><p>Not ideal for:</p><ul><li><p>Short-term traders</p></li><li><p>People needing liquidity</p></li></ul><hr><h2><strong>NPS vs Other Retirement Options</strong></h2><table style="min-width: 100px;"><colgroup><col style="min-width: 25px;"><col style="min-width: 25px;"><col style="min-width: 25px;"><col style="min-width: 25px;"></colgroup><tbody><tr><th colspan="1" rowspan="1"><p>Feature</p></th><th colspan="1" rowspan="1"><p>NPS</p></th><th colspan="1" rowspan="1"><p>PPF</p></th><th colspan="1" rowspan="1"><p>FD</p></th></tr><tr><td colspan="1" rowspan="1"><p>Returns</p></td><td colspan="1" rowspan="1"><p>Market-linked</p></td><td colspan="1" rowspan="1"><p>Fixed</p></td><td colspan="1" rowspan="1"><p>Fixed</p></td></tr><tr><td colspan="1" rowspan="1"><p>Risk</p></td><td colspan="1" rowspan="1"><p>Medium</p></td><td colspan="1" rowspan="1"><p>Low</p></td><td colspan="1" rowspan="1"><p>Low</p></td></tr><tr><td colspan="1" rowspan="1"><p>Lock-in</p></td><td colspan="1" rowspan="1"><p>Till 60</p></td><td colspan="1" rowspan="1"><p>15 years</p></td><td colspan="1" rowspan="1"><p>Flexible</p></td></tr><tr><td colspan="1" rowspan="1"><p>Tax Benefit</p></td><td colspan="1" rowspan="1"><p>High</p></td><td colspan="1" rowspan="1"><p>High</p></td><td colspan="1" rowspan="1"><p>Low</p></td></tr></tbody></table><hr><h2><strong>How to Open an NPS Account</strong></h2><p>You can open NPS through:</p><ul><li><p>National Securities Depository Limited (NSDL portal)</p></li><li><p>Banks (HDFC, ICICI, SBI)</p></li><li><p>Online platforms</p></li></ul><p>Documents needed:</p><ul><li><p>Aadhaar</p></li><li><p>PAN</p></li><li><p>Bank account</p></li></ul><hr><h2><strong>Pro Tips (Most People Ignore)</strong></h2><ul><li><p>Start early → compounding works best</p></li><li><p>Increase contribution yearly</p></li><li><p>Keep equity allocation higher when young</p></li><li><p>Don’t withdraw early unless necessary</p></li></ul><hr><h2><strong>Final Verdict</strong></h2><p>NPS is not a “get rich quick” scheme.</p><p>It’s a <strong>get rich slowly and safely</strong> system.</p><p>If you ignore retirement planning now, you’ll regret it later—simple as that.</p>	/uploads/blog-covers/1776505755019-85939273.png	{nps,"retirement planning","tax saving","pension india"}	Akash	PUBLISHED	2026-04-18 09:49:15.09	NPS in India: Benefits, Tax Savings, Returns & How It Works (2026)	Learn everything about NPS in India including benefits, tax deductions, returns, and how to open an account for retirement planning.	3	2026-04-18 09:49:15.093	2026-04-18 09:53:13.861	cmo14oe5s0002rcw2icjox41u	cmo18ep1e0016rcw29gy28a8a
cmo45hcde000by0w2lskvbjy8	What Are Bonds & How Do They Work in India? Complete Beginner’s Guide	what-are-bonds-how-do-they-work-in-india-complete-beginner-s-guide	Learn how bonds work, types of bonds in India, risks, returns, and whether they are a good investment for you.	<p><strong>Introduction</strong></p><p>Bonds are one of the safest and most stable investment options available, especially for investors who want predictable returns with lower risk compared to stocks. In India, bonds are issued by the government, public sector companies, and private corporations to raise capital.</p><p>If you’re someone who wants steady income instead of high-risk market fluctuations, bonds can play a crucial role in your portfolio.</p><hr><p><strong>What Are Bonds?</strong></p><p>A bond is a fixed-income financial instrument where you lend money to an entity (government or company) for a specific period at a fixed interest rate.</p><p>In simple terms:<br>You = Lender<br>Government/Company = Borrower</p><p>They pay you:</p><ul><li><p>Regular interest (called coupon)</p></li><li><p>Full principal at maturity</p></li></ul><hr><p><strong>How Do Bonds Work?</strong></p><p>Let’s take a simple example:</p><ul><li><p>You invest ₹10,000 in a bond</p></li><li><p>Interest rate: 7% per year</p></li><li><p>Duration: 5 years</p></li></ul><p>You will receive:</p><ul><li><p>₹700 every year as interest</p></li><li><p>₹10,000 at the end of 5 years</p></li></ul><p>This makes bonds predictable and stable compared to equities.</p><hr><p><strong>Types of Bonds in India</strong></p><ol><li><p><strong>Government Bonds (G-Secs)</strong><br>Issued by the Government of India. These are the safest as they carry almost zero default risk.</p></li><li><p><strong>Corporate Bonds</strong><br>Issued by companies. They offer higher returns but come with slightly higher risk.</p></li><li><p><strong>Tax-Free Bonds</strong><br>Interest earned is exempt from tax. Ideal for high-income individuals.</p></li><li><p><strong>Zero-Coupon Bonds</strong><br>No regular interest. You buy at a discount and get full value at maturity.</p></li><li><p><strong>Convertible Bonds</strong><br>Can be converted into company shares later.</p></li></ol><hr><p><strong>Advantages of Investing in Bonds</strong></p><ul><li><p>Stable and predictable returns</p></li><li><p>Lower risk compared to stocks</p></li><li><p>Suitable for conservative investors</p></li><li><p>Regular income through interest payments</p></li><li><p>Portfolio diversification</p></li></ul><hr><p><strong>Risks of Bonds</strong></p><p>Don’t assume bonds are risk-free. They also have risks:</p><ul><li><p><strong>Interest Rate Risk</strong>: If interest rates rise, bond prices fall</p></li><li><p><strong>Credit Risk</strong>: Company may default</p></li><li><p><strong>Inflation Risk</strong>: Returns may not beat inflation</p></li></ul><hr><p><strong>Who Should Invest in Bonds?</strong></p><p>Bonds are best for:</p><ul><li><p>Beginners who fear stock market volatility</p></li><li><p>Retired individuals needing stable income</p></li><li><p>Investors looking for diversification</p></li><li><p>Low-risk investors</p></li></ul><p>If you only chase high returns, bonds alone won’t satisfy you.</p><hr><p><strong>Bonds vs Stocks</strong></p><table style="min-width: 75px;"><colgroup><col style="min-width: 25px;"><col style="min-width: 25px;"><col style="min-width: 25px;"></colgroup><tbody><tr><th colspan="1" rowspan="1"><p>Feature</p></th><th colspan="1" rowspan="1"><p>Bonds</p></th><th colspan="1" rowspan="1"><p>Stocks</p></th></tr><tr><td colspan="1" rowspan="1"><p>Risk</p></td><td colspan="1" rowspan="1"><p>Low</p></td><td colspan="1" rowspan="1"><p>High</p></td></tr><tr><td colspan="1" rowspan="1"><p>Returns</p></td><td colspan="1" rowspan="1"><p>Fixed</p></td><td colspan="1" rowspan="1"><p>Variable</p></td></tr><tr><td colspan="1" rowspan="1"><p>Ownership</p></td><td colspan="1" rowspan="1"><p>No</p></td><td colspan="1" rowspan="1"><p>Yes</p></td></tr><tr><td colspan="1" rowspan="1"><p>Stability</p></td><td colspan="1" rowspan="1"><p>High</p></td><td colspan="1" rowspan="1"><p>Low</p></td></tr></tbody></table><p>Blunt truth:<br>Bonds won’t make you rich fast—but they protect your money.</p><hr><p><strong>How to Invest in Bonds in India</strong></p><p>You can invest through:</p><ul><li><p>RBI Retail Direct Platform</p></li><li><p>Stock exchanges (NSE/BSE)</p></li><li><p>Mutual funds (Debt Funds)</p></li><li><p>Banks and financial institutions</p></li></ul><hr><p><strong>Final Verdict</strong></p><p>Bonds are not exciting—but they are essential.</p><p>If your entire portfolio is stocks, you’re gambling.<br>If your entire portfolio is bonds, you’re playing too safe.</p><p><strong>Smart investors balance both.</strong></p>	/uploads/blog-covers/1776505458038-652220989.webp	{bonds,"fixed income","safe investment","india bonds"}	Akash	PUBLISHED	2026-04-18 09:44:18.13	Bonds in India: Meaning, Types, Returns & How to Invest (2026 Guide)	Learn what bonds are, how they work in India, types of bonds, returns, risks, and how to invest. Complete beginner-friendly guide for safe investing.	6	2026-04-18 09:44:18.146	2026-04-25 09:03:26.326	cmo14oe5s0002rcw2icjox41u	cmo18ezv20017rcw2o9am12cg
\.


--
-- Data for Name: cms_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cms_categories (id, name, slug, "imageUrl", "isActive", "createdAt", "updatedAt") FROM stdin;
cmo12drmn0000gkw2kartjfyj	Loans	loans	/uploads/categories/1776318853802-28370354.png	t	2026-04-16 05:54:13.919	2026-04-16 05:54:13.919
cmo14oe5s0002rcw2icjox41u	Investments	investments	/uploads/categories/1776322863461-312717219.png	t	2026-04-16 06:58:28.912	2026-04-16 07:01:03.476
cmo14o61u0001rcw22x10wlh5	Insurance	insurance	/uploads/categories/1776322873710-929374761.jfif	t	2026-04-16 06:58:18.402	2026-04-16 07:01:13.713
cmo14nxv60000rcw2ryvby02e	Bank Accounts	bank-accounts	/uploads/categories/1776322884894-927153983.png	t	2026-04-16 06:58:07.794	2026-04-16 07:01:24.897
cmo12f5ji0001gkw2bffrwf9m	Credit Cards	credit-cards	/uploads/categories/1776323490374-92444164.jfif	t	2026-04-16 05:55:18.606	2026-04-16 07:11:30.459
\.


--
-- Data for Name: cms_leads; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cms_leads (id, name, email, phone, message, "customData", status, notes, "assignedTo", source, "utmSource", "utmMedium", "utmCampaign", "createdAt", "updatedAt", "productId", "categoryId") FROM stdin;
cmo15owy5000rrcw2ewhlq9ix	Akash Meena	aakashmeena194745@gmail.com	7850986035	\N	{"subCategoryId": "cmo15brj9000frcw2zjukk69f", "employmentType": "Salaried"}	NEW	\N	\N	hero_form	\N	\N	\N	2026-04-16 07:26:52.877	2026-04-16 07:27:32.467	\N	cmo12f5ji0001gkw2bffrwf9m
cmodunwa00001osw2l9vyeboh	Akash Meena	aakashmeena194745@gmail.com	7850986035	\N	{"subCategoryId": "cmo12guqz0002gkw2609coxu9", "employmentType": "Salaried"}	NEW	\N	\N	hero_form	\N	\N	\N	2026-04-25 04:39:09.864	2026-04-25 04:40:51.132	\N	cmo12drmn0000gkw2kartjfyj
cmodym00n0000dsw2fw2d206a	welome model	nwiwniwni@gmial.com	9923289293	\N	{"subCategoryId": "cmo14zaq00005rcw259uv44u8", "employmentType": "Self-Employed"}	NEW	\N	\N	hero_form	\N	\N	\N	2026-04-25 06:29:39.863	2026-04-25 06:29:48.16	\N	cmo12drmn0000gkw2kartjfyj
cmoe57k8l0000u4w2lw7oe2az	rohit sharma	\N	7929727971	\N	{"Pancard Number": "89829832839292", "employmentType": "Salaried", "Aadharcard Number": "738278372873827382"}	NEW	\N	\N	product_page	\N	\N	\N	2026-04-25 09:34:23.542	2026-04-25 09:34:23.542	cmo71qzlz00017ow2217vao1w	cmo14nxv60000rcw2ryvby02e
cmoect08n00006ow20i4z2y2i	testing wubu	\N	8293928392	\N	{"DOB": "23232323232", "employmentType": "Retired"}	NEW	\N	\N	product_page	\N	\N	\N	2026-04-25 13:07:01.367	2026-04-25 13:07:01.367	cmoe6qnwf0003u4w2jyrmqcx7	cmo12drmn0000gkw2kartjfyj
cmogofmam0000sww2b3iodqvr	uygf	\N	9567898567	\N	{"subCategoryId": "cmo15b0zw000ercw21po1mp9z", "employmentType": "Self-Employed"}	NEW	\N	\N	hero_form	\N	\N	\N	2026-04-27 04:08:04.511	2026-04-27 04:08:04.511	\N	cmo12f5ji0001gkw2bffrwf9m
\.


--
-- Data for Name: cms_partners; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cms_partners (id, name, "imageUrl", "isActive", "createdAt", "updatedAt") FROM stdin;
cmo44hrey0007y0w2szpa97dy	HDFC	/uploads/partners/1776503798024-130808143.png	t	2026-04-18 09:16:38.026	2026-04-18 09:16:38.026
cmo44i4ym0008y0w2dniz3zs4	Paytm	/uploads/partners/1776503815581-370946147.png	t	2026-04-18 09:16:55.582	2026-04-18 09:16:55.582
cmo44fp3j0006y0w2173c2mgi	CreditWise Hub	/uploads/partners/1776503845939-932008172.jfif	t	2026-04-18 09:15:01.711	2026-04-18 09:17:26.013
cmo44f4wa0005y0w2on0p98o1	SmartCard Network	/uploads/partners/1776503877969-647149842.jfif	t	2026-04-18 09:14:35.53	2026-04-18 09:17:57.972
cmo44lkbn0009y0w2od4xlvi9	Fast Loan	/uploads/partners/1776503975456-53841147.jfif	t	2026-04-18 09:19:35.459	2026-04-18 09:19:35.459
cmo44m8fd000ay0w2v8a1axkb	Finova	/uploads/partners/1776504006695-872457971.jfif	t	2026-04-18 09:20:06.697	2026-04-18 09:20:06.697
\.


--
-- Data for Name: cms_products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cms_products (id, name, slug, "shortDescription", description, image, provider, "providerLogo", "interestRate", "processingFee", "minAmount", "maxAmount", tenure, features, benefits, eligibility, "formFields", "applyUrl", status, featured, "isBestSeller", badge, "sortOrder", "seoTitle", "seoDescription", "viewCount", "createdAt", "updatedAt", "categoryId", "subCategoryId") FROM stdin;
cmodtsjip0000osw2rjfsk3jf	Star Health Family Plan	star-health-family-plan	Comprehensive family health insurance with cashless treatment at 14,000+ hospitals.	Star Health Family Health Optima is a comprehensive health insurance plan designed to protect your entire family under a single policy, offering a high sum insured of up to ₹1 Crore. It ensures financial security during medical emergencies with wide coverage for hospitalization expenses, pre and post-hospitalization costs, and daycare procedures.\r\n\r\nThe plan comes with cashless treatment facilities across a large network of hospitals, making the claim process smooth and hassle-free. One of its key highlights is the absence of room rent capping, allowing you to choose the hospital room without worrying about extra charges. Additionally, it offers free annual health check-ups for all insured members, helping you stay proactive about your health.\r\n\r\nWith lifetime renewability, coverage for modern treatments, and optional add-ons for enhanced protection, Star Health Family Health Optima stands out as a reliable and flexible solution for safeguarding your family’s health and finances.	/uploads/products/1777090486870-484130838.jfif	Star Health Insurance	/uploads/provider-logos/1777090486872-90441491.jfif		Starting from ₹8,000/year (₹5L cover, family of 4)				["Cashless treatment at 14,000+ hospitals", "No room rent capping", "Day care procedures covered", "Automatic recharge of sum insured"]	["Free annual health check-up", "No co-payment clause", "AYUSH treatment covered", "Maternity & newborn coverage"]	["Age: 18-65 years (adult)", "Children: 16 days to 25 years", "No pre-medical screening up to 50 years", "Pre-existing diseases covered after 48 months"]	null	https://www.starhealth.in/health-insurance/family-health-optima	PUBLISHED	t	t	popular	1	Star Health Family Health Optima Plan – ₹1 Crore Cover, Cashless Treatment & No Room Rent Limit	Get complete family protection with Star Health Family Health Optima. Enjoy up to ₹1 Crore sum insured, cashless hospitalization, no room rent capping, free annual health check-ups, and lifelong renewability. Ideal health insurance plan for full family coverage.	28	2026-04-25 04:14:46.993	2026-04-27 04:06:01.257	cmo14o61u0001rcw22x10wlh5	cmo1818sd000trcw2ilkczzsk
cmoe5r1ue0001u4w28yfowyz1	Bajaj Finance Fixed Deposit	bajaj-finance-fixed-deposit	High-interest fixed deposits with CRISIL AAA/STABLE rating and flexible tenures.	Bajaj Finance Fixed Deposit (FD) is a reliable and high-return investment option offering interest rates of up to 8.60% p.a. for senior citizens, along with competitive returns for regular investors. It comes with flexible tenure options ranging from 12 to 60 months, making it suitable for both short-term and long-term financial planning. Backed by top safety ratings of CRISIL AAA/STABLE and [ICRA]AAA(Stable), it ensures a high level of security for your invested capital. Investors can choose between cumulative and non-cumulative interest payout options based on their income needs. Additionally, it offers a seamless online booking process, easy account management, and quick processing, making it a convenient and trusted choice for those seeking stable and secure returns in India.	/uploads/products/1777110572710-775936272.jfif	Bajaj FinanceUp to 8.60% p.a. (senior citizens)	/uploads/provider-logos/1777110572715-99544255.png	Up to 8.60% p.a. (senior citizens)	No charges — invest from ₹15,000	10,000	1,00,000	12–60 months	["CRISIL AAA/STABLE rating", "Monthly, quarterly or maturity payout", "Auto-renewal facility", "Loan against FD available"]	["Highest safety rating", "Special rates for senior citizens", "Online FD booking", "Premature withdrawal allowed"]	["Age: 18+ years (60+ for senior citizen rates)", "Indian resident", "Valid PAN card", "KYC compliant"]	[{"type": "number", "label": "Monthly Income", "required": true}, {"type": "number", "label": "Pancard Number", "required": true}]	https://www.bajajfinserv.in/fixed-deposit	PUBLISHED	t	f	Popular	3	Bajaj Finance FD Interest Rates 2026 – Up to 8.60% p.a., Safe & High Returns	Invest in Bajaj Finance FD with interest rates up to 8.60% p.a. for senior citizens. Enjoy flexible tenures (12–60 months), AAA safety ratings, and secure, stable returns with easy online investment options.	0	2026-04-25 09:49:32.822	2026-04-25 12:45:37.449	cmo14oe5s0002rcw2icjox41u	cmo18cwr40012rcw2p2gnkkty
cmoe60uxb0002u4w29c0wqg7m	Kotak 811 Savings Account	kotak-811-savings-account	Zero balance digital savings account with instant account opening.	Kotak Mahindra Bank 811 is a zero-balance savings account that can be opened instantly using just your Aadhaar and PAN, making it one of the fastest ways to start banking in India. It offers interest rates of up to 3.5% p.a. on your savings, along with the convenience of a free virtual debit card and the option to get a physical debit card. The account is designed for a completely digital experience, allowing you to manage transactions, pay bills, transfer money, and track expenses easily through mobile and internet banking. With features like seamless UPI payments, secure fund transfers, and 24/7 access to banking services, Kotak 811 ensures flexibility and ease of use. It is an ideal choice for individuals looking for a hassle-free, paperless banking solution with modern digital features and no minimum balance requirement.	/uploads/products/1777111030321-89141901.png	Kotak Mahindra Bank	/uploads/provider-logos/1777111030322-622994911.png	Up to 3.50% p.a.	Zero balance — no minimum balance requirement	10,000	1,00,000		["Zero balance account", "Instant digital account opening", "Free virtual debit card", "UPI & net banking enabled"]	["No minimum balance penalty", "Attractive interest rate", "24/7 digital banking", "Easy KYC via Aadhaar"]	["Age: 18+ years", "Indian resident", "Valid Aadhaar & PAN", "Mobile number linked to Aadhaar"]	null	https://www.kotak.com/en/personal-banking/accounts/811.html	PUBLISHED	t	t	best	4	Kotak 811 Zero Balance Account – Instant Online Savings Account with 3.5% Interest	Open a Kotak Mahindra Bank 811 zero balance savings account instantly with Aadhaar & PAN. Earn up to 3.5% interest, enjoy digital banking, free debit card, and seamless online transactions anytime, anywhere.	0	2026-04-25 09:57:10.415	2026-04-25 09:57:10.415	cmo14nxv60000rcw2ryvby02e	cmo15mowt000qrcw27knjc6sy
cmoe6qnwf0003u4w2jyrmqcx7	SBI Car Loan	sbi-car-loan	Lowest interest rate car loans from India's most trusted bank.	State Bank of India Car Loan offers competitive interest rates starting from 8.50% p.a. for new cars, making it an affordable financing option for individuals planning to purchase a vehicle. The loan comes with minimal documentation and a simple application process, ensuring quick approvals and hassle-free disbursal. SBI provides flexible repayment tenure options, allowing borrowers to choose a plan that suits their financial capacity. Existing SBI customers and defence personnel can benefit from special concessional interest rates and exclusive offers. Additional features include high loan eligibility, financing for a wide range of car models, and the option for prepayment with minimal or no charges. With its trusted reputation, transparent terms, and customer-friendly features, SBI Car Loan is a reliable choice for financing your dream car.\r\nTenure:	/uploads/products/1777112234278-5511946.jfif	State Bank of India	/uploads/provider-logos/1777112234278-790784356.jfif	8.50% - 10.15% p.a.	₹1,000 - ₹5,000	10,000	1,00,000	Up to 7 years (12 to 84 months)	["Low interest rates", "Minimal documentation", "Pre-approved car loans", "No foreclosure charges after 12 months"]	["Trusted brand", "Pan-India branch network", "Green car loan option", "Special rates for existing customers"]	["Age: 21-65 years", "Salaried, self-employed or pensioners", "Minimum income: ₹15,000/month", "CIBIL score: 650+"]	[{"type": "date", "label": "DOB", "required": true}]	https://sbi.co.in/web/personal-banking/loans/auto-loans	PUBLISHED	t	f	Latest	5	SBI Car Loan Interest Rates 2026 – Starting at 8.50% p.a. for New Cars	Apply for State Bank of India Car Loan with interest rates from 8.50% p.a. Enjoy flexible tenure up to 7 years, minimal documentation, quick approval, and special benefits for SBI customers and defence personnel.	1	2026-04-25 10:17:14.367	2026-04-25 13:06:32.552	cmo12drmn0000gkw2kartjfyj	cmo14zr4a0006rcw2gnwd5nqx
cmo71qzlz00017ow2217vao1w	Zerodha Demat Account	zerodha-demat-account	India's largest discount broker with zero brokerage on equity delivery.	Open a Zerodha Demat & Trading Account and start investing with zero brokerage on equity delivery trades. Benefit from low-cost trading, seamless account management, and access to India's most trusted trading platforms — Kite for fast and intuitive trading, Console for detailed portfolio tracking and reporting, and Coin for commission-free mutual fund investments. Whether you're a beginner or an experienced trader, Zerodha offers powerful tools, advanced charts, and real-time market data to help you make smarter financial decisions and grow your wealth efficiently.	/uploads/products/1776684105484-658392641.png	Zerodha	/uploads/provider-logos/1776680588109-156377862.png	N/A	Account opening: ₹200 (one-time) | AMC: ₹300/year	10,000	1,00,000		["Zero brokerage on delivery", "Kite trading platform", "Coin for direct mutual funds", "Varsity for learning"]	["India's #1 broker by active clients", "Flat ₹20 per intraday/F&O trade", "Free direct mutual fund investing", "Advanced charting tools"]	["Age: 18+ years", "Indian resident", "Valid PAN & Aadhaar", "Bank account linked to Aadhaar"]	[{"type": "number", "label": "Pancard Number", "required": true}, {"type": "number", "label": "Aadharcard Number", "required": true}]	https://zerodha.com/open-account	PUBLISHED	t	f	New	1	Zerodha Demat & Trading Account – Zero Brokerage, Open Online in Minutes	Open a Zerodha Demat & Trading Account with zero brokerage on equity delivery trades. Enjoy low-cost trading, advanced platforms like Kite, Console & Coin, and start investing in stocks, IPOs, and mutual funds with ease.	15	2026-04-20 10:23:08.231	2026-04-25 12:47:01.467	cmo14nxv60000rcw2ryvby02e	cmo15lpy4000orcw2f5mgg96c
\.


--
-- Data for Name: cms_sub_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cms_sub_categories (id, name, slug, "imageUrl", "isActive", "createdAt", "updatedAt", "categoryId") FROM stdin;
cmo12guqz0002gkw2609coxu9	Personal Loan	personal-loan	/uploads/sub-categories/1776318997833-938435469.jfif	t	2026-04-16 05:56:37.931	2026-04-16 05:56:37.931	cmo12drmn0000gkw2kartjfyj
cmo14zaq00005rcw259uv44u8	Home Loan	home-loan	/uploads/sub-categories/1776323217584-655263263.jfif	t	2026-04-16 07:06:57.672	2026-04-16 07:06:57.672	cmo12drmn0000gkw2kartjfyj
cmo14zr4a0006rcw2gnwd5nqx	Car Loan	car-loan	/uploads/sub-categories/1776323238837-932957511.png	t	2026-04-16 07:07:18.922	2026-04-16 07:07:18.922	cmo12drmn0000gkw2kartjfyj
cmo1506vk0007rcw2sufzcfrb	Bike Loan	bike-loan	/uploads/sub-categories/1776323259254-797631094.jfif	t	2026-04-16 07:07:39.344	2026-04-16 07:07:39.344	cmo12drmn0000gkw2kartjfyj
cmo150n5h0008rcw2i8tjrnjy	Education Loan	education-loan	/uploads/sub-categories/1776323280353-713582890.jfif	t	2026-04-16 07:08:00.437	2026-04-16 07:08:00.437	cmo12drmn0000gkw2kartjfyj
cmo1514ht0009rcw2erifby7z	Business Loan	business-loan	/uploads/sub-categories/1776323302835-271186471.png	t	2026-04-16 07:08:22.913	2026-04-16 07:08:22.913	cmo12drmn0000gkw2kartjfyj
cmo151spb000arcw2cwpetnas	Gold Loan	gold-loan	/uploads/sub-categories/1776323334206-68932392.png	t	2026-04-16 07:08:54.287	2026-04-16 07:08:54.287	cmo12drmn0000gkw2kartjfyj
cmo152gxv000brcw2co0rl6a9	Balance Transfer Loans	balance-transfer-loans	/uploads/sub-categories/1776323365612-796291263.jfif	t	2026-04-16 07:09:25.699	2026-04-16 07:09:25.699	cmo12drmn0000gkw2kartjfyj
cmo159orw000crcw2ukp6wl09	Rewards Credit Cards	rewards-credit-cards	/uploads/sub-categories/1776323702348-287467573.jfif	t	2026-04-16 07:15:02.444	2026-04-16 07:15:02.444	cmo12f5ji0001gkw2bffrwf9m
cmo15aivd000drcw2yefar4tt	Secured Credit Cards	secured-credit-cards	/uploads/sub-categories/1776323741366-712099258.jfif	t	2026-04-16 07:15:41.449	2026-04-16 07:15:41.449	cmo12f5ji0001gkw2bffrwf9m
cmo15b0zw000ercw21po1mp9z	Student Credit Cards	student-credit-cards	/uploads/sub-categories/1776323764845-415550872.png	t	2026-04-16 07:16:04.94	2026-04-16 07:16:04.94	cmo12f5ji0001gkw2bffrwf9m
cmo15cb2m000grcw2hbljwfb5	Shopping Credit Cards	shopping-credit-cards	/uploads/sub-categories/1776323824576-236061372.jfif	t	2026-04-16 07:17:04.654	2026-04-16 07:17:04.654	cmo12f5ji0001gkw2bffrwf9m
cmo15ctzv000hrcw2pt0ngjww	Fuel Credit Cards	fuel-credit-cards	/uploads/sub-categories/1776323849095-941084078.jfif	t	2026-04-16 07:17:29.179	2026-04-16 07:17:29.179	cmo12f5ji0001gkw2bffrwf9m
cmo15dfyo000ircw2gvcxf58u	Travel Credit Cards	travel-credit-cards	/uploads/sub-categories/1776323877561-561380065.jfif	t	2026-04-16 07:17:57.648	2026-04-16 07:17:57.648	cmo12f5ji0001gkw2bffrwf9m
cmo15dzcr000jrcw20tajkzoz	Cashback Credit Cards	cashback-credit-cards	/uploads/sub-categories/1776323902702-433861309.jfif	t	2026-04-16 07:18:22.779	2026-04-16 07:18:22.779	cmo12f5ji0001gkw2bffrwf9m
cmo15jwvb000krcw2vetuv9dq	Digital Bank Accounts	digital-bank-accounts	/uploads/sub-categories/1776324179292-896959002.png	t	2026-04-16 07:22:59.495	2026-04-16 07:22:59.495	cmo14nxv60000rcw2ryvby02e
cmo15kc9q000lrcw25vvkvu92	Joint Account	joint-account	/uploads/sub-categories/1776324199379-601697398.png	t	2026-04-16 07:23:19.454	2026-04-16 07:23:19.454	cmo14nxv60000rcw2ryvby02e
cmo15kt58000mrcw2690nglve	NRI Account	nri-account	/uploads/sub-categories/1776324221245-673325110.jfif	t	2026-04-16 07:23:41.325	2026-04-16 07:23:41.325	cmo14nxv60000rcw2ryvby02e
cmo15la3v000nrcw2nobg9yuz	Salary Account	salary-account	/uploads/sub-categories/1776324243120-884133663.png	t	2026-04-16 07:24:03.307	2026-04-16 07:24:03.307	cmo14nxv60000rcw2ryvby02e
cmo15lpy4000orcw2f5mgg96c	Zero Balance Account	zero-balance-account	/uploads/sub-categories/1776324263745-776856680.jfif	t	2026-04-16 07:24:23.836	2026-04-16 07:24:23.836	cmo14nxv60000rcw2ryvby02e
cmo15m7l7000prcw2rups5yys	Current Account	current-account	/uploads/sub-categories/1776324286621-256926697.png	t	2026-04-16 07:24:46.699	2026-04-16 07:24:46.699	cmo14nxv60000rcw2ryvby02e
cmo15mowt000qrcw27knjc6sy	Savings Account	savings-account	/uploads/sub-categories/1776324309068-750284573.jfif	t	2026-04-16 07:25:09.149	2026-04-16 07:25:09.149	cmo14nxv60000rcw2ryvby02e
cmo15brj9000frcw2zjukk69f	Premium Credit Cards	premium-credit-cards	/uploads/sub-categories/1776327967121-316259446.jfif	t	2026-04-16 07:16:39.333	2026-04-16 08:26:07.134	cmo12f5ji0001gkw2bffrwf9m
cmo180m7h000srcw2oyfwgd1f	Life Insurance	life-insurance	/uploads/sub-categories/1776328317980-494020531.jfif	t	2026-04-16 08:31:58.061	2026-04-16 08:31:58.061	cmo14o61u0001rcw22x10wlh5
cmo1818sd000trcw2ilkczzsk	Health Insurance	health-insurance	/uploads/sub-categories/1776328347251-64910988.png	t	2026-04-16 08:32:27.325	2026-04-16 08:32:27.325	cmo14o61u0001rcw22x10wlh5
cmo181qi4000urcw28mq2dhc7	Car Insurance	car-insurance	/uploads/sub-categories/1776328370204-262324360.png	t	2026-04-16 08:32:50.284	2026-04-16 08:32:50.284	cmo14o61u0001rcw22x10wlh5
cmo185g0g000vrcw2yrku8py8	Bike Insurance	bike-insurance	/uploads/sub-categories/1776328543231-372843932.jfif	t	2026-04-16 08:35:43.312	2026-04-16 08:35:43.312	cmo14o61u0001rcw22x10wlh5
cmo185uy5000wrcw2qzwjapxg	Travel Insurance	travel-insurance	/uploads/sub-categories/1776328562579-524875559.jfif	t	2026-04-16 08:36:02.669	2026-04-16 08:36:02.669	cmo14o61u0001rcw22x10wlh5
cmo186bue000xrcw217cu64by	Term Insurance	term-insurance	/uploads/sub-categories/1776328584488-936969293.jfif	t	2026-04-16 08:36:24.566	2026-04-16 08:36:24.566	cmo14o61u0001rcw22x10wlh5
cmo186srm000yrcw2u1tjnund	Family Health Insurance	family-health-insurance	/uploads/sub-categories/1776328606408-359874546.jfif	t	2026-04-16 08:36:46.499	2026-04-16 08:36:46.499	cmo14o61u0001rcw22x10wlh5
cmo1878f1000zrcw2qh1zjzze	Critical Illness Insurance	critical-illness-insurance	/uploads/sub-categories/1776328626690-164265792.png	t	2026-04-16 08:37:06.781	2026-04-16 08:37:06.781	cmo14o61u0001rcw22x10wlh5
cmo18bslu0010rcw2amnwwdly	Mutual Funds	mutual-funds	/uploads/sub-categories/1776328839487-385126152.jfif	t	2026-04-16 08:40:39.57	2026-04-16 08:40:39.57	cmo14oe5s0002rcw2icjox41u
cmo18c9ya0011rcw2duku79ux	SIP Plans	sip-plans	/uploads/sub-categories/1776328861961-776866963.png	t	2026-04-16 08:41:02.05	2026-04-16 08:41:02.05	cmo14oe5s0002rcw2icjox41u
cmo18cwr40012rcw2p2gnkkty	Fixed Deposits	fixed-deposits	/uploads/sub-categories/1776328891525-593927477.png	t	2026-04-16 08:41:31.6	2026-04-16 08:41:31.6	cmo14oe5s0002rcw2icjox41u
cmo18ddsy0013rcw2i901cy0g	Recurring Deposits	recurring-deposits	/uploads/sub-categories/1776328913584-514183598.jfif	t	2026-04-16 08:41:53.698	2026-04-16 08:41:53.698	cmo14oe5s0002rcw2icjox41u
cmo18dugj0014rcw2tq115pbf	Stocks & Equity	stocks--equity	/uploads/sub-categories/1776328935189-83064292.jfif	t	2026-04-16 08:42:15.283	2026-04-16 08:42:15.283	cmo14oe5s0002rcw2icjox41u
cmo18ecet0015rcw2vmpdwqjf	PPF	ppf	/uploads/sub-categories/1776328958457-166860678.jfif	t	2026-04-16 08:42:38.549	2026-04-16 08:42:38.549	cmo14oe5s0002rcw2icjox41u
cmo18ep1e0016rcw29gy28a8a	NPS	nps	/uploads/sub-categories/1776328974829-97112187.jfif	t	2026-04-16 08:42:54.914	2026-04-16 08:42:54.914	cmo14oe5s0002rcw2icjox41u
cmo18ezv20017rcw2o9am12cg	Bonds	bonds	/uploads/sub-categories/1776328988752-999767724.png	t	2026-04-16 08:43:08.942	2026-04-16 08:43:08.942	cmo14oe5s0002rcw2icjox41u
\.


--
-- Data for Name: cms_testimonials; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cms_testimonials (id, name, role, avatar, content, rating, featured, active, "createdAt", "updatedAt") FROM stdin;
cmo43u4310000y0w29n1gtyb1	Rahul Sharma	CEO	/uploads/testimonials/1776502694687-386965083.jfif	This platform helped me compare loans instantly. The UI is clean and the recommendations are actually useful. Saved both time and money.	5	t	t	2026-04-18 08:58:14.701	2026-04-18 08:58:14.701
cmo43uz0u0001y0w20qth08p0	Amit Singh	Software Engineer	/uploads/testimonials/1776502734795-684463411.jfif	Loan comparison was super fast. No unnecessary clutter, just straight useful data. Exactly what I needed.	5	t	t	2026-04-18 08:58:54.798	2026-04-18 08:58:54.798
cmo43xaeh0003y0w23ym793qd	Priya Verma	Marketing Head	/uploads/testimonials/1776502842854-230677731.jfif	I found the best credit card within minutes. The comparison engine is very smart and easy to use.	4	f	t	2026-04-18 09:00:42.857	2026-04-18 09:00:42.857
cmo43vn8w0002y0w2kintrhxx	Neha Gupta	Financial Advisor	/uploads/testimonials/1776502855220-718986737.jfif	I recommend this platform to my clients. The insights and comparison features are very accurate.	5	f	t	2026-04-18 08:59:26.192	2026-04-18 09:00:55.225
cmo43yj4d0004y0w2y51gjnd0	Rohit Meena	Business Owner	/uploads/testimonials/1776502900810-273172467.jfif	Got a business loan at a lower interest rate than expected. The process was smooth and transparent.	3	f	t	2026-04-18 09:01:40.813	2026-04-18 09:01:40.813
\.


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: cms_admins cms_admins_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_admins
    ADD CONSTRAINT cms_admins_pkey PRIMARY KEY (id);


--
-- Name: cms_ads cms_ads_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_ads
    ADD CONSTRAINT cms_ads_pkey PRIMARY KEY (id);


--
-- Name: cms_blogs cms_blogs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_blogs
    ADD CONSTRAINT cms_blogs_pkey PRIMARY KEY (id);


--
-- Name: cms_categories cms_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_categories
    ADD CONSTRAINT cms_categories_pkey PRIMARY KEY (id);


--
-- Name: cms_leads cms_leads_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_leads
    ADD CONSTRAINT cms_leads_pkey PRIMARY KEY (id);


--
-- Name: cms_partners cms_partners_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_partners
    ADD CONSTRAINT cms_partners_pkey PRIMARY KEY (id);


--
-- Name: cms_products cms_products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_products
    ADD CONSTRAINT cms_products_pkey PRIMARY KEY (id);


--
-- Name: cms_sub_categories cms_sub_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_sub_categories
    ADD CONSTRAINT cms_sub_categories_pkey PRIMARY KEY (id);


--
-- Name: cms_testimonials cms_testimonials_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_testimonials
    ADD CONSTRAINT cms_testimonials_pkey PRIMARY KEY (id);


--
-- Name: cms_admins_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX cms_admins_email_key ON public.cms_admins USING btree (email);


--
-- Name: cms_ads_active_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cms_ads_active_idx ON public.cms_ads USING btree (active);


--
-- Name: cms_ads_categoryId_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "cms_ads_categoryId_idx" ON public.cms_ads USING btree ("categoryId");


--
-- Name: cms_ads_startDate_endDate_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "cms_ads_startDate_endDate_idx" ON public.cms_ads USING btree ("startDate", "endDate");


--
-- Name: cms_blogs_categoryId_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "cms_blogs_categoryId_idx" ON public.cms_blogs USING btree ("categoryId");


--
-- Name: cms_blogs_publishedAt_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "cms_blogs_publishedAt_idx" ON public.cms_blogs USING btree ("publishedAt");


--
-- Name: cms_blogs_slug_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX cms_blogs_slug_key ON public.cms_blogs USING btree (slug);


--
-- Name: cms_blogs_status_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cms_blogs_status_idx ON public.cms_blogs USING btree (status);


--
-- Name: cms_categories_slug_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX cms_categories_slug_key ON public.cms_categories USING btree (slug);


--
-- Name: cms_leads_categoryId_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "cms_leads_categoryId_idx" ON public.cms_leads USING btree ("categoryId");


--
-- Name: cms_leads_productId_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "cms_leads_productId_idx" ON public.cms_leads USING btree ("productId");


--
-- Name: cms_leads_status_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cms_leads_status_idx ON public.cms_leads USING btree (status);


--
-- Name: cms_products_categoryId_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "cms_products_categoryId_idx" ON public.cms_products USING btree ("categoryId");


--
-- Name: cms_products_featured_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cms_products_featured_idx ON public.cms_products USING btree (featured);


--
-- Name: cms_products_slug_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX cms_products_slug_key ON public.cms_products USING btree (slug);


--
-- Name: cms_products_status_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cms_products_status_idx ON public.cms_products USING btree (status);


--
-- Name: cms_sub_categories_categoryId_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "cms_sub_categories_categoryId_idx" ON public.cms_sub_categories USING btree ("categoryId");


--
-- Name: cms_sub_categories_slug_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX cms_sub_categories_slug_key ON public.cms_sub_categories USING btree (slug);


--
-- Name: cms_ads cms_ads_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_ads
    ADD CONSTRAINT "cms_ads_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.cms_categories(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: cms_blogs cms_blogs_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_blogs
    ADD CONSTRAINT "cms_blogs_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.cms_categories(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: cms_blogs cms_blogs_subCategoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_blogs
    ADD CONSTRAINT "cms_blogs_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES public.cms_sub_categories(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: cms_leads cms_leads_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_leads
    ADD CONSTRAINT "cms_leads_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.cms_categories(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: cms_leads cms_leads_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_leads
    ADD CONSTRAINT "cms_leads_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.cms_products(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: cms_products cms_products_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_products
    ADD CONSTRAINT "cms_products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.cms_categories(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: cms_products cms_products_subCategoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_products
    ADD CONSTRAINT "cms_products_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES public.cms_sub_categories(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: cms_sub_categories cms_sub_categories_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cms_sub_categories
    ADD CONSTRAINT "cms_sub_categories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.cms_categories(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

\unrestrict OFbNYXgroQEIxbcB9H97m9oaUi3aQxrIZcnDxomLgjPQjfXiNMi4KKI2MfaGnih

