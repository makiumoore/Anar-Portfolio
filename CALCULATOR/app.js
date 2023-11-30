const display = document.querySelector(".display");
let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "0";
        break;
      case "C":
        if (display.innerText.length == 1) {
          display.innerText = "0";
        } else {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (error) {
          alert("Алдаа гарлаа !!!");
          display.innerText = "0";
        }
        break;
      default:
        if (display.innerText == "0" && e.target.innerText !== ".") {
          display.innerText = e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});
