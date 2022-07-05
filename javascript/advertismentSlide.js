const SHWING_ad = "showing";
const firstSlide = document.querySelector(".silde-advertisement:first-child");

function slide() {
  const currentSlide = document.querySelector(`.${SHWING_ad}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHWING_ad);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHWING_ad);
    } else {
      firstSlide.classList.add(SHWING_ad);
    }
  } else {
    firstSlide.classList.add(SHWING_ad);
  }
}
slide();
setInterval(slide, 5000);
