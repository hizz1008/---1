const toggleBtn = document.querySelector(".banner-toogletBtn");
const bannerMenu = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  bannerMenu.classList.toggle("active");
});
