package lk.ijse.tutionclass.myPack.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
@CrossOrigin
public class HomeController {

    @GetMapping("")
    public String hello() {
        System.out.println("Awaaa ykoooooooooooooooo");
        return "Hello, Rishika!";
    }
}
