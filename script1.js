// Membersihkan Pesan Teks
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.rest();
    }
};

// Toogle Hamburger Responsive
const navSlides = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");
    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlides();

//Parallax Effects
let moon = document.getElementById("moon");
let text = document.getElementById("text");
let fish = document.getElementById("fish");

let moonlight = document.getElementById("moonlight");
let whale = document.getElementById("whale");
let bubbles = document.getElementById("bubbles");



window.addEventListener("scroll", () => {
    let value = window.scrollY;
    moon.style.top = value * .5 + "px";
    text.style.top = 300 + value * 0.2 + 'px';
    fish.style.left = -1000 + value * 3.5 + "px";

    moonlight.style.top = -200 + value * .3 + "px";
    bubbles.style.top = 100 + value * -0.3 + "px";
    whale.style.left = -1000 + value * 1.5 + "px";
})