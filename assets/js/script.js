var slideIndex = 0;

var dots = document.getElementsByClassName("dot");
var slides = document.getElementsByClassName("mySlides");
var m = 0;


document.addEventListener('DOMContentLoaded', mainSlider);
window.onresize = mainSlider;

function mainSlider()
{
    var break1 = window.matchMedia("(max-width: 575px)");
    var break2 = window.matchMedia("(max-width: 768px)");
    var break3 = window.matchMedia("(max-width: 992px)");
    var break4 = window.matchMedia("(min-width: 1200px)");
    var break5 = window.matchMedia("(max-width: 1400px)");

    if (break1.matches) {
        console.log("Mobile--------------------------------------------------------");
        m = 1;
        resizza(1);
        mostraSlides(0, 1);
    
    
    }
    else if (break2.matches) {
        console.log("Mobile_Horizontal--------------------------------------------");  
        m = 2;
        resizza(2);
        mostraSlides(0, 2);
    
    }
    else if (break3.matches) {
        console.log("Tablet------------------------------------------------------");
        m = 3;
        resizza(3);
        mostraSlides(0, 3);
    
    }
    else if (break4.matches) {
        console.log("Desktop------------------------------------------------------");
        m = 4;
        resizza(4);
        mostraSlides(0, 4);
    
    }
    
}
function resizza(risoluzione) {

    let i = 0, lCerchi= dots.length;
    switch (risoluzione) {
        case 1:

               
            for (i = 0; i < slides.length; i++) {
                slides[i].style.width = "100%";
            }
            
            for (i = 0; i < lCerchi; i++) {
                dots[i].style.display = "inline-block";
                /*dots[i].classList.toggle("dot");*/
                console.log("pallini:",lCerchi,i); 
            }


            break;
        case 2:

            i = 0;
            for (i = 0; i < slides.length; i++) {
                slides[i].style.width = "48%";
            }
            /*for (i = 0; i < dots.length; i++) {
                if (i > 3) dots[i].style.display = "none";
                else dots[i].style.display = "inline";
            }*/
            for (i = 0; i < lCerchi; i++) {
                /*dots[i].style.display = "inline-block";*/
                if (i > 3) dots[i].style.display = "none";
                else dots[i].style.display = "inline-block";
                /*dots[i].classList.toggle("dot");*/
                console.log("pallini:",lCerchi,i); 
            }




            break;
        case 3:

            i = 0;
            for (i = 0; i < slides.length; i++) {
                slides[i].style.width = "32%";
            }
            /*for (i = 0; i < dots.length; i++) {
                if (i > 2) dots[i].style.display = "none";
            }*/
            for (i = 0; i < lCerchi; i++) {
                /*dots[i].style.display = "inline-block";*/
                if (i > 2) dots[i].style.display = "none";
                else dots[i].style.display = "inline-block";
                /*dots[i].classList.toggle("dot");*/
                console.log("pallini:",lCerchi,i); 
            }



            break;
            case 4:

                i = 0;
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.width = "24%";
                }
                for (i = 0; i < lCerchi; i++) {
                    if (i > 1) dots[i].style.display = "none";
                }
    
    
                break;
            
    }
}
function setCursore(pos) {
    let i = 0;
    for (i = 0; i < dots.length; i++) {
        dots[i].className = "dot";
    }
    dots[pos].classList.toggle("selez");
}
function plusSlides(n) {
    
    mainSlider();
    let i = 0;
    if (m==1) {

        console.log("primo breakpoint!");
        if (slideIndex < 7) {
            mostraSlides(slideIndex, slideIndex + 1);


            slideIndex++;
        }
        else {
            slideIndex = 0;
            mostraSlides(0, 1);
        }
        console.log(slideIndex);
        setCursore(slideIndex);
    }
    else if (m==2) {
        console.log("secondo breakpoint!");
        if (slideIndex <= 6) {
            mostraSlides(slideIndex, slideIndex + 2);


            slideIndex++;
        }
        else {
            slideIndex = 0;
            mostraSlides(0, 2);
        }
        console.log(slideIndex);
        setCursore(parseInt(slideIndex / 2));
    }
    else if (m==3) {
        console.log("terzo breakpoint!");
        if (slideIndex <= 6) {
            mostraSlides(slideIndex, slideIndex + 3);


            slideIndex ++;
        }
        else {
            slideIndex = 0;
            mostraSlides(0, 3);
        }
        console.log(slideIndex);
        setCursore(parseInt(slideIndex / 3));


    }
    else if (m==4) {
        console.log("Quarto breakpoint!");
        if (slideIndex <= 6) {
            mostraSlides(slideIndex, slideIndex + 4);


            /*slideIndex += 4;*/
            slideIndex++;
        }
        else {
            slideIndex = 0;
            mostraSlides(0, 4);
        }
        console.log(slideIndex/4);
        setCursore(parseInt(slideIndex / 4));


    }
}


function currentSlide(n) {
    mainSlider();
    mostraSlides(slideIndex = n, n + m);
    setCursore(n);
}



function mostraSlides(start, n) {
    let i;
    if (start <= 8 && n <= slides.length) {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = start; i < n; i++) {

            console.log(i, "--", n);
            slides[i].style.display = "inline-block";



        }
    }
}