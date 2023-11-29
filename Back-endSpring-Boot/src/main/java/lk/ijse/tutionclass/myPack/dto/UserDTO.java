package lk.ijse.tutionclass.myPack.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class UserDTO {
    String userId;
    String role;
    String username;
    String password;
}
