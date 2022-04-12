let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const burguer = menuToggle.querySelectorAll("img")
const coffetext = menuSection.querySelector(".coffe-text")
const getcoffe = menuSection.querySelector("#get-coffe")

menuToggle.addEventListener("click", () => {
    
    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    coffetext.classList.toggle("on", show)
    getcoffe.classList.toggle("on", show)

    burguer[0].classList.toggle("on", show);
    burguer[1].classList.toggle("on", !show);
    

    show = !show;
})