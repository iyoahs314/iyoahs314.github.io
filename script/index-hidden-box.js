const hidden_window = document.querySelector('.hidden-window');
const pic_contact = document.querySelector('.hidden-window .hidden-box .pic-contact');
const music_icon = document.querySelector(".music-and-contact .music-switch .music-icon");
const backgroundMusic = document.getElementById('backgroundMusic');
let music_count = 0;

function open_wechat_pic() {
    hidden_window.style.display = 'block';
    pic_contact.src = 'pic/myWeChat.jpg';
}

function close_hidden_window() {
    hidden_window.style.display = 'none';
}

function open_QQ_pic() {
    hidden_window.style.display = 'block';
    pic_contact.src = 'pic/myQQ.jpg';
}

function controlMusic() {
    music_count += 1;
    if (music_count % 2 == 0) {
        music_icon.src = "pic/music_close.png";
        backgroundMusic.pause();
    } else {
        music_icon.src = "pic/music_open.png";
        backgroundMusic.play();
    }
}