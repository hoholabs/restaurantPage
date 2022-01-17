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

///make menu sections

function makeSection(name){
const section = document.createElement("section");
section.className = "menu-section";
section.id = `${name}-section`;

const sectionHeader = document.createElement("h2");
sectionHeader.textContent = name;
section.append(sectionHeader);
menuPage.appendChild(section);
}

const breakfastSection = document.createElement("section");
breakfastSection.className = 'menu-section'
breakfastSection.id = 'breakfast-section';

const breakfastHeader = document.createElement("h2");
breakfastHeader.textContent = "Breakfast";
breakfastSection.append(breakfastHeader);

const breakfastArray = [
    { name: "eggs",         price: "$1.00",},
    { name: "toast",        price: "$1.00",},
    { name: "pancakes",     price: "$1.00",},
    { name: "french toast", price: "$1.00",},
    { name: "bacon",        price: "$1.00",},
    { name: "sausage",      price: "$1.00",},
    { name: "ham",          price: "$1.00",}
  ];

const breakfastItems = document.createElement("table");

function itemsTable (array){
    array.forEach(element => {
        //create table elements
        let tbody = document.createElement("tbody");
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        tdName.textContent = element.name;
        let tdPrice = document.createElement("td");
        tdPrice.textContent = element.price;

        //append elements to table
        tr.append(tdName);
        tr.append(tdPrice);
        tbody.append(tr);
        breakfastItems.append(tbody);
    });
}
itemsTable(breakfastArray);
breakfastSection.append(breakfastItems);

menuPage.append(breakfastSection);




let booSection = makeSection("boo");

function loadMenu() {
    content.append(menuPage);
    };
    
export default loadMenu;