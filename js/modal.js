document.getElementById('blog').addEventListener('click',function (){
    window.location.href ='https://blog.naver.com/yuichan99';
});
document.getElementById('insta').addEventListener('click',function (){
    window.location.href ='https://www.instagram.com/eulchann';
});
document.getElementById('facebook').addEventListener('click',function (){
    window.location.href ='https://ko-kr.facebook.com';
});
document.getElementById('youtube').addEventListener('click',function (){
    window.location.href ='https://www.youtube.com';
});

var emailInput = document.getElementById('emailInput');
var btn =document.getElementById('subscribe_btn');
var modal = document.getElementsByClassName('modal_wrapper')[0];

// 이메일 미입력시 알림 처리 및 구독버튼 클릭 시 모달 창 띄우기
btn.addEventListener('click',function(){
    if(emailInput.value.trim()===''){
        alert('이메일 주소를 입력해주세요.');
    }
    else{
        modal.style.display='block';
    }
})


/*모달창에서 버튼 클릭했을 때 종료 처리*/
document.getElementById('love_but').addEventListener('click',function(){
    modal.style.display='none';
});