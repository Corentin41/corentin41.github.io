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

/*----- SKILLS POP ANIMATION -----*/

const startAnimationSkillsPop = (entries, observerSkillsPop) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("skill_pop_animation", entry.isIntersecting);
  });
};

const observerSkillsPop = new IntersectionObserver(startAnimationSkillsPop);
const elementsSkillsPop = document.querySelectorAll('.skill_pop');

elementsSkillsPop.forEach(elSkillsPop => {
  observerSkillsPop.observe(elSkillsPop, options);
});

// add animation delay for each skill_box
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

/*----- PROJECT POP ANIMATION -----*/

const startAnimationPop = (entries, observerPop) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("pop_animation", entry.isIntersecting);
  });
};

const observerPop = new IntersectionObserver(startAnimationPop);
const elementsPop = document.querySelectorAll('.popElement');

elementsPop.forEach(elPop => {
  observerPop.observe(elPop, options);
});

/*----- SKILLS SELECT -----*/

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

/*----- HIDDEN PROJECT -----*/

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

/*----- DATE FOOTER -----*/

let year = document.querySelector(".year");
let date = new Date().getFullYear();

year.innerHTML = date;

