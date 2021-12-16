const scrolling = document.getElementById("scroll");

scrolling.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

const scrollFunc = function () {
    let y = window.scrollY;

    if(y > 0){
        scrolling.className = ("invisible");
    }else{
        scrolling.className = ("visible")
    }
}




const sliders = document.querySelectorAll(".slide");
const faders = document.querySelectorAll(".fade-in");

const options = {
    threshold: 0.3,
    rootMargin: "0px 0px -30px 0px"
};


const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, options);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slide => {
    appearOnScroll.observe(slide);
});
