package lk.ijse.tutionclass.myPack.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class TutionClass {
    @Id
    String classID;
    String category;
    String subject;
    String pic;
    String name;
    String qualification;
    String description;
    String studentCount;
    String fee;
    String time;


}
