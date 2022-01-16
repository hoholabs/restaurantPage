import './style.css';
import bannerImage from './header.jpg';
import loadHome from './home.js'
import loadMenu from './menu.js'

const content = document.getElementById("content");
//console.log(content);

//creating the nav bar

const navBar = document.createElement("nav");
navBar.id = 'nav-bar';

const banner = document.createElement("img")
banner.id = 'banner-image';
banner.src = bannerImage;

const homeButton = document.createElement("button");
homeButton.id = 'home-button';
homeButton.textContent = "HOME";
homeButton.className = "nav-button";

const menuButton = document.createElement("button")
menuButton.id = 'menu-button';
menuButton.textContent = "MENU";
menuButton.className = "nav-button";

const contactButton = document.createElement("button");
contactButton.id = 'contact-button';
contactButton.textContent = "CONTACT";
contactButton.className = "nav-button";

navBar.append(banner,homeButton, menuButton, contactButton);

content.append(navBar);

//loadHome();
loadMenu();

//clear page function
function clearPage(){
    content.innerHTML = '';
}

//add event listeners to button

homeButton.addEventListener("click", () => {
    clearPage();
    content.append(navBar);
    loadHome();
});

menuButton.addEventListener("click", () => {
    clearPage();
    content.append(navBar);
    loadMenu();
});

contactButton.addEventListener("click", () => {
    clearPage();
    content.append(navBar);
    loadHome();
});
