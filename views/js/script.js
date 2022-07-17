/*------------------------------------*\
  #1. 데스크톱 - 네비게이션 드롭다운
\*------------------------------------*/

$(function(){
    $('#sub').hide();
    $('#main_gnb').hover(function(){
        $(this).parent().find('#sub').slideDown();
        $(this).parent().hover(function(){
            //서브가 슬라이드 다운된 상태를 유지하게 한다
        },
        //마우스가 아웃 되었을 때
        function(){
          $(this).parent().find('#sub').slideUp(300);
        });
    });
});





/*------------------------------------*\
  #2. 모바일 - 네비게이션
\*------------------------------------*/

var mobile_slide = function(){
  var toggle = $('#toggle');
  $(toggle).off('click');
  $(toggle).on('click',function(e){
      e.preventDefault();

      // 스크롤바 없애기
      $('html').css("overflow","hidden");
      
      $('#mobile_gnb').css('display','block');
      
  });

}



// 전체 메뉴를 오른쪽으로 슬라이드하여서 보여준다.
// $('header > div:nth-of-type(2)').css('display','block');
function ShowMenu(){
  var left_x = -100; //현재 메뉴의 %위치 초기값
  var left_gap = 3; //한번 움직일때마다 몇 % 움직이는지?
      // 스크롤바 없애기
      $('html').css("overflow","hidden");
      $('#mobile_gnb').css('display','block');
      var move_menu = function(){ 
      $('#mobile_gnb' ).css("left",left_x+"%"); //#mobile_gnb left 위치 지정
      left_x = left_x+left_gap; // left_gap 만큼 움직임 지정, 점점 plus
      if(left_x>0){ // 목표지점 :0 , 0보다 크면 기본 값 0으로 세팅하고 애니메이션 진행X
          $('#mobile_gnb' ).css("left","0");
      }
      else{
          setTimeout(move_menu,10); 
          //setTimeout : 0.01초 후 move_menu 함수(재귀함수) 실행
          // 멈추는 조건 : left_x>0
      }
  }
  move_menu(); //처음 호출
}

// 전체 메뉴를 왼쪽으로 슬라이드하여서 닫는다.
function HideMenu(){
  var left_x = 0;
  var left_gap = 3;
  var move_menu = function(){
      $('#mobile_gnb' ).css("left",left_x+"%");
      left_x = left_x-left_gap;
      if(left_x<-100){
          $('#mobile_gnb' ).css("left","-100%");
          $('html').css("overflow","auto");
      }
      else{
          setTimeout(move_menu,10);
      }
  }
  move_menu();
}

//서브메뉴 슬라이딩

$(function(){

  // 0717 수정
  let toggleMenu =  document.getElementsByClassName("slide_toggle");
  let dropMenu =  document.getElementsByClassName("dropdown-container");


  for(let i = 0; i <toggleMenu.length; i++){
    $(toggleMenu[i]).on('click',function(e){ 
        //toggle을 클릭했을 때 이벤트 발생
        e.preventDefault(); 
        // 이벤트 버블링을 막기 위한 코드
        //이벤트 버블링 : 버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상
      for(let j= 0; j <toggleMenu.length; j++){
        if($(dropMenu[j]).css('display') == 'block')
        $(dropMenu[j]).slideToggle();
      }
        $(dropMenu[i]).slideToggle();

    })
  }
});


/*------------------------------------*\
  #3. 캐러셀 - 메인
\*------------------------------------*/

// 딜레이 시간 설정 
const delay = 5000; 

const slides = document.querySelector(".carousel_slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};





/*------------------------------------*\
  #4. 캐러셀 - owl 캐러셀 설정
\*------------------------------------*/

var owl = $('.owl-carousel').owlCarousel({
  nav: true,
  loop: true,
  margin: 10,
  items: 1,
  autoplay: true,
})

$( '.owl-filter-bar' ).on( 'click', '.item', function() {
var $item = $(this);
var filter = $item.data( 'owl-filter' )
owl.owlcarousel2_filter( filter );
} )


/*------------------------------------*\
#4-2. 클릭 시 색 변경
\*------------------------------------*/


const menuWrap = document.querySelector('#process ul');
 
function select(ulEl, liEl){
    Array.from(ulEl.children).forEach(
        v => v.classList.remove('selected')
    )
    if(liEl) liEl.classList.add('selected');
}

menuWrap.addEventListener('click', e => {
    const selected = e.target;
    select(menuWrap, selected);
})





/*------------------------------------*\
  #4. 캐러셀 - owl에 필터기능 동작을 위한 강제 설정
\*------------------------------------*/

  // 문서가 로드된 후에 실행
  $(document).ready(function(){
  $('.default-filter').click();
  });




