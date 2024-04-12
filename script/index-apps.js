var apps_html = ["calendar.html", "problem.html", "star.html", "404.html"];
var apps = document.querySelectorAll(".right-drawer .apps .apps-img");

apps[0].addEventListener("click", function() {openHtmlApp(0)});
apps[1].addEventListener("click", function() {openHtmlApp(1)});
apps[2].addEventListener("click", function() {openHtmlApp(2)});
apps[3].addEventListener("click", function() {openHtmlApp(3)});

function openHtmlApp(index) {
    window.open(apps_html[index], "_self");
}