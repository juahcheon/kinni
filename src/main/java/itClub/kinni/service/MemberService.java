package itClub.kinni.service;


import itClub.kinni.dto.MemberDTO;
import itClub.kinni.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MemberService {

    private MemberRepository memberRepository;
    private PasswordEncoder passwordEncoder;

    public Long saveMember(MemberDTO memberDTO) {
        // 패스워드 암호화
        memberDTO.setPassword(passwordEncoder.encode(memberDTO.getPassword()));
        memberRepository.save(memberDTO.toEntity());
        return memberDTO.getId();

    }
}
