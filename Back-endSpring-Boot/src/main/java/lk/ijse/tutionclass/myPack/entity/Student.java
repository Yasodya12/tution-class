package lk.ijse.tutionclass.myPack.entity;

import lk.ijse.tutionclass.myPack.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Student {
    @Id
    String studentID;
    String firstName;
    String lastName;
    String birthday;
    String gender;
    String studentEmail;
    String studentTelNumber;
    String parentEmail;
    String parentTel;
    String pictureFaceeee;
    @OneToOne(cascade = CascadeType.ALL)
    User user;
}
