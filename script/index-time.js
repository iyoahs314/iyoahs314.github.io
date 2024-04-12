const hour_box = document.querySelector(".time-box .hour");
    const min_box = document.querySelector(".time-box .minute");
    const sec_box = document.querySelector(".time-box .second");
    
    function updateTime() {
        let now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        hour_box.innerHTML = hour >= 10 ? hour : "0"+hour;
        min_box.innerHTML = minute >= 10 ? minute : "0"+minute;
        sec_box.innerHTML = second >= 10 ? second : "0"+second;
    }

    updateTime();
    setInterval(updateTime, 1000);