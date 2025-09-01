

export default function get_influencer_email_template(brand_name, approve_url_path, reject_url_path) {
    const defaultEmail = {
        subject: `New Job from Agentico with ${brand_name}`, 
        text: `You Have Been Selected To Work With a Brand (${brand_name})`, 
        html: ```
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <h2 style="color:#4F46E5;">🎉 You’ve Been Selected for a Package!</h2>
              <p>Hello,</p>
              <p><strong>BrandX</strong> has chosen your brand to collaborate on their <strong>Premium Marketing Package</strong>. This package involves:</p>
              <ol>
                <li>Create 2 Instagram posts with the provided branding.</li>
                <li>Publish 1 YouTube video review.</li>
                <li>Engage with followers by replying to comments for 7 days.</li>
                <li>Share 3 Twitter (X) posts highlighting the campaign.</li>
              </ol>
              <p>Please confirm if you’re willing to participate in this campaign. Use the buttons below:</p>
              
              <div style="margin: 20px 0;">
                <a href="${self.env.NEXT_PUBLIC_URL}/${approve_url_path}" 
                   style="background:#16A34A;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;margin-right:10px;">
                   ✅ Approve
                </a>
                <a href="${self.env.NEXT_PUBLIC_URL}/${reject_url_path}" 
                   style="background:#DC2626;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;">
                   ❌ Reject
                </a>
              </div>
              <p>If you do not respond within 2 days, this invitation may expire.</p>
              <p>Thank you,<br>The Agentico Team</p>
            </div>
        ```
    }
    return defaultEmail;
}