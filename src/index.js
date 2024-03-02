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

function loadInputBoxes() {
  const inputBox = document.getElementById("NumPeople").value;

  if (inputBox == 1) {
    console.log()
  }
  
}


document.body.appendChild(component());
