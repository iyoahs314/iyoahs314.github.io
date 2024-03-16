var dialogue_box = document.querySelector('.dialogue-box');
var dialogue_box_2 = document.querySelector('.dialogue-box-2');
var img = document.querySelector('.content-top img');

img.addEventListener('click', function () {
    if(window.getComputedStyle(dialogue_box).display === "block") {
        console.log("ok");
        dialogue_box_2.style.display = "block";
    }
    dialogue_box.style.display = "block";
});

function backHome() {
    window.history.back();
}