const wrapper = document.querySelector('.wrapper');
const letter = document.querySelector('.letter');
const lidOne = document.querySelector('.wrapper .one');
const lidTwo = document.querySelector('.wrapper .two');
const envelope = document.querySelector('.wrapper .envelope');
const back_index = document.querySelector(".back-index-box .back-index")

wrapper.addEventListener('click', function() {
    document.documentElement.style.setProperty('--letter-up', '0px');

    letter.style.transform = "translateY(-200px)";
    letter.style.height = "unset";

    wrapper.style.backgroundColor = "#3B4049";
    wrapper.style.cursor = "unset";

    const elementsToAnimate = [lidOne, lidTwo, envelope];

    elementsToAnimate.forEach(element => {
        element.style.animation = "disappear 1s";
        element.style.opacity = 0;
        element.style.display = "none";
    });
});

back_index.addEventListener("click", function() {
    window.history.back();
});