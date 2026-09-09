import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const { name, phone } = await req.json();

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Name and phone are required" },
      { status: 400 }
    );
  }

  const businessEmail = process.env.BUSINESS_EMAIL || "admin@asheejajayan.com";

  // If Resend API key is available, send real email
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Mobwik AI <onboarding@resend.dev>",
        to: businessEmail,
        subject: `Callback Request — ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 24px;">
            <h2 style="margin: 0 0 16px 0;">New Callback Request</h2>
            <table style="border-collapse: collapse; width: 100%; max-width: 400px;">
              <tr>
                <td style="padding: 8px 16px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td>
                <td style="padding: 8px 16px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 16px; font-weight: bold; border-bottom: 1px solid #eee;">Phone</td>
                <td style="padding: 8px 16px; border-bottom: 1px solid #eee;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 16px; font-weight: bold;">Source</td>
                <td style="padding: 8px 16px;">Mobwik AI Chat</td>
              </tr>
            </table>
            <p style="margin-top: 24px; color: #666; font-size: 12px;">
              Submitted at ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })}
            </p>
          </div>
        `,
      });

      return NextResponse.json({ success: true, method: "email" });
    } catch (error) {
      console.error("Email send failed:", error);
    }
  }

  // Fallback: log to server console for now
  console.log("═══════════════════════════════════════");
  console.log("  NEW CALLBACK REQUEST");
  console.log(`  Name:  ${name}`);
  console.log(`  Phone: ${phone}`);
  console.log(`  Time:  ${new Date().toISOString()}`);
  console.log("═══════════════════════════════════════");

  return NextResponse.json({ success: true, method: "log" });
}
