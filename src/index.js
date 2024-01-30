import "modern-normalize"
import "./styles.css"
import main from "./pageLoad.js"
import menu from "./menu.js"
import about from "./about.js"
const container = document.getElementById('content');
container.appendChild(about());