package lk.ijse.tutionclass.myPack.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailSenderService {
    @Autowired
    private JavaMailSender javaMailSender;
    public void sendEmail(String toEmail, String subject, String body){
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
//        Yawana eka sender
        simpleMailMessage.setFrom("rishikayasodya@gmail.com");
//        Reciver
        simpleMailMessage.setTo(toEmail);
        simpleMailMessage.setText(body);
        simpleMailMessage.setSubject(subject);

        javaMailSender.send(simpleMailMessage);

        System.out.println("Mail ela giya ykooooooooo");
    }
}
