const content = document.getElementById("content");

const homePage = document.createElement("div");
homePage.id = "home-page";
homePage.className = "page";

const homeHeader = document.createElement("h1");
homeHeader.textContent = "Welcome to Hoho's Diner";
homeHeader.id = "home-header"

const homeBlurb = document.createElement("P");
homeBlurb.textContent = "We've got some good food. Eat it!";
homeBlurb.id = "home-blurb"

homePage.append(homeHeader);
homePage.append(homeBlurb);

function loadHome() {
content.append(homePage);
};

export default loadHome;