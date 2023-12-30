import { Resend } from 'resend';
import Email from '../models/Email';

class EmailService {
    sendEmail(email: Email) {
        const resend = new Resend('re_3FGQ8h6m_GetbpHjtwoHsFHSCQeQK92gy');
        resend.emails.send({
            from: email.mailSender,
            to: email.receiver,
            subject: email.subject,
            html: `<p>${email.message}</p>`
        });
    }
}

export default new EmailService();