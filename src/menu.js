const content = document.getElementById("content");

const menuPage = document.createElement("div");
menuPage.id = "menu-page";
menuPage.className = "page";

//menu header
const menuHeader = document.createElement("h1");
menuHeader.textContent = "MENU";
menuHeader.className = "header";
menuHeader.id = "menu-header";

menuPage.append(menuHeader);

function loadMenu() {
    content.append(menuPage);
    };
    
export default loadMenu;