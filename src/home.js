const content = document.getElementById("content");

const homePage = document.createElement("div");
homePage.id = "home-page";
homePage.className = "page";

//home header
const homeHeader = document.createElement("h1");
homeHeader.textContent = "Welcome to Hoho's Diner";
homeHeader.className = "header";
homeHeader.id = "home-header";

//home blurb
const homeBlurb = document.createElement("p");
homeBlurb.textContent = "We've got some good food.\r\n Eat it!";
homeBlurb.id = "home-blurb";

//hours
const hoursArray = [
    { day: "Sun", hour: "9-3",},
    { day: "Mon", hour: "11-9",},
    { day: "Tue", hour: "11-9",},
    { day: "Wed", hour: "11-9",},
    { day: "Thu", hour: "11-9",},
    { day: "Fri", hour: "11-10",},
    { day: "Sat", hour: "7-10",}
  ];

//create hours table
const hours = document.createElement("table");
hours.id = "hours";

function hoursTable (array){
    array.forEach(element => {
        //create table elements
        let tbody = document.createElement("tbody");
        let tr = document.createElement("tr");
        let tdDay = document.createElement("td");
        tdDay.textContent = element.day;
        let tdHour = document.createElement("td");
        tdHour.textContent = element.hour;

        //append elements to table
        tr.append(tdDay);
        tr.append(tdHour);
        tbody.append(tr);
        hours.append(tbody);
    });
}

hoursTable(hoursArray);

//location

const location = document.createElement("p");
location.textContent = "123 Fake street\r\n";
location.textContent += "Anytown USA\r\n"
location.id = "location"


homePage.append(homeHeader);
homePage.append(homeBlurb);
homePage.append(hours);
homePage.append(location);

function loadHome() {
content.append(homePage);
document.querySelectorAll(".nav-button").forEach(element => {
    element.style.backgroundColor = "var(--color2)";      
});
document.getElementById("home-button").style.backgroundColor = "var(--color1)";
};

export default loadHome;