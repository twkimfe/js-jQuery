const heading = document.querySelector("#heading");
let isRed = false;
heading.onclick = function () {
  if (isRed) {
    heading.style.color = "blue";
  } else {
    heading.style.color = "red";
  }
  isRed = !isRed;
};
