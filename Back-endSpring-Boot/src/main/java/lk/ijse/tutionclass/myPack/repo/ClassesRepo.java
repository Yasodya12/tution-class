package lk.ijse.tutionclass.myPack.repo;

import lk.ijse.tutionclass.myPack.entity.TutionClass;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassesRepo extends JpaRepository<TutionClass,String> {
}
