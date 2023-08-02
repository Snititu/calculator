const btns = document.getElementsByTagName("button");
const screen = document.querySelector(".screen");
const calculator = document.querySelector(".equal-sign");
const deleteBtn = document.querySelector(".all-clear");

for (let i = 0; i <= 16; i++) {
  if (i != 15 && i != 16) {
    btns[i].addEventListener("click", write);
  }
}

function write() {
  screen.value = screen.value + this.value;
}

function result() {
  screen.value = eval(screen.value);
}

calculator.addEventListener("click", result);

deleteBtn.addEventListener("click", deleted);

function deleted() {
  screen.value = "";
}
