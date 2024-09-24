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



/*----- SLIDE ANIMATIONS -----*/

const startAnimationRight = (entries, observerRight) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("slide-in-from-right", entry.isIntersecting);
    });
  };

const startAnimationLeft = (entries, observerLeft) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("slide-in-from-left", entry.isIntersecting);
    });
  };
  
const observerRight = new IntersectionObserver(startAnimationRight);
const observerLeft = new IntersectionObserver(startAnimationLeft);
const options = { root: null, rootMargin: '0px', threshold: 1 }; 
  
const elementsRight = document.querySelectorAll('.slideElementFromRight');
const elementsLeft = document.querySelectorAll('.slideElementFromLeft');

elementsRight.forEach(elRight => {
    observerRight.observe(elRight, options);
});

elementsLeft.forEach(elLeft => {
    observerLeft.observe(elLeft, options);
});


/*----- SLIDE ANIMATIONS -----*/

let select_languages = document.querySelector('#select_languages');
let select_tools = document.querySelector('#select_tools');
let skills_languages = document.querySelector('#skills_languages');
let skills_tools = document.querySelector('#skills_tools');

// Par défaut : afficher les langages et cacher les outils
select_languages.classList.toggle("skills_toggle_select");
skills_tools.classList.toggle("skills_container_display_none");
let select = 0;

select_languages.addEventListener("click", () => {
  if (select == 1) {
    toggle();
    select = 0;
  }
});

select_tools.addEventListener("click", () => {
  if (select == 0) {
    toggle();
    select = 1;
  }
});

function toggle() {
  // toggle l'affichage du select dans le menu entre langages/outils
  select_languages.classList.toggle("skills_toggle_select");
  select_tools.classList.toggle("skills_toggle_select");
  // toggle l'affichage des icones dans la page entre langages/outils
  skills_languages.classList.toggle("skills_container_display_none");
  skills_tools.classList.toggle("skills_container_display_none");
  
  
}

/*----- DATE FOOTER -----*/

let year = document.querySelector(".year");
let date = new Date().getFullYear();

year.innerHTML = date;

