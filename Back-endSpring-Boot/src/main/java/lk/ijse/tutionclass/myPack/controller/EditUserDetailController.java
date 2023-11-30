package lk.ijse.tutionclass.myPack.controller;

import lk.ijse.tutionclass.myPack.dto.StudentDTO;
import lk.ijse.tutionclass.myPack.service.EditDetailService;
import lk.ijse.tutionclass.myPack.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/editStudent")
@CrossOrigin
public class EditUserDetailController {
    @Autowired
    EditDetailService editDetailService;

    @GetMapping
    public ResponseUtil getStudent(@RequestParam String id){
        System.out.println(id);
        StudentDTO student = editDetailService.getStudent(id);
        System.out.println(student);
        return new ResponseUtil("Ok","Sucefull",student);
    }
}
