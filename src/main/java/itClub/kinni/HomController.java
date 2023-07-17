package itClub.kinni;

import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomController {
//    @RequestMapping("/")
//    public String home() {
//        return "/home";
//    }
    @RequestMapping("/join")
    public String join() {
        return "/join";
    }
}
