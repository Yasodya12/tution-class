package lk.ijse.tutionclass.myPack.service;

import lk.ijse.tutionclass.myPack.dto.StudentDTO;
import lk.ijse.tutionclass.myPack.entity.Student;
import lk.ijse.tutionclass.myPack.repo.StudentRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Service
public class HomeService {

    @Autowired
    StudentRepo studentRepo;

    @Autowired
    ModelMapper mapper;
    public void register(MultipartFile file) throws IllegalStateException, IOException {
        file.transferTo(new File("D:\\IJSE\\Class Project Spring Boot\\startbootstrap-creative-gh-pages\\studentImages\\"+file.getOriginalFilename()));
    }

    public void addStudent(StudentDTO studentDTO){
        Student map = mapper.map(studentDTO, Student.class);
        studentRepo.save(map);
    }
}
