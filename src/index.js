import './style.css';
import bannerImage from './header.jpg';
import loadHome from './home.js'


const content = document.getElementById("content");
console.log(content);

//creating the nav bar

const navBar = document.createElement("div");
navBar.id = 'nav-bar';

const banner = document.createElement("img")
banner.id = 'banner-image';
banner.src = bannerImage;

const homeButton = document.createElement("button");
homeButton.id = 'home-button';
homeButton.textContent = ("HOME");
homeButton.className = "nav-button";

const menuButton = document.createElement("button")
menuButton.id = 'menu-button';
menuButton.textContent = ("MENU");
menuButton.className = "nav-button";

const contactButton = document.createElement("button");
contactButton.id = 'contact-button';
contactButton.textContent = ("CONTACT");
contactButton.className = "nav-button";

navBar.append(banner,homeButton, menuButton, contactButton);

content.append(navBar);

loadHome();