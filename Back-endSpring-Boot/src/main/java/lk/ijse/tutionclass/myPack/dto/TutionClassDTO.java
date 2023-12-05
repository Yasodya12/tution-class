package lk.ijse.tutionclass.myPack.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class TutionClassDTO {
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
