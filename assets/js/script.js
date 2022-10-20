// CAMBIO MENU SCROLL

let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("nav a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 250;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("activeScroll");
        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("activeScroll");
      });
    }
  });
};




// REVEAL

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);



// REVEAL TO RIGHT

function revealToRight() {
    var reveals = document.querySelectorAll(".revealToRight");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("activeToRight");
        } else {
            reveals[i].classList.remove("activeToRight");
        }
    }
}

window.addEventListener("scroll", revealToRight);



// REVEAL BTN

function revealBtn() {
    var reveals = document.querySelectorAll(".revealBtn");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("activeBtn");
        } else {
            reveals[i].classList.remove("activeBtn");
        }
    }
}

window.addEventListener("scroll", revealBtn);




// REVEAL GRADUALE

function revealGrad() {
    var reveals = document.querySelectorAll(".revealGrad");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("activeGrad");
        } else {
            reveals[i].classList.remove("activeGrad");
        }
    }
}

window.addEventListener("scroll", revealGrad);



// REVEAL FORM

function revealForm() {
    var reveals = document.querySelectorAll(".revealForm");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("activeForm");
        } else {
            reveals[i].classList.remove("activeForm");
        }
    }
}

window.addEventListener("scroll", revealForm);



// REVEAL INFO

function revealInfo() {
    var reveals = document.querySelectorAll(".revealInfo");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("activeInfo");
        } else {
            reveals[i].classList.remove("activeInfo");
        }
    }
}

window.addEventListener("scroll", revealInfo);




// SLIDER

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const nextButton = document.getElementById("arrow");
var posizione = 0;
var numeroImg = document.querySelectorAll(".immagine").length;

nextButton.addEventListener("click", () => {
  const imgWidth = document.querySelector("#immagineId").width;
  
  if (posizione == (numeroImg-2)) {
	slidesContainer.scrollLeft -= imgWidth*numeroImg;
	posizione = 0;
} else {
	slidesContainer.scrollLeft += imgWidth;
  posizione++;
}
});