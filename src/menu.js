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

function makeSection(name,array){
    //create section, assign id and classname
    const section = document.createElement("section");
    section.className = "menu-section";
    section.id = `${name.toLowerCase()}-section`;

    //create section header, add textContent
    const sectionHeader = document.createElement("h2");
    sectionHeader.textContent = name;
    
    //append together
    section.append(sectionHeader);
    section.append(itemsTable(array));
    menuPage.append(section);

    return section;
}

function itemsTable (array){

    let returnTable = document.createElement("table");
    returnTable.className = "menu-table";

    array.forEach(element => {
        //create table elements

        let tbody = document.createElement("tbody");
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        tdName.textContent = element.name;
        tdName.style.textAlign = "right";
        let tdPrice = document.createElement("td");
        tdPrice.textContent = element.price;

        //append elements to table
        tr.append(tdName);
        tr.append(tdPrice);
        tbody.append(tr);

        returnTable.append(tbody);
        
    });
    return returnTable;
}

//Breakfast
const breakfastArray = [
    { name: "eggs",         price: "$1.00",},
    { name: "toast",        price: "$1.00",},
    { name: "pancakes",     price: "$1.00",},
    { name: "french toast", price: "$1.00",},
    { name: "bacon",        price: "$1.00",},
    { name: "sausage",      price: "$1.00",},
    { name: "ham",          price: "$1.00",}
  ];

makeSection("Breakfast",breakfastArray)

//Lunch
const lunchArray = [
    { name: "sandwich",         price: "$7.00",},
    { name: "soup",        price: "$5.00",},
    { name: "salad",     price: "$145.00",},
    { name: "burger", price: "$5.00",},
    { name: "chicken tenders",        price: "$6.00",},
    { name: "walleye",      price: "$1.00",},
    { name: "shoe",          price: "$8.00",}
  ];
  
makeSection("Lunch",lunchArray);

//Dinner
const dinnerArray = [
    { name: "spagett",         price: "$5.00",},
    { name: "soup",        price: "$16.00",},
    { name: "ham",     price: "$4.00",},
    { name: "dinner", price: "$1.00",},
    { name: "salad",        price: "$8.00",},
    { name: "sausage",      price: "$41.00",},
    { name: "breakfast",          price: "$851.00",}
  ];
  
makeSection("Dinner",dinnerArray);

//Drinks
const drinksArray = [
    { name: "beer",         price: "$1.00",},
    { name: "wine",        price: "$1.00",},
    { name: "whisky",     price: "$1.00",},
    { name: "vodka", price: "$1.00",},
    { name: "bourbon",        price: "$1.00",},
    { name: "gin",      price: "$1.00",},
    { name: "water",          price: "$1.00",}
  ];
  
makeSection("Drinks",drinksArray);


function loadMenu() {
    content.append(menuPage);

    //reset all nav button background colors to default
    document.querySelectorAll(".nav-button").forEach(element => {
        element.style.backgroundColor = "var(--color2)";      
    });
    //set this page's nav button to secondary color
    document.getElementById("menu-button").style.backgroundColor = "var(--color1)";
    };
    
export default loadMenu;