var dialogue_box = document.querySelector('.dialogue-box');
var dialogue_box_2 = document.querySelector('.dialogue-box-2');
var img = document.querySelector('.content-top img');

img.addEventListener('click', function () {
    if(window.getComputedStyle(dialogue_box).opacity == 1) {
        console.log("ok");
        dialogue_box_2.style.animation = "dialog-appear 2s";
        dialogue_box_2.style.opacity = 1;
    }
    dialogue_box.style.animation = "dialog-appear 2s";
    dialogue_box.style.opacity = 1;
});

function backHome() {
    window.history.back();
}