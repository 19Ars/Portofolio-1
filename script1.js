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