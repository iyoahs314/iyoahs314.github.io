var showText = function (target, message, index, interval) {
    var element = document.querySelector(target);
    if (index < message.length) { 
        element.textContent += message[index++];
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    } 
}
window.onload = function () {
    showText("h1", "404 Not found, This is an error!", 0, 80);
};