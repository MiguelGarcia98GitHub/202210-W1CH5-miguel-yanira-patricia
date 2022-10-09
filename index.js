const burgerMenu = document.getElementById("burger");
console.log(burgerMenu);

let burgerState = false;

let menuHTMLContent = `<div class='innerMenu'>
    <div class='innerMenuItem'>Home</div>
    <div class='innerMenuItem'>Services</div>
    <div class='innerMenuItem'>Continents</div>
    <div class='innerMenuItem'>Contact</div>
    <div class='innerMenuItem'>Privacy</div>
    </div>`;

const mainHTML = document.querySelector("main");
console.log(mainHTML);
const footerHTML = document.querySelector("footer");
console.log(footerHTML);
const sectionPanelHTML = document.getElementById("panel1");
console.log(sectionPanelHTML);
const sublineHTML = document.getElementById("subline");
console.log(sublineHTML);
const headerHTML = document.querySelector("header");
console.log(headerHTML);
const jsMenu = document.getElementById("js__menu");
console.log(jsMenu);
const bodyHTML = document.querySelector("body");
console.log(bodyHTML);

const addMenuElements = () => {
    jsMenu.style.display = "block";
    jsMenu.style.backgroundColor = "rgba(42, 0, 162, 1)";
    jsMenu.style.color = "white";
    jsMenu.style.width = "100vw";
    jsMenu.style.height = "100vh";
    bodyHTML.style.margin = "0";
    bodyHTML.style.padding = "0";
    jsMenu.innerHTML = menuHTMLContent;
};

const removeMenuElements = () => {
    jsMenu.style.display = "none";
    jsMenu.style.width = "0";
    jsMenu.style.height = "0";
};

burgerMenu.addEventListener("click", () => {
    burgerState = !burgerState;

    if (burgerState) {
        mainHTML.style.display = "none";
        footerHTML.style.display = "none";
        sectionPanelHTML.style.display = "none";
        sublineHTML.style.display = "none";
        headerHTML.style.border = "none";
        addMenuElements();
    }

    if (!burgerState) {
        removeMenuElements();
        mainHTML.style.display = "block";
        footerHTML.style.display = "block";
        sectionPanelHTML.style.display = "block";
        sublineHTML.style.display = "block";
        headerHTML.style.border = "block";
    }
});
