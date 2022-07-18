`Team project`
## Open API를 활용한 영진직업전문학교 리뉴얼 및  SNS 연동 회원 관리 시스템 개발 

> [구현페이지](https://yj-renewal.herokuapp.com)  
> [결과보고서 ppt](https://github.com/0-un/YJ-renewal/blob/main/%E1%84%8B%E1%85%A3%E1%84%89%E1%85%B5%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AB%E1%84%8E%E1%85%B5%E1%84%8F%E1%85%B5%E1%86%AB2%E1%84%8C%E1%85%A9_%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC.pdf)   
	[시연영상](https://youtu.be/if0JwZpgKLg)  
  👆 상세 내용은 해당 링크들을 통해 확인해주세요!

## 프로젝트 소개 

* 실무 프로젝트 시작 전, 미니 프로젝트로 기존의 [영진직업전문학교](http://yjjob.or.kr/)를 개선한 리뉴얼 페이지를 UI/UX 설계 및 반응형 웹구현    
( 22.03.23 ~ 22.04.13 )

* 기존 프로젝트를 실무 프로젝트로 연계하여  `Node.js`로 SNS 로그인 연동을 구현함 (22.06.29 ~ 22.07.21)

## 기획의도 
* 기존의 메뉴를 재구성하여 접근성을 향상시키고 일러스트를 활용한 트렌디한 디자인으로 예비 수강생들의 시선을 유도


## 개발 언어 및 기술 
- Rest API, Node.js, EJS, express, Javascript, 반응형 웹(HTML5, CSS3)

## 담당 직무
- 웹 퍼블리싱 
- HTML5, CSS3, Javascript 사용
- 메인 페이지 반응형 웹 구현
- 토글 메뉴 구현
- 와이어 프레임 제작
- heroku 연동


## 구현 기술
-  와이어프레임 제작
- 메인 페이지 반응형 웹 구현
- `jQuery`를 활용해 Owl Carousel 플러그인으로 과정 별 항목을 필터링하는 캐러셀 구현
- `Javascript`를 이용하여 드롭 다운 GNB 메뉴 및 햄버거 토글 메뉴 등의 기능들 구현


## 배운 점 & 아쉬운 점
> **배운 점** 
* 4월에 미니 프로젝트 할 즈음에는 `JavaScript`의 기초적인 부분까지 학습했으며, 기초적인 if문 정도를 배우는 중 프로젝트를 진행하게 되었다.
* 당시의 수준으로 햄버거 토글 메뉴 구현에 굉장히 애를 먹었으며, 프로젝트 마무리 기간이 다가와 내 수준으로서는 최선을 다했지만, 터무니없는 코드를 구현했던 적이 있다.

<details>
 <summary>당시의 말도 안되는 긴 코드 👈 </summary>
 
<div markdown="1">

```javascript

$(function(){

var  toggle1 = $('.slide_toggle1');

var  toggle2 = $('.slide_toggle2');

var  toggle3 = $('.slide_toggle3');

var  toggle4 = $('.slide_toggle4');

var  toggle5 = $('.slide_toggle5');

var  toggle6 = $('.slide_toggle6');

var  menu1 = $('.dropdown-container1');

var  menu2 = $('.dropdown-container2');

var  menu3 = $('.dropdown-container3');

var  menu4 = $('.dropdown-container4');

var  menu5 = $('.dropdown-container5');

var  menu6 = $('.dropdown-container6');


$(toggle1).on('click',function(e){

//toggle을 클릭했을 때 이벤트 발생

e.preventDefault();

menu1.slideToggle();

// 효과 메서드, slideUp(), slideDown() 효과 동시 적용

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

// 효과 메서드, slideUp(), slideDown() 효과 동시 적용

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

//   toggle6 까지 해당 if문을 반복했다.....

});



```
</div>

</details>

* 프로젝트 마무리 당시에도 계속 신경쓰이고 찝찝했던 코드였고 내내 신경이 쓰였다.
* 이번 로그인 연동 실무 프로젝트를 하면서도 제일 먼저 고치고 싶었을 정도로 기억에 남았었다.




<details>
<summary>  수정한 코드  👈</summary>

<div markdown="2">

```javascript
$(function(){
// 0717 수정

let  toggleMenu = document.getElementsByClassName("slide_toggle");
let  dropMenu = document.getElementsByClassName("dropdown-container");

for(let  i = 0; i <toggleMenu.length; i++){

$(toggleMenu[i]).on('click',function(e){

//toggle을 클릭했을 때 이벤트 발생
e.preventDefault();

for(let  j= 0; j <toggleMenu.length; j++){

if($(dropMenu[j]).css('display') == 'block')

$(dropMenu[j]).slideToggle();
}
$(dropMenu[i]).slideToggle();
})
}
});
```
</div>

</details>



- 반복문을 사용하여 훨씬 짧아진 코드로 개선했다.
- 몇 개월만에 성장한 결과물을 두 눈으로 확인할 수 있음에 놀랍기도 하고, 헛된 노력이 아님을 증명할 수 있어 굉장히 뿌듯했다.


> **아쉬운 점** 
-  프로젝트 시작 전, 교수님의 일일  `php`  기초 강의를 듣고 임시로 로그인 연동을 실습해보았다.
- 당시 로그인과 회원가입 페이지까지 연동은 하였으나, 로그인 유지 기능을 끝내 구현하지 못했다.
- 조금만 더 `php` 수업 진도가 길었다면 완성할 수 있었을 거란 아쉬움이 남는다.
