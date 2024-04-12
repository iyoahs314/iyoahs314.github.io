var stars = document.querySelectorAll(".star-container .stars");

    stars[0].addEventListener("click", function() { changeStar(0) });
    stars[1].addEventListener("click", function() { changeStar(1) });
    stars[2].addEventListener("click", function() { changeStar(2) });
    stars[3].addEventListener("click", function() { changeStar(3) });
    stars[4].addEventListener("click", function() { changeStar(4) });

    function changeStar(index) {
        for(var i=0;i<stars.length;i++) {
            stars[i].style.backgroundImage = "url(pic/star_level_dark" + (i + 1) + ".png)";
        }
        stars[index].style.backgroundImage = "url(pic/star_level_" + (index + 1) + ".png)";
    }

    function submit() {
        window.history.back()
    }