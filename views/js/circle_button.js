
// 서클 네비 클릭 이벤트 발생
const circleNav = document.querySelector(".drag_circle_menu"),
toggleBtn = circleNav.querySelector(".drag_circle_menu_base");

toggleBtn.addEventListener("click" , () =>{
circleNav.classList.toggle("open");
});

// 서클 네비를 드래그 가능하게 해주는 부분.
function onDrag({movementY}) { // 마우스의 Y값 가져옴
const circleNavStyle = window.getComputedStyle(circleNav), // circleNav의 CSS 스타일을 정의
circleNavTop = parseInt(circleNavStyle.top), // 네비게이션의 Top값을 가져와 문자열로 전환
circleNavHeight = parseInt(circleNavStyle.height), // 네비게이션의 높이 값을 가져와 문자열로 전환
windHeight = window.innerHeight; // 윈도우의 높이값 가져오기

circleNav.style.top = circleNavTop > 0 ? `${circleNavTop + movementY}px` : "1px";
if(circleNavTop > windHeight - circleNavHeight){
circleNav.style.top = `${windHeight - circleNavHeight}px`;
}
}

// 마우스 버튼을 클릭하거나 네비 위로 마우스를 올라올때 호출
circleNav.addEventListener("mousedown", () =>{
circleNav.addEventListener("mousemove", onDrag);
});

// 마우스 버튼을 다시 누르거나 마우스가 네비를 벗어나면 호출
circleNav.addEventListener("mouseup", () =>{
circleNav.removeEventListener("mousemove", onDrag);
});
circleNav.addEventListener("mouseleave", () =>{
circleNav.removeEventListener("mousemove", onDrag);
});