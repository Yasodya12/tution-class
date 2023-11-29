package lk.ijse.tutionclass.myPack.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class User {
    @Id
    private String userId;
    @Column(unique = true)
    private String username;
    private String password;
    private String role;
}
