import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

export { resend };

export const sendNewPostEmail = async (subscriberEmail: string, postTitle: string, postUrl: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Ayesha Mughal <onboarding@resend.dev>', // Update this with your verified domain
      to: subscriberEmail,
      subject: `New Blog Post: ${postTitle}`,
      html: `
        <h1>New Blog Post Alert!</h1>
        <p>Hey there!</p>
        <p>I just published a new blog post: <strong>${postTitle}</strong></p>
        <p>You can read it here: <a href="${postUrl}">${postUrl}</a></p>
        <p>Best regards,<br>Ayesha Mughal</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error in sendNewPostEmail:', error);
    return { success: false, error };
  }
}; 