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


window.addEventListener("scroll", () => {
    let value = window.scrollY;
    moon.style.top = value * .9 + "px";
    text.style.top = 99 + value * -0.2 + '%';
    fish.style.left = -1000 + value * 3.5 + "px";

    moonlight.style.top = value * .3 + "px";
    whale.style.left = value * .6 + "px";
})