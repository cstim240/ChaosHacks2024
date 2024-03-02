import "./style.css";
import penguin from "./images/pingu.jpeg";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "hello";
  element.classList.add("hello");

  const myImage = new Image();
  myImage.src = penguin;

  element.appendChild(myImage);
  return element;
}

document.body.appendChild(component());
