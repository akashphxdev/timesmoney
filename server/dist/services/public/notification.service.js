"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendLeadEmail = exports.sendWhatsAppMessage = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
// ==================== EMAIL TRANSPORTER ====================
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});
// ==================== WHATSAPP NOTIFICATION ====================
const sendWhatsAppMessage = async ({ phone, name, subCategoryName, }) => {
    try {
        const service = subCategoryName ? subCategoryName : 'our services';
        const message = `Hello ${name}! 👋

Thank you for choosing *TimesMoney* 🎉

We have received your request for *${service}*. Our team will contact you shortly.

🌐 Visit us: https://timesmoney.in/
📞 Any query? WhatsApp us: +91-XXXXXXXXXX
📧 Email: support@timesmoney.in

We're here to help you make the best financial decisions! 💰`;
        const url = new URL(process.env.WHATSAPP_API);
        url.searchParams.set('mobileNumber', phone);
        url.searchParams.set('whatsappMessage', message);
        const res = await fetch(url.toString());
        if (!res.ok) {
            console.error('[WhatsApp] Failed to send message:', await res.text());
        }
        else {
            console.log(`[WhatsApp] Message sent to ${phone}`);
        }
    }
    catch (err) {
        console.error('[WhatsApp] Error:', err);
    }
};
exports.sendWhatsAppMessage = sendWhatsAppMessage;
// ==================== EMAIL NOTIFICATION ====================
const sendLeadEmail = async ({ email, name, subCategoryName, }) => {
    try {
        const service = subCategoryName ? subCategoryName : 'our services';
        const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>TimesMoney - Application Received</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:'Segoe UI',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#059669,#065f46);padding:36px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;letter-spacing:-0.5px;">TimesMoney</h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:13px;letter-spacing:1px;text-transform:uppercase;">Your Trusted Financial Partner</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">

              <p style="margin:0 0 8px;color:#374151;font-size:18px;font-weight:600;">Hello ${name}! 👋</p>
              <p style="margin:0 0 24px;color:#6b7280;font-size:14px;line-height:1.6;">
                Thank you for choosing <strong style="color:#059669;">TimesMoney</strong>. We have successfully received your request and our expert team is already reviewing it.
              </p>

              <!-- Info Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;margin-bottom:28px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px;color:#065f46;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Your Request Details</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;color:#6b7280;font-size:13px;width:140px;">Service Requested</td>
                        <td style="padding:6px 0;color:#111827;font-size:13px;font-weight:600;">${service}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;color:#6b7280;font-size:13px;">Status</td>
                        <td style="padding:6px 0;">
                          <span style="background:#dcfce7;color:#15803d;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;text-transform:uppercase;">Received ✓</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;color:#6b7280;font-size:13px;">Expected Response</td>
                        <td style="padding:6px 0;color:#111827;font-size:13px;font-weight:600;">Within 24 Hours</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 24px;color:#6b7280;font-size:14px;line-height:1.7;">
                Our financial experts will reach out to you shortly with the <strong>best personalised offers</strong> available for you. In the meantime, feel free to explore more options on our website.
              </p>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td align="center">
                    <a href="https://timesmoney.in/" style="display:inline-block;background:linear-gradient(135deg,#059669,#065f46);color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 36px;border-radius:8px;letter-spacing:0.3px;">
                      Explore More Offers →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Contact Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px;color:#374151;font-size:13px;font-weight:700;">Need help? Contact us anytime</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:5px 0;color:#6b7280;font-size:13px;">🌐 Website</td>
                        <td style="padding:5px 0;"><a href="https://timesmoney.in/" style="color:#059669;text-decoration:none;font-size:13px;font-weight:500;">https://timesmoney.in/</a></td>
                      </tr>
                      <tr>
                        <td style="padding:5px 0;color:#6b7280;font-size:13px;">📞 WhatsApp</td>
                        <td style="padding:5px 0;color:#111827;font-size:13px;">+91-XXXXXXXXXX</td>
                      </tr>
                      <tr>
                        <td style="padding:5px 0;color:#6b7280;font-size:13px;">📧 Email</td>
                        <td style="padding:5px 0;"><a href="mailto:support@timesmoney.in" style="color:#059669;text-decoration:none;font-size:13px;">support@timesmoney.in</a></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 4px;color:#9ca3af;font-size:12px;">© 2025 TimesMoney. All rights reserved.</p>
              <p style="margin:0;color:#9ca3af;font-size:11px;">This email was sent because you submitted a request on TimesMoney.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
        await transporter.sendMail({
            from: `"TimesMoney" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: `✅ We received your request for ${service} — TimesMoney`,
            html,
        });
        console.log(`[Email] Sent to ${email}`);
    }
    catch (err) {
        console.error('[Email] Error:', err);
    }
};
exports.sendLeadEmail = sendLeadEmail;
