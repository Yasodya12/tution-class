package lk.ijse.tutionclass.myPack;

import lk.ijse.tutionclass.myPack.service.MailSenderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class WebAppInitializer {

//
    public static void main(String[] args) {
        SpringApplication.run(WebAppInitializer.class);
    }

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }

//    @EventListener(ApplicationReadyEvent.class)
//    public void sendMail(){
//        senderService.sendEmail("rishikayasodya@gmail.com","This is subject", "Body Ykoo");
//    }
}
