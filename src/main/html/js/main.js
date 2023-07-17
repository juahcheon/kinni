$(function(){

    // 마이페이지 화면전환
    $(".lnb ul li").on("click", function(){
        $(this).find("button").find("span").addClass("viewNow");
        $(".lnb ul li").not($(this)).find("button").find("span").removeClass("viewNow");
    });

    $(".viewKinni").on("click", function(){
        $(".viewKinniSection").css({
            "display" : "block"
        });
        $("section").not($(".viewKinniSection")).css({
            "display": "none"
        });
    });

    $(".viewComment").on("click", function(){
        $(".viewCommentSection").css({
            "display" : "block"
        });
        $("section").not($(".viewCommentSection")).css({
            "display": "none"
        });
    });

    $(".viewKinniwinni").on("click", function(){
        $(".viewKinniwinniSection").css({
            "display" : "block"
        });
        $("section").not($(".viewKinniwinniSection")).css({
            "display": "none"
        });
    });


    
    // 마이페이지 설정 모달창
    $(".settingPageBtn").on("click", function(){
        $(".settingModal").parent(".bg").css({
            opacity: 1,
            "z-index": 100
        });
    });

    $(".settingNo").on("click", function(){
        $(".settingModal").parent(".bg").css({
            opacity: 0,
            "z-index": -1
        });
    });

    $(".settingModal input[type='radio']").on("click", function(){
        $(this).parent($(".radioBar")).css({
            "background-color": "#8fb9f470",
            "border": "none"
        });
        $(this).after().css({
            "right" : "0"
        });
    });





    // // 키멘트 연결선
    // if( $(".viewCommentSection").find(".contentsBox").length > 2 ) {
    //     $(".viewCommentSection").find(".contentsBox").after("<div class='connect'></div>");
    // }

    
    // $(".viewComment").on("click",function(){
    //     $(".contentsText").css({"margin-top" : 0});
    //     $(".userName").append('<p class="reComment"><strong>@kinni</strong> 님에게 보내는 답글</p>');
    // });

    // $(".lnb ul li button").not($(".viewComment")).on("click",function(){
    //     $(".contentsText").css({"margin-top" : "3px"});
    //     $(".reComment").hide();
    // });


    // 검색창 구현
    $(".searchBtn").on("click", function(){
        $(".search").parent(".bg").css({
            opacity: 1,
            "z-index": 100
        });
    });
    $(".searchExit").on("click", function(){
        $(".search").parent(".bg").css({
            opacity: 0,
            "z-index": -1
        });
    });




    // 회원가입 모달창
    $(".join").on("click", function(){
        $(".joinModal").parent(".bg").css({
            opacity: 1,
            "z-index": 100
        });
    });
    $(".joinModalBtn").on("click", function(){
        $(".joinModal").parent(".bg").css({
            opacity: 0,
            "z-index": -1
        });
    });






    // 알림창
    $(".noticeExit").on("click", function(){
        $(this).parent("li").css({
            "display" : "none"
        });
    });
    $(".removeAll").on("click", function(){
        $(".noticeSection ul").css({
            "display" : "none"
        });
        $(this).css({
            "display" : "none"
        });
    });



    // 팔로잉 & 팔로워
    $(".followingBtn").hover(function(){
        $(this).text("Unfollow");
    }, function(){
        $(this).text("Following");
    });

    $(".viewFollowing").on("click", function(){
        $(".followingSection").css({
            "display" : "block"
        });
        $(".followerSection").css({
            "display": "none"
        });
    });

    $(".viewFollower").on("click", function(){
        $(".followerSection").css({
            "display" : "block"
        });
        $(".followingSection").css({
            "display": "none"
        });
    });
});