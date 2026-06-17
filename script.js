// =========================
// Typing Animation
// =========================

const texts = [

    "AI & Data Science Student",

    "Full Stack Developer",

    "Machine Learning Enthusiast",

    "Problem Solver"

];

let count = 0;

let index = 0;

let currentText = "";

let letter = "";



(function type() {

    if (count === texts.length) {

        count = 0;

    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);



    document.querySelector(".typing").textContent = letter;



    if (letter.length === currentText.length) {

        count++;

        index = 0;

        setTimeout(type, 1500);

    }

    else {

        setTimeout(type, 100);

    }

})();




// =========================
// Scroll Reveal Animation
// =========================

const reveals = document.querySelectorAll(

    ".skill-card,.project-card,.coding-card,.edu-card"

);



function revealOnScroll() {

    reveals.forEach((item) => {

        const top = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;



        if (top < windowHeight - 100) {

            item.classList.add("active");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();




// =========================
// Navbar Active Link
// =========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");



window.addEventListener("scroll", () => {

    let current = "";



    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;



        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });



    navLinks.forEach(link => {

        link.classList.remove("active");



        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});




// =========================
// Cursor Glow Effect
// =========================

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);



document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});




// =========================
// Project Card Hover Tilt
// =========================

const cards = document.querySelectorAll(".project-card");



cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        let rect = card.getBoundingClientRect();



        let x = e.clientX - rect.left;

        let y = e.clientY - rect.top;



        let rotateX = -(y - rect.height / 2) / 20;

        let rotateY = (x - rect.width / 2) / 20;



        card.style.transform =

            `perspective(1000px)

             rotateX(${rotateX}deg)

             rotateY(${rotateY}deg)

             scale(1.03)`;



    });



    card.addEventListener("mouseleave", () => {

        card.style.transform =

            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});




// =========================
// Counter Animation
// =========================

const counters = document.querySelectorAll(".counter");



counters.forEach(counter => {

    counter.innerText = "0";



    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");



        const c = +counter.innerText;



        const increment = target / 100;



        if (c < target) {

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 20);

        }

        else {

            counter.innerText = target;

        }

    }



    updateCounter();

});