function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function changeBackground(event) {
    var background = document.body;
    var img = event.target;
    var img_path = img.getAttribute('src');
    background.style.backgroundImage = "url('../" + img_path + "')";
}

function backHome() {
    window.history.back();
}