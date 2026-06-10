import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const required = (v) => typeof v === "string" && v.trim().length > 0;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, phone, email, service, message = "" } = body || {};
    if (!required(name) || !required(phone) || !required(email) || !required(service)) {
      return new Response(JSON.stringify({ success: false, error: "Missing fields" }), { status: 400 });
    }
    if (service === "__other__" && !required(message)) {
      return new Response(JSON.stringify({ success: false, error: "Please specify service" }), { status: 400 });
    }
    const host = undefined                         ;
    const port = Number(undefined                          || 587);
    const user = undefined                         ;
    const pass = undefined                         ;
    const to = undefined                       ;
    const from = undefined                          || user;
    if (!host || !user || !pass || !to) {
      return new Response(JSON.stringify({ success: false, error: "Email not configured" }), { status: 500 });
    }
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });
    const displayService = service === "__other__" ? "Other" : service;
    const subject = `New Contact Request: ${displayService}`;
    const text = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${displayService}`,
      `Message: ${message}`
    ].join("\n");
    await transporter.sendMail({
      from,
      to,
      subject,
      text
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: "Server error" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
