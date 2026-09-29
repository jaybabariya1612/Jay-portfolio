import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import nodemailer from 'nodemailer';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'smtp-email-server-plugin',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/send-email' && req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });

              req.on('end', async () => {
                res.setHeader('Content-Type', 'application/json');
                try {
                  const data = JSON.parse(body || '{}');
                  const { name, email, subject, message } = data;

                  if (!name || !email || !message) {
                    res.statusCode = 400;
                    res.end(
                      JSON.stringify({
                        success: false,
                        error: 'Name, email, and message are required fields.'
                      })
                    );
                    return;
                  }

                  const smtpUser = env.SMTP_USER || 'jaybabariya630@gmail.com';
                  const rawPass = env.SMTP_PASS || 'dcps zjrg iyjx zcrd';
                  const smtpPass = rawPass.replace(/\s+/g, ''); // strip spaces from App Password
                  const smtpTo = env.SMTP_TO || 'jaybabariya630@gmail.com';
                  const smtpHost = env.SMTP_HOST || 'smtp.gmail.com';
                  const smtpPort = Number(env.SMTP_PORT) || 465;

                  const transporter = nodemailer.createTransport({
                    host: smtpHost,
                    port: smtpPort,
                    secure: smtpPort === 465, // true for 465, false for 587
                    auth: {
                      user: smtpUser,
                      pass: smtpPass
                    }
                  });

                  const mailOptions = {
                    from: `"Portfolio Contact Form" <${smtpUser}>`,
                    to: smtpTo,
                    replyTo: email,
                    subject: `📬 Portfolio Inquiry: ${subject || 'New Message'} from ${name}`,
                    html: `
                      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff; color: #1e293b;">
                        <div style="background: linear-gradient(135deg, #6C63FF, #00D4FF); padding: 20px 24px; border-radius: 10px; color: #ffffff; margin-bottom: 24px;">
                          <h2 style="margin: 0; font-size: 22px; font-weight: 700;">New Contact Form Submission</h2>
                          <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.95;">Jay Babariya Portfolio — Incoming Message</p>
                        </div>
                        
                        <div style="margin-bottom: 20px; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                          <p style="margin: 0 0 10px 0;"><strong>Sender Name:</strong> ${name}</p>
                          <p style="margin: 0 0 10px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #6C63FF; text-decoration: none; font-weight: 600;">${email}</a></p>
                          <p style="margin: 0;"><strong>Topic / Subject:</strong> ${subject || 'General Inquiry'}</p>
                        </div>

                        <div style="padding: 20px; background: #ffffff; border-left: 4px solid #6C63FF; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); margin-bottom: 24px;">
                          <p style="margin: 0 0 8px 0; font-weight: 700; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Message Body:</p>
                          <p style="margin: 0; white-space: pre-wrap; font-size: 15px; line-height: 1.7; color: #0f172a;">${message}</p>
                        </div>

                        <div style="font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 16px; display: flex; justify-content: space-between;">
                          <span>Sent via Gmail SMTP Gateway</span>
                          <span>${new Date().toLocaleString()} (IST)</span>
                        </div>
                      </div>
                    `
                  };

                  const info = await transporter.sendMail(mailOptions);
                  console.log('✅ Email successfully dispatched via SMTP:', info.messageId);

                  res.statusCode = 200;
                  res.end(
                    JSON.stringify({
                      success: true,
                      message: 'Message delivered directly to Jay Babariya’s mailbox'
                    })
                  );
                } catch (error: any) {
                  console.error('❌ SMTP dispatch error:', error);
                  res.statusCode = 500;
                  res.end(
                    JSON.stringify({
                      success: false,
                      error: error?.message || 'SMTP Gateway transmission failure'
                    })
                  );
                }
              });
              return;
            }
            next();
          });
        }
      }
    ],
    server: {
      port: 3000,
      open: false,
      host: true
    }
  };
});
