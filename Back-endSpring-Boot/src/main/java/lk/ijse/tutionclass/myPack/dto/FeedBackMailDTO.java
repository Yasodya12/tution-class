package lk.ijse.tutionclass.myPack.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class FeedBackMailDTO {
    private String email;
    private String subject;
    private String message;
}
