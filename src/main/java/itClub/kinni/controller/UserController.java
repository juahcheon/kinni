package itClub.kinni.controller;

import itClub.kinni.dto.MemberDTO;
import itClub.kinni.service.MemberService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;

@Repository
@AllArgsConstructor
public class UserController {
    private final MemberService memberService;

//    @GetMapping("/")
//    public String Home() {
//        return "home";
//    }
//
//    @GetMapping("/join")
//    public String createUserFrom() {
//        return "join";
//    }

    @PostMapping("/join")
    public Long saveMember(MemberDTO memberDTO) {
        return memberService.saveMember(memberDTO);
    }
}
