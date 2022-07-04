const morebtn = document.querySelector(".content-more-btn");

const changesMorePhoto = document.querySelector(".more-photo-card");

function readBtn() {
  if (changesMorePhoto.style.display === "none") {
    changesMorePhoto.style.display = "flex";
  } else {
    changesMorePhoto.style.display = "none";
  }
}

readBtn();
morebtn.addEventListener("click", readBtn);
