const content = document.getElementById("content");

const contactPage = document.createElement("div");
contactPage.id = "home-page";
contactPage.className = "page";

//contact header
const contactHeader = document.createElement("h1");
contactHeader.textContent = "Contact";
contactHeader.className = "header";
contactHeader.id = "home-header";

contactPage.append(contactHeader);

//home blurb
const Blurb = document.createElement("p");
Blurb.textContent = "Don't talk to me or my son\r\n ever again\r\n\r\n john.horan@hoholabs.com";
Blurb.id = "home-blurb";

contactPage.append(Blurb);


function loadContact() {
content.append(contactPage);
document.querySelectorAll(".nav-button").forEach(element => {
    element.style.backgroundColor = "var(--color2)";      
});
document.getElementById("contact-button").style.backgroundColor = "var(--color1)";
};

export default loadContact;