const draggableElement = document.getElementsByClassName("box-message-grag")[0];
const draggableElement2 = document.getElementsByClassName("box-message-grag-pic")[0];

let offsetX, offsetY;

draggableElement.addEventListener('mousedown', (e) => {
    e.preventDefault();
    offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
    offsetY = e.clientY - draggableElement.getBoundingClientRect().top;

    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', handleDrag);
    });
});

function handleDrag(e) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    draggableElement.style.left = `${x}px`;
    draggableElement.style.top = `${y}px`;
}

let offsetX2, offsetY2;

draggableElement2.addEventListener('mousedown', (e) => {
    e.preventDefault();
    offsetX2 = e.clientX - draggableElement2.getBoundingClientRect().left;
    offsetY2 = e.clientY - draggableElement2.getBoundingClientRect().top;

    document.addEventListener('mousemove', handleDrag2);
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', handleDrag2);
    });
});

function handleDrag2(e) {
    const x = e.clientX - offsetX2;
    const y = e.clientY - offsetY2;

    draggableElement2.style.left = `${x}px`;  // Fix variable names here
    draggableElement2.style.top = `${y}px`;   // Fix variable names here
}

function closeWindow() {
    let window = document.getElementsByClassName("box-message-grag")[0];
    window.style.display = "none";
}

function closeWindow2() {
    let window = document.getElementsByClassName("box-message-grag-pic")[0];
    window.style.display = "none";
}

function openIntro() {
    window.open("intro.html", "_self");
}