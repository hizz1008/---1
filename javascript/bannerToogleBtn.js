const toggleBtn = document.querySelector(".banner-toogletBtn");
const bannerMenu = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  bannerMenu.classList.toggle("active");
});

const menuContainer = document.querySelector(".menu-container");
const menu = document.querySelector(".menu");
const connectCss = "menu-connect";

function removeCss(event){
  event.menu.childNodes.remove(connectCss)
}

menu.addEventListener("mouseover", removeCss);

console.log(menu)
console.dir(removeCss)
/*
메뉴 html에 기본으로 css 추가 한 다음 그걸 지우는 자바스크립트 작성
마우스 호버시 배너 class를 삭제 그리고 다시 추가하지 않음
*/