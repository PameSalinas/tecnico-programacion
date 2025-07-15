const colorSelect = document.querySelector("#colorSelect");

function handleColorSelect() {
  const bodyElement = document.querySelector("body");
  const colorSelected = colorSelect.value;

  let style;

  switch (colorSelected) {
    case "red":
      style = "background-color: oklch(0.6882 0.2738 28.59)";
      break;
    case "green":
      style = "background-color: oklch(0.8706 0.2121 144)";
      break;
    case "blue":
      style = "background-color: oklch(0.7176 0.1801 243.53)";
      break;
    default:
      style = "background-color: oklch(0.9529 0.0814 99.53);";
  }

  bodyElement.style = style;
}

colorSelect.addEventListener("change", handleColorSelect);
