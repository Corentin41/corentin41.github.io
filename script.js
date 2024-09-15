/*----- MENU BURGER -----*/

let btnBurger = document.querySelector(".menuBurger");
let navMobile = document.querySelector(".navMobile");
let ulMobile = document.querySelector(".ulMobile");
let restart = false;

btnBurger.addEventListener("click", function () {
    if (restart == false) {
        navMobile.style.width = "300px";
        ulMobile.style.display = "block";
        btnBurger.classList.add("menuBurgerOpen");
        restart = true;
    }

    else {
        navMobile.style.width = "0vw";
        ulMobile.style.display = "none";
        btnBurger.classList.remove("menuBurgerOpen");
        restart = false;
    }
})

// Click sur un élément du menu le fait disparaître
let menu = document.querySelectorAll(".menu");

menu.forEach(item => {
    item.addEventListener("click", () => {
        navMobile.style.width = "0vw";
        ulMobile.style.display = "none";
        btnBurger.classList.remove("menuBurgerOpen");
        restart = false;
    });
});

/*----- DATE FOOTER -----*/

let year = document.querySelector(".year");
let date = new Date().getFullYear();

year.innerHTML = date;

