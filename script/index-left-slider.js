const slider = document.querySelector(".shell");
const slides = document.querySelectorAll(".item");
const body = document.body;
const root = document.documentElement;
const active_left = document.querySelector(".shell .active .left");

let current = 0;
let prev = 3; 
let next = 1; 

body.style.backgroundImage = 'url("pic/background'+(current+1)+'.gif")';
change_slider(3, "rgb(244, 230, 154)", "rgb(123, 104, 0)");
change_slider(2, "rgb(208, 175, 225)", "rgb(105, 3, 160)");
change_slider(1, "rgb(152, 209, 188)", "rgb(0, 83, 3)");
change_slider(0, "rgb(188, 225, 237)", "rgb(16, 88, 197)");  // 必须放在最后一个


const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length -1);
const gotoNext = () => current < 3 ? gotoNum(current + 1) : gotoNum(0)

const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1; 

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == 4) {
        next = 0;
    }

    if (prev == -1) {
        prev = 3;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");

    body.style.backgroundImage = 'url("pic/background'+(current+1)+'.gif")';
    body.style.backgroundSize = "cover";

    if (current === 0) {
       change_slider(current, "rgb(188, 225, 237)", "rgb(16, 88, 197)");
    }else if (current === 1) {
        change_slider(current, "rgb(152, 209, 188)", "rgb(0, 83, 3)");        
    }else if (current === 2) {
        change_slider(current, "rgb(208, 175, 225)", "rgb(105, 3, 160)");
    }else if (current === 3) {
        change_slider(current, "rgb(244, 230, 154)", "rgb(123, 104, 0)");
    }
}

function change_slider(index, rgb1, rgb2) {
    root.style.setProperty('--color-background-1', rgb1);
    root.style.setProperty('--color-background-2', rgb2);
}

function goToImageHtml() {
    window.open("image.html", "_self");
}

function goToAnimeHtml() {
    window.open("anime.html", "_self");
}

function goToMusicHtml() {
    window.open("music.html", "_self");
}

function goToAboutHtml() {
    window.open("about.html", "_self");
}