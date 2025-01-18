const text = ["Backend Engineer", "Data Analyst", "Game Dev Intern",];
let currentIndex = 0

function changeText() {
    const textElement = document.getElementById("text");

    textElement.textContent = texts[currentIndex];

    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(changeText, 3000);