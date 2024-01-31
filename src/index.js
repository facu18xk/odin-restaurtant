import "modern-normalize";
import "./styles.css";
import template from './template.js';
import main from "./pageLoad.js";
import menu from "./menu.js";
import about from "./about.js";
template();
const container = document.getElementById('content');
container.appendChild(about());