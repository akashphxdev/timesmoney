import { Request, Response } from 'express';
import { getActiveAds, trackAdEvent } from '../../services/public/ad.service';

export const getAds = async (req: Request, res: Response) => {
  try {
    const { page, position } = req.query;

    if (!page) {
      return res.status(400).json({ success: false, message: 'page query param is required' });
    }

    const validPages = ['HOME', 'BLOG', 'PRODUCT', 'CATEGORY', 'CALCULATOR'];
    if (!validPages.includes(page as string)) {
      return res.status(400).json({ success: false, message: 'Invalid page value' });
    }

    const validPositions = ['TOP', 'BOTTOM', 'BETWEEN_CONTENT', 'SIDEBAR'];
    if (position && !validPositions.includes(position as string)) {
      return res.status(400).json({ success: false, message: 'Invalid position value' });
    }

    const ads = await getActiveAds(page as string, position as string);
    res.json({ success: true, data: ads });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

export const trackEvent = async (req: Request, res: Response) => {
  try {
    const { adId, type, sessionId, page, referrer, clientIp } = req.body;

    if (!adId || !type) {
      return res.status(400).json({ success: false, message: 'adId and type are required' });
    }

    if (!['CLICK', 'IMPRESSION'].includes(type)) {
      return res.status(400).json({ success: false, message: 'Invalid event type' });
    }

    // Extract real IP from headers
    let ip =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      req.socket.remoteAddress ||
      null;

    // ::ffff:49.43.178.124 → 49.43.178.124
    if (ip && ip.startsWith('::ffff:')) {
      ip = ip.replace('::ffff:', '');
    }

    // Localhost pe frontend se aayi real IP use karo
    if ((ip === '::1' || ip === '127.0.0.1') && clientIp) {
      ip = clientIp;
    }

    const userAgent = req.headers['user-agent'] || null;
    const deviceType = detectDevice(userAgent);

    // Geo lookup
    let country: string | null = null;
    if (ip) {
      try {
        const geo = await fetch(
          `${process.env.GEO_API_URL}/${ip}?fields=status,country,regionName,city`
        );
        const geoData = await geo.json() as {
          status?: string;
          country?: string;
          regionName?: string;
          city?: string;
        };
        if (geoData.status === 'success' && geoData.country) {
          country = `${geoData.city}, ${geoData.regionName}, ${geoData.country}`;
        }
      } catch {}
    }

    await trackAdEvent({
      adId,
      type,
      ip: ip || undefined,
      sessionId: sessionId || undefined,
      userAgent: userAgent || undefined,
      deviceType,
      page: page || undefined,
      referrer: referrer || undefined,
      country: country || undefined,
    });

    res.json({ success: true });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

function detectDevice(userAgent: string | null): string {
  if (!userAgent) return 'unknown';
  const ua = userAgent.toLowerCase();
  if (/mobile|android|iphone|ipod|blackberry|opera mini|iemobile/.test(ua)) return 'mobile';
  if (/tablet|ipad/.test(ua)) return 'tablet';
  return 'desktop';
}