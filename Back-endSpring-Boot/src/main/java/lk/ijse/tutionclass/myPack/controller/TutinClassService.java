package lk.ijse.tutionclass.myPack.controller;

import lk.ijse.tutionclass.myPack.service.ClassesService;
import lk.ijse.tutionclass.myPack.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/classes")
public class TutinClassService {
    @Autowired
    ClassesService classesService;

    @GetMapping
    public ResponseUtil getClasses(){
        System.out.println("awaaa");
        return new ResponseUtil("Ok","Sucefully Loaded",classesService.getClasses());

    }
}
