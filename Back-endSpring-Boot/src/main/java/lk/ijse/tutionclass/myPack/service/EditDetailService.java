package lk.ijse.tutionclass.myPack.service;

import lk.ijse.tutionclass.myPack.dto.StudentDTO;
import lk.ijse.tutionclass.myPack.entity.Student;
import lk.ijse.tutionclass.myPack.repo.StudentRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EditDetailService {

    @Autowired
    StudentRepo studentRepo;

    @Autowired
    ModelMapper mapper;


    public StudentDTO getStudent(String id){
        Student student = studentRepo.findById(id).get();

        return mapper.map(student, StudentDTO.class);


    }

    public void updateStudent(StudentDTO studentDTO){
        Student map = mapper.map(studentDTO, Student.class);
       studentRepo.save(map);

    }
}
