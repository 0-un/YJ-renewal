

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
  var toggle1 = $('.slide_toggle1');
  var toggle2 = $('.slide_toggle2');
  var toggle3 = $('.slide_toggle3');
  var toggle4 = $('.slide_toggle4');
  var toggle5 = $('.slide_toggle5');
  var toggle6 = $('.slide_toggle6');

  var menu1 = $('.dropdown-container1');
  var menu2 = $('.dropdown-container2');
  var menu3 = $('.dropdown-container3');
  var menu4 = $('.dropdown-container4');
  var menu5 = $('.dropdown-container5');
  var menu6 = $('.dropdown-container6');



    //$(”이벤트 대상”).이벤트종류(function(){});
    $(toggle1).on('click',function(e){ 
        //toggle을 클릭했을 때 이벤트 발생
        e.preventDefault(); 
        // 이벤트 버블링을 막기 위한 코드
        //이벤트 버블링 : 버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상


        menu1.slideToggle(); 
        // 효과 메서드, slideUp(), slideDown()  효과 동시 적용
        // 다른 메뉴 닫기
        if(menu2.css('display') == 'block')
        menu2.slideToggle();
        if(menu3.css('display') == 'block')
        menu3.slideToggle();
        if(menu4.css('display') == 'block')
        menu4.slideToggle();
        if(menu5.css('display') == 'block')
        menu5.slideToggle();
        if(menu6.css('display') == 'block')
        menu6.slideToggle();
    })
    $(toggle2).on('click',function(e){ 
        //toggle을 클릭했을 때 이벤트 발생
        e.preventDefault(); 
        // 이벤트 버블링을 막기 위한 코드
        //이벤트 버블링 : 버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상
        menu2.slideToggle(); 
        // 효과 메서드, slideUp(), slideDown()  효과 동시 적용
          // 다른 메뉴 닫기
          if(menu1.css('display') == 'block')
          menu1.slideToggle();
          if(menu3.css('display') == 'block')
          menu3.slideToggle();
          if(menu4.css('display') == 'block')
          menu4.slideToggle();
          if(menu5.css('display') == 'block')
          menu5.slideToggle();
          if(menu6.css('display') == 'block')
          menu6.slideToggle();
    })
    $(toggle3).on('click',function(e){ 
      e.preventDefault(); 
      menu3.slideToggle(); 
        // 다른 메뉴 닫기
        if(menu1.css('display') == 'block')
        menu1.slideToggle();
        if(menu2.css('display') == 'block')
        menu2.slideToggle();
        if(menu4.css('display') == 'block')
        menu4.slideToggle();
        if(menu5.css('display') == 'block')
        menu5.slideToggle();
        if(menu6.css('display') == 'block')
        menu6.slideToggle();
    })
    $(toggle4).on('click',function(e){ 
      e.preventDefault(); 
      menu4.slideToggle(); 
        // 다른 메뉴 닫기
        if(menu1.css('display') == 'block')
        menu1.slideToggle();
        if(menu2.css('display') == 'block')
        menu2.slideToggle();
        if(menu3.css('display') == 'block')
        menu3.slideToggle();
        if(menu5.css('display') == 'block')
        menu5.slideToggle();
        if(menu6.css('display') == 'block')
        menu6.slideToggle();
    })
    $(toggle5).on('click',function(e){ 
      e.preventDefault(); 
      menu5.slideToggle(); 
        // 다른 메뉴 닫기
        if(menu1.css('display') == 'block')
        menu1.slideToggle();
        if(menu2.css('display') == 'block')
        menu2.slideToggle();
        if(menu3.css('display') == 'block')
        menu3.slideToggle();
        if(menu4.css('display') == 'block')
        menu4.slideToggle();
        if(menu6.css('display') == 'block')
        menu6.slideToggle();
    })
    $(toggle6).on('click',function(e){ 
      e.preventDefault(); 
      menu6.slideToggle(); 
        // 다른 메뉴 닫기
        if(menu1.css('display') == 'block')
        menu1.slideToggle();
        if(menu2.css('display') == 'block')
        menu2.slideToggle();
        if(menu3.css('display') == 'block')
        menu3.slideToggle();
        if(menu4.css('display') == 'block')
        menu4.slideToggle();
        if(menu5.css('display') == 'block')
        menu5.slideToggle();
    })
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




