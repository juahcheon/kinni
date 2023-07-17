package itClub.kinni.dto;

import itClub.kinni.model.user.Member;
import lombok.Data;

@Data
public class MemberDTO {

    private Long id;
    private String email;
    private String password;
    private String nickname;
    private Boolean termsAgreed;

    public Member toEntity() {
        return Member.builder()
                .email(email)
                .password(password)
                .nickname(nickname)
                .build();
    }

}
