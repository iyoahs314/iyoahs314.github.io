function changeIntroIyoahs() {
    var intro = document.querySelector(".iyoahs .intro-iyoahs");
    intro.style.opacity = window.getComputedStyle(intro).opacity == 1 ? 0 : 1
}