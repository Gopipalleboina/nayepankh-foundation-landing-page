// Dark Mode Toggle

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");


const icon = themeToggle.querySelector("i");

if(document.body.classList.contains("dark-mode")){
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}else{
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
}


});

// Contact Form

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
e.preventDefault();


alert("Thank you for contacting NayePankh Foundation!");

form.reset();


});

// Scroll Animation

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {


    if(entry.isIntersecting){
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
    }

});


});

cards.forEach((card) => {


card.style.opacity = "0";
card.style.transform = "translateY(30px)";
card.style.transition = "all 0.6s ease";

observer.observe(card);


});
