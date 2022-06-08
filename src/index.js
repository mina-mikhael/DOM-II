import "./less/index.less";

// Your code goes here!
console.log("it's wired");

// creating the dom nodes on different element on the page

//global selector
const everyThing = document.querySelectorAll("*");

//text DOM node
const allText = document.querySelectorAll("p");

// main Nav DOM nodes
const mainNav = document.querySelector("header.main-navigation");
const logoHeading = document.querySelector(".main-navigation .logo-heading");
const navLinks = document.querySelectorAll("a.nav-link");

//Home DOM nodes
const introImage = document.querySelector(".home img");
const homeTitle = document.querySelector(".home h2");
const homeText = document.querySelector(".home p");

//content section DOM nodes
const contentTitle = document.querySelectorAll(".content-section h2");
const contentText = document.querySelectorAll(".content-section p");

// content pick DOM nodes
const contentPick = document.querySelector("section.content-pick");
const destinationButton = document.querySelectorAll("div.destination .btn");

//content destination image
const zoomImage = document.querySelector(".content-destination img");

//adding scroll event listener to make the nav-bar thinner
window.addEventListener("scroll", () => {
  if (scrollY > 200) {
    mainNav.style.height = "5em";
  } else {
    mainNav.style.height = "10em";
  }
  mainNav.style.transition = "1s";
});

//adding mouserover eventlistener for nav links

navLinks.forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    link.classList.add("hoverLink");
  });
  link.addEventListener("mouseout", (e) => {
    link.classList.remove("hoverLink");
  });
});

//adding on click event listener for destination buttons

destinationButton.forEach((element) => {
  element.addEventListener("click", (e) => {
    contentPick.style.backgroundColor = "#7ae6f688";
  });
});

contentPick.addEventListener("mouseout", (e) => {
  contentPick.style.backgroundColor = "#fff";
});

//adding select event for all text

allText.forEach((text) => {
  text.addEventListener("select", (e) => {
    console.log(e);
    text.style.color = "7af6d3";
  });
});

//adding double click event to zoom home image
introImage.addEventListener("dblclick", (e) => {
  introImage.style.transform = "scale(1.5)";
});

introImage.addEventListener("mouseout", (e) => {
  introImage.style.transform = "none";
});

//adding load event for everything on the page
window.addEventListener("load", () => {
  alert("Hop in! the FUN BUS is about to leave");
});

//zooming image using the wheel event listener
let scale = 1;
function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.001;
  scale = Math.min(Math.max(0.125, scale), 4);
  zoomImage.style.transform = `scale(${scale})`;
}
zoomImage.addEventListener("wheel", zoom);

zoomImage.addEventListener("mouseout", (e) => {
  zoomImage.style.transform = "none";
  zoomImage.style.transition = "0.5s";
});

//adding key down event listener

window.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") {
    everyThing.forEach((each) => {
      each.classList.toggle("removeAll");
    });
  }
  if (everyThing[0].className === "removeAll") {
    alert("You accidently missed the FUN BUS, press any key to get on the  next one");
  }
});

//adding dark mode
//create new button
const darkButton = document.createElement("button");
darkButton.textContent = "Dark Mode";

const navContainer = document.querySelector("div.nav-container");
navContainer.appendChild(darkButton);

darkButton.classList.add("darkButton");

darkButton.addEventListener("click", (e) => {
  document.body.classList.toggle("dark");
  navContainer.classList.toggle("darkHeader");
  contentPick.classList.toggle("dark");
  navLinks.forEach((link) => {
    link.classList.toggle("linksDark");
  });
});

navLinks.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

console.dir(navLinks);
