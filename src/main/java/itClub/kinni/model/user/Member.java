package itClub.kinni.model.user;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Member {
    @Id
    @GeneratedValue
    private Long seq;
    private String email;
    private String password;
    private String nickname;

    @Builder
    private Member(
            String email,
            String password,
            String nickname) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
    }
}
