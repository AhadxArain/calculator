const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.value === "clear") {
      result.textContent = "";
    } else if (e.target.value === "=") {
      try {
        result.textContent = eval(result.textContent);
      } catch {
        result.textContent = "Error";
      }
    } else {
      result.textContent += e.target.value;
    }
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;
  console.log(event)
  const button = document.querySelector(`button[data-key="${key}"]`);

  if (button) {
    button.click();
  }
});
