import "./styles/style.scss";

const root = document.getElementById("root");
const element = document.createElement("div");

element.classList.add("MessageBox");
element.innerText = "Hello world!";

root.appendChild(element);