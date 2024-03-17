function changeBackground(event) {
    var body = document.body;
    var img = event.target;
    var img_path = img.getAttribute('src');
    console.log(img_path);
    var img_path_split = img_path.split('.');
    body.style.backgroundImage = "url('" + img_path_split[0] + "_back.jpg')";
}

function backHome() {
    window.history.back();
}

function topFunction() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}