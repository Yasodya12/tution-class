package lk.ijse.tutionclass.myPack.service;

import lk.ijse.tutionclass.myPack.dto.TutionClassDTO;
import lk.ijse.tutionclass.myPack.entity.TutionClass;
import lk.ijse.tutionclass.myPack.repo.ClassesRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassesService {
    @Autowired
    ClassesRepo classesRepo;

    @Autowired
    ModelMapper mapper;

    public List<TutionClassDTO> getClasses(){
        List<TutionClass> tutionClass = classesRepo.findAll();

        return mapper.map(tutionClass, new TypeToken<List<TutionClassDTO>>() {
        }.getType());
    }

}
