package lk.ijse.tutionclass.myPack.controller;

import lk.ijse.tutionclass.myPack.dto.FeedBackMailDTO;
import lk.ijse.tutionclass.myPack.dto.StudentDTO;
import lk.ijse.tutionclass.myPack.service.HomeService;
import lk.ijse.tutionclass.myPack.service.MailSenderService;
import lk.ijse.tutionclass.myPack.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/home")
@CrossOrigin
public class HomeController {

    @Autowired
    HomeService homeService;

    @Autowired
    MailSenderService mailSenderService;
    @PostMapping
//    , @RequestBody StudentDTO studentDTO
//    @RequestParam("img")MultipartFile img,

    public ResponseUtil saveDetails(@RequestBody StudentDTO user) throws IOException {


        System.out.println("use "+user);
        homeService.addStudent(user);
//        System.out.println(img);
//        homeService.register(img);
//        System.out.println(studentDTO);
        return new ResponseUtil("ok","Student Sucefully Added", user);
    }
    @PostMapping(path = {"/imgSaave"})
    public void saveImg( @RequestParam("img")MultipartFile img) throws IOException {
        System.out.println("save Img");
        homeService.register(img);
    }

    @PutMapping
    public void sendMail(@ModelAttribute FeedBackMailDTO feedBackMailDTO){
        mailSenderService.sendEmail(feedBackMailDTO.getEmail(),feedBackMailDTO.getSubject(),feedBackMailDTO.getMessage());
    }
}
