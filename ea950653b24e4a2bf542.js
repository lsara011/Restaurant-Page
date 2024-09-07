import "./style.css"
import { homePage } from "./home";
import { menu } from "./Menu";
import { about } from "./about";
homePage();
document.getElementById('home').addEventListener('click', homePage);
document.getElementById('menu').addEventListener('click', menu);
document.getElementById('about').addEventListener('click', about);
