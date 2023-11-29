package lk.ijse.tutionclass.myPack.repo;

import lk.ijse.tutionclass.myPack.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student, String> {
}
