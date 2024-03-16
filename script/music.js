var audio = document.getElementById("myAudio");
var progressBar = document.getElementById("progress");
var play_button = document.querySelector(".play-button");
var cd_image = document.querySelector('.cd-image');
var music_name = document.querySelector('.music-name');
var music_artist = document.querySelector('.music-artist');
var music_list = ['yorushika_藍二乘', 'yorushika_左右盲', 'yorushika_爆弹魔', 'zutomayo_Ham'];
var music_artist_dist = {'yorushika':"ヨルシカ","zutomayo":"ずっと真夜中でいいのに。"};
var time = document.querySelector(".time-sound .time");
var currentMusicIndex = 0;

function playPause() {
    if (audio.paused) {
        audio.play();
        updateProgressBar();
        play_button.classList.remove("play-button");
        play_button.classList.add("pause-button");
    } else {
        audio.pause();
        play_button.classList.remove("pause-button");
        play_button.classList.add("play-button");
    }
}

function updateProgressBar() {
    var percentage = (audio.currentTime / audio.duration) * 100;
    time.innerHTML = toMin(audio.currentTime) + '/' + toMin(audio.duration);
    progressBar.style.width = percentage + '%';
    if (!audio.paused) {
        requestAnimationFrame(updateProgressBar);
    }
    if (audio.currentTime === audio.duration) {
        audio.currentTime = 0;
        audio,play;
    }
    if (audio.currentTime === 0) {
        time.innerHTML = "00:00/00:00";
    }
}

function changeProgress(event) {
    var rect = document.querySelector('#progressBar').getBoundingClientRect();
    var newProgress = (event.pageX - rect.left - window.scrollX) / (rect.right - rect.left);
    audio.currentTime = audio.duration * newProgress;
}


function toNextMusic() {
    var wasPaused = audio.paused; // 记录当前音乐的播放状态
    currentMusicIndex = (currentMusicIndex + 1) % music_list.length;
    audio.src = "../music/" + music_list[currentMusicIndex] + ".mp3";
    music_artist.innerHTML = music_artist_dist[music_list[currentMusicIndex].split('_')[0]];
    music_name.innerHTML = music_list[currentMusicIndex].split('_')[1];
    cd_image.style.backgroundImage = "url('../pic/" + music_list[currentMusicIndex].split('_')[0] + "_logo.jpg')";
    if (!wasPaused) { // 如果前一个曲子是播放状态，切换的下一个是播放
        audio.play();
    }
}

function toPrevMusic() {
    var wasPaused = audio.paused;
    currentMusicIndex = (currentMusicIndex - 1 + music_list.length) % music_list.length;
    audio.src = "../music/" + music_list[currentMusicIndex] + ".mp3";
    music_artist.innerHTML = music_artist_dist[music_list[currentMusicIndex].split('_')[0]];
    music_name.innerHTML = music_list[currentMusicIndex].split('_')[1];
    cd_image.style.backgroundImage = "url('../pic/" + music_list[currentMusicIndex].split('_')[0] + "_logo.jpg')";
    if (!wasPaused) {
        audio.play();
    }
}

function setVolume(volume) {
    audio.volume = volume;
}

function toMin(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);
    
    // 添加前导零
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }

    return "0" + minutes + ":" + remainingSeconds;
}

function backHome() {
    window.history.back();
}

audio.addEventListener('timeupdate', updateProgressBar);