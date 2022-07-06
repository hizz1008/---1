const toggleBtn = document.querySelector(".banner-toogletBtn");
const bannerMenu = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  bannerMenu.classList.toggle("active");
});

const connectCss = document.querySelector(".meun-container");
const connectBanner = "coonect-banner";

const path = window.location.pathname;
const page = path.split("/").pop();
console.log(page);

const fileName = location.href;
console.log(fileName);
const find = location.href.parentElement;
console.log(find);
/*
function changeCss(mouseover) {
  const currentBanner = document.querySelector(`.${connectBanner}`);
  if (mouseover) {
    connectCss.classList.add(currentBanner);
  } else {
    connectCss.classList.add(currentBanner);
  }
}
function removeCss(mouseover) {
  const currentBanner = document.querySelector(`.${connectBanner}`);
  if (mouseover) {
    connectCss.classList.remove(currentBanner);
  } else {
    connectCss.classList.remove(currentBanner);
  }
}

connectCss.addEventListener("mouseover", changeCss);
connectCss.addEventListener("mouseover", removeCss);

내가 a랭크를 클릭하면

내가 접속해 있는 html 파일의 부모엘리먼트에 connetBanner를 추가
다른 곳에 감지되면 remove

접속화면의 html 정보 알아서 그 화면에 있는 곳은 connectBanner를 추가해라
다른 곳에 mouseover가 감지되면 connectBanner를 remove해라*/
