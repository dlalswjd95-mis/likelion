class Modal{
    constructor(modalContentH2,modalButtonTxt,rightButtonTxt,type){
        this.type = type;
        this.modalContentH2 = modalContentH2;
        this.modalButtonTxt = modalButtonTxt;
        this.rightButtonTxt = rightButtonTxt;

        //모달뒤에 나타나는 뿌연배경
        this.screenMask = document.createElement("div");
        $(this.screenMask).attr("class","screen-mask");
        $(".modal_wrapper span").append($(this.screenMask));

        //모달생성
        this.modal = document.createElement("div");
        $(this.modal).attr("class", "modal");
        $(this.modal).css("opacity","0"); //처음생성시엔  안보이게
        $(".modal_wrapper span").append($(this.modal));

        this.modal_2 = document.createElement("div");
        $(this.modal_2).attr("class", "modal-2");
        $(this.modal).append($(this.modal_2));

        this.modal_bar = document.createElement("div");
        $(this.modal_bar).attr("class", "modal-bar");
        $(this.modal_2).append($(this.modal_bar));
        //닫기버튼
        this.modal_close = document.createElement("div");
        $(this.modal_close).attr("class", "modal-close");
        $(this.modal_close).append("✕");
        $(this.modal_2).append($(this.modal_close));

        this.modal_content = document.createElement("div");
        $(this.modal_content).attr("class", "modal-content");
        $(this.modal_2).append($(this.modal_content));

        this.h2 = document.createElement("h2");
        $(this.modal_content).append($(this.h2));
        $(this.h2).append(this.modalContentH2);
        //input부분
        this.form = document.createElement("div");
        $(this.form).attr("class", "form");
        $(this.modal_2).append($(this.form));

        //이메일input
        this.input_email = document.createElement("input");
        $(this.input_email).attr("class", "input-full-width");
        $(this.input_email).attr("value", "");
        $(this.input_email).attr("name", "email");
        $(this.input_email).attr("placeholder", "이메일");
        $(this.form).append($(this.input_email));

        //비밀번호input
        this.input_pass = document.createElement("input");
        $(this.input_pass).attr("class", "input-full-width");
        $(this.input_pass).attr("value", "");
        $(this.input_pass).attr("name", "password");
        $(this.input_pass).attr("placeholder", "비밀번호");
        $(this.form).append($(this.input_pass));
        //비밀번호확인input
        this.input_pass_check = document.createElement("input");
        $(this.input_pass_check).attr("class", "input-full-width");
        $(this.input_pass_check).attr("value", "");
        $(this.input_pass_check).attr("name", "passcheck");
        $(this.input_pass_check).attr("placeholder", "비밀번호 재확인");
        $(this.form).append($(this.input_pass_check));
        //닉네임input
        this.input_nick = document.createElement("input");
        $(this.input_nick).attr("class", "input-full-width");
        $(this.input_nick).attr("value", "");
        $(this.input_nick).attr("name", "nickname");
        $(this.input_nick).attr("placeholder", "닉네임(선택)");
        $(this.form).append($(this.input_nick));
        //하늘색submit버튼
        this.modal_button = document.createElement("div");
        $(this.modal_button).attr("class", this.type);
        $(this.modal_button).attr("class", "modal-button");
        $(this.modal_button).attr("color", "teal");
        $(this.modal_button).attr("style", "padding:0.6rem");
        $(this.modal_button).attr("onClick", "");
        $(this.modal_button).append(this.modalButtonTxt);
        $(this.modal_2).append($(this.modal_button));
        //rememberme checkbox
        this.remember_label =document.createElement("label");
        $(this.remember_label).attr("class","checkbox");
        $(this.modal_2).append($(this.remember_label));

        this.remember_box = document.createElement("input");
        $(this.remember_box).attr("type","checkbox");
        $(this.remember_box).attr("value","remember-me");
        $(this.remember_box).attr("id","remember_me");
        $(this.remember_label).append($(this.remember_box));
        $(this.remember_label).append("remember me");
        this.foot = document.createElement("div");
        $(this.foot).attr("class","foot");
        $(this.modal_2).append($(this.foot));
        //비밀번호찾기버튼
        this.text_button_1 = document.createElement("div");
        $(this.text_button_1).attr("class","text-button");
        $(this.text_button_1).append("비밀번호 찾기");
        $(this.foot).append($(this.text_button_1));
        //회원가입모달창에서만질문
        this.registQuest = document.createElement("div");
        $(this.registQuest).text("이미 가입하셨나요?");
        $(this.foot).append($(this.registQuest));
        //(로그인/회원가입)작은버튼
        this.text_button_2 = document.createElement("div");
        $(this.text_button_2).attr("class","text-button right-button");
        $(this.text_button_2).append(this.rightButtonTxt);
        $(this.foot).append($(this.text_button_2));


    }


}