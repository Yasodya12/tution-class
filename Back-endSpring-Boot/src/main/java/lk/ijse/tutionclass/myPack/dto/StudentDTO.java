package lk.ijse.tutionclass.myPack.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class StudentDTO {
   UserDTO user;
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
}
