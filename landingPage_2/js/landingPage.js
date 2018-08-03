
$(function(){
    $('#body').css('min-height', screen.height);
    $('#body').css('min-width', screen.width);
    var loginModal =new Modal("이메일로 로그인","로그인","회원가입","login");
    var registModal = new Modal("이메일로 회원가입","가입하기","로그인하기","regist");
    $(registModal.remember_label).remove();
    $(registModal.text_button_1).remove();
    $(loginModal.registQuest).remove();
    $(loginModal.input_nick).remove();
    $(loginModal.input_pass_check).remove();
    $(registModal.foot).css("text-align","center");
    $(registModal.registQuest).css({
        "margin":1+"rem",
        "marginLeft":6+"rem"
    });
    $(registModal.text_button_2).css("marginLeft","0");
    $(".modal_wrapper span div").removeClass("screen-mask modal");

    //로그인버튼클릭시 함수실행
    $(".header-button-login").on("click",function(){
        //숨어있던 로그인모달창 나타내기
        firstButtonClick(loginModal);
        });
    //로그인모달창 안의 맨아래오른쪽 회원가입버튼눌렀을 때
    $(loginModal.text_button_2).on("click",function(){
        rightButtonClick(loginModal,registModal);
    });
    //시작하기버튼클릭시 함수수행
    $(".intro-phrase-button").on("click",function(){
        firstButtonClick(registModal);
    });
    //회원가입모달창 안의 맨아래오른쪽 로그인버튼눌렀을 때
    $(registModal.text_button_2).on("click",function(){
        rightButtonClick(registModal,loginModal);
    });

    //닫기버튼클릭
    $(".modal-close").on("click",function(){
        closeModal();
    });

});

//모달창닫기
function closeModal() {
    $(".modal").css("opacity","0");
    $(".modal").removeClass("modal");
    $(".screen-mask").removeClass("screen-mask");
}
//처음버튼클릭할때, 중복제거위해
function firstButtonClick(modalName){
    $(modalName.screenMask).addClass("screen-mask");
    $(modalName.modal).addClass("modal");
    $(modalName.modal).css("opacity","1");
}
//모달창안에서 버튼클릭할때 ,중복제거위해
function rightButtonClick(modal1,modal2){
    $(modal1.modal).removeClass("modal");
    $(modal1.modal).css("opacity","0");
    $(modal2.modal).addClass("modal");
    $(modal2.modal).css("opacity","1");
}

