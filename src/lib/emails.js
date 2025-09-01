

export default async function send_influencer_email_(to, brand_name, approve_url_path, reject_url_path) {
    const defaultEmail = get_influencer_email_template(brand_name, approve_url_path, reject_url_path);
    try {
        const res = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                to,
                subject: defaultEmail.subject,
                text: defaultEmail.text,
                html: defaultEmail.html,
            }),
        })
        const data = await res.json();
        if (data.success) {
            alert("✅ Email sent successfully!");
        } else {
            alert("❌ Failed to send email: " + data.error);
        }
    }catch (error) {
        console.error("Error sending email:", err);
        alert("⚠️ Something went wrong sending email.");
    }
    
}