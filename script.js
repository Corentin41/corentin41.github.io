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

/*----- DATE & AGE -----*/

let date = new Date();

// Dynamic age
let ageDisplay = document.querySelector(".age");
let myBirthYear = 2002;
let currentYear = date.getFullYear();
let currentDay = date.getDate();
let currentMonth = date.getMonth() + 1; // + 1 because index between 0 and 11
if (currentDay >= 25 && currentMonth >= 2) {
  ageDisplay.innerHTML = currentYear - myBirthYear;
} else {
  ageDisplay.innerHTML = currentYear - myBirthYear - 1;
}

// Date footer
let footerYearDisplay = document.querySelector(".year");
footerYearDisplay.innerHTML = date.getFullYear();

/*----- ANIMATIONS -----*/

const options = { root: null, rootMargin: '0px', threshold: 1 };

function startAnimation(animation_name) {
  const startAnimation = (entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle(animation_name, entry.isIntersecting);
    });
  };
  return startAnimation;
}

// Slide from right animation call
const elementsRight = document.querySelectorAll('.slideElementFromRight');
elementsRight.forEach(element => {
  new IntersectionObserver(startAnimation("slide-in-from-right")).observe(element, options);
});

// Slide from left animation call
const elementsLeft = document.querySelectorAll('.slideElementFromLeft');
elementsLeft.forEach(element => {
  new IntersectionObserver(startAnimation("slide-in-from-left")).observe(element, options);
});

// Projects pop animation call
const elementsPop = document.querySelectorAll('.popElement');
elementsPop.forEach(elPop => {
  new IntersectionObserver(startAnimation("pop_animation")).observe(elPop, options);
});

// Skills pop animation call
const elementsSkillsPop = document.querySelectorAll('.skill_pop');
popAnimationDelay();
elementsSkillsPop.forEach(element => {
  new IntersectionObserver(startAnimation("skill_pop_animation")).observe(element, options);
});

/*----- POP ANIMATION DELAY -----*/

// add animation delay for each skill_box
function popAnimationDelay() {
  var skills = document.querySelectorAll('.skills');
  var tools = document.querySelectorAll('.tools');
  
  // animation delay for skill/language box
  skills.forEach(box => {
    // increase the delay
    increaseDelay();
    // add the new delay to the "box" element
    let pop_delay = getComputedStyle(document.documentElement).getPropertyValue('--pop-delay');
    box.style.animationDelay = pop_delay;
  });
  
  // reset the delay var to prevent a delay stack between skills and tools
  resetDelay();
  
  // animation delay for tool box
  tools.forEach(box => {
    // increase the delay
    increaseDelay();
    // add the new delay to the "box" element
    let pop_delay = getComputedStyle(document.documentElement).getPropertyValue('--pop-delay');
    box.style.animationDelay = pop_delay;
  });
}

// reset the delay var in :root element in css file
function resetDelay() {
  const root_theme = document.querySelector(':root');
  root_theme.style.setProperty('--pop-delay', "0.0s");
}

// increase delay between each skill box pop
function increaseDelay(pop_delay) {
  // get the pop delay and transform from string to int
  pop_delay = getComputedStyle(document.documentElement).getPropertyValue('--pop-delay');
  let delay = pop_delay.replace("s","");
  // increase delay with 0.1s for each skill box
  delay = parseFloat(delay) + parseFloat('0.1');
  // set the new var in the css
  const root_theme = document.querySelector(':root');
  root_theme.style.setProperty('--pop-delay', delay+"s");
}

/*----- SKILLS SELECT TOOGLE -----*/

let select_languages = document.querySelector('#select_languages');
let select_tools = document.querySelector('#select_tools');
let skills_languages = document.querySelector('#skills_languages');
let skills_tools = document.querySelector('#skills_tools');

// Par défaut : afficher les langages et cacher les outils
select_languages.classList.toggle("skills_toggle_select");
skills_tools.classList.toggle("skills_container_display_none");
select_languages.style.color = "black";
let select = 0;

select_languages.addEventListener("click", () => {
  if (select == 1) {
    toggle();
    // Changer la couleur du texte
    select_languages.style.color = "black";
    select_tools.style.color = "white";
    select = 0;
  }
});

select_tools.addEventListener("click", () => {
  if (select == 0) {
    toggle();
    select_tools.style.color = "black";
    select_languages.style.color = "white";
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

/*----- REVEAL HIDDEN PROJECTS -----*/

let hidden_projects = document.querySelectorAll("#hidden_project");
let view_more_project = document.querySelector(".view_more_project");
let view_less_project = document.querySelector(".view_less_project");

// afficher le bouton voir plus de projets et cacher l'autre
display = 1;
display_btn();

// retirer de l'affichage les projets
hidden_projects.forEach(project => {
  project.style.display = "none";
});

// voir plus de projets
view_more_project.addEventListener("click", () => {
  display = 0;
  display_btn();
  hidden_projects.forEach(project => {
    project.style.display = "flex";
  })
});

// voir moins de projets
view_less_project.addEventListener("click", () => {
  display = 1;
  display_btn();
  hidden_projects.forEach(project => {
    project.style.display = "none";
  })
})

// boutons pour afficher "voir plus / voir moins"
function display_btn() {
  if (display == 0) {
    view_more_project.style.display = "none";
    view_less_project.style.display = "block";
  } else {
    view_more_project.style.display = "block";
    view_less_project.style.display = "none";
  }
}