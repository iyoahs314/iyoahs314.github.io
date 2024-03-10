const hidden_window = document.querySelector('.hidden-window');
const hidden_window_message = document.querySelector('.hidden-window-message');
const pic_contact = document.querySelector('.hidden-window .hidden-box .pic-contact');
const music_icon = document.querySelector(".music-and-contact .music-switch .music-icon");
const backgroundMusic = document.getElementById('backgroundMusic');
let music_count = 0;
const messageInput = document.querySelector('.chat-container .input-container .message-input');
const charactersPerLine = 20;

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

displayUserMessage('pic/iyoahs.jpg', "你好，我是iyoash，你可以在下面的文本框里输入你想留言的内容。(目前未配置后端，留言无法正常接收，功能敬请期待)", true);

function sendMessage() {
    var message = messageInput.value;
    if (isValidMessage(message)) {
        message = insertNewlines(message, charactersPerLine);
        displayUserMessage('pic/user.png', message, false);

        setTimeout(function() {
            displayUserMessage('pic/iyoahs.jpg', "留言已收到。", true);
        }, 2000);
    }
}

function isValidMessage(message) {
    return message.trim() !== '';
}

function insertNewlines(str, charactersPerLine) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        result += str[i];
        if ((i + 1) % charactersPerLine === 0) {
            result += '\n';
        }
    }
    return result;
}

function displayUserMessage(avatarPath, message, isUser1) {
    var chatMessages = document.querySelector('.chat-container .chat-messages');
    var newMessage = document.createElement('div');
    newMessage.classList.add(isUser1 ? 'message1' : 'message2');

    var userAvatar = document.createElement('img');
    userAvatar.src = avatarPath;

    var userMessage = document.createElement('div');
    userMessage.textContent = message;

    if (isUser1) {
        newMessage.appendChild(userAvatar);
        newMessage.appendChild(userMessage);
        userMessage.classList.add('message-text-one');
    } else {
        newMessage.appendChild(userAvatar);
        newMessage.appendChild(userMessage);
        userMessage.classList.add('message-text-two');
    }

    chatMessages.appendChild(newMessage);
    setInputAndScroll(chatMessages);
}

function setInputAndScroll(chatMessages) {
    var messageInput = document.querySelector('.chat-container .input-container .message-input');
    messageInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function openLeaveMessage() {
    hidden_window_message.style.display = 'block';
}

function closeLeaveMessage() {
    hidden_window_message.style.display = 'none';
}