const btn = document.getElementById("read-more-btn");

const changesStyle = document.querySelector(".container");

function readBtn() {
  if (changesStyle.style.display === "-webkit-box") {
    changesStyle.style.display = "flex";
  } else {
    changesStyle.style.display = "-webkit-box";
  }
}

readBtn();
btn.addEventListener("click", readBtn);
