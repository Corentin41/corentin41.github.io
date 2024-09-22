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



/*----- DATE FOOTER -----*/

let year = document.querySelector(".year");
let date = new Date().getFullYear();

year.innerHTML = date;

