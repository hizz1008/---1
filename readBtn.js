const btn = document.getElementById("read-more-btn");

const removeStlyle = document.querySelector(".container");

function readBtn() {
  if (removeStlyle.style.display === "-webkit-box") {
    removeStlyle.style.display = "flex";
  } else {
    removeStlyle.style.display = "-webkit-box";
  }
}

btn.addEventListener("click", readBtn);
