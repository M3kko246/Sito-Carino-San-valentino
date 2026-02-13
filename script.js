const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const retryBtn = document.getElementById('retryBtn');

const quizSection = document.getElementById('quiz-section');
const successSection = document.getElementById('success-section');
const sadSection = document.getElementById('sad-section');

let clickCount = 0;
let currentFontSize = 1.1;

const messages = [
    "Sicura??",
    "Pookie, pensaci bene...",
    "Riprova!",
    "Ma come No?",
    "Stai spezzando il mio cuore",
    "Ultima chance!",
    "OK, BASTA. 😡"
];

noBtn.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount >= 7) {
        quizSection.classList.add('hidden');
        sadSection.classList.remove('hidden');
    } else {
        currentFontSize += 0.8; 
        yesBtn.style.fontSize = `${currentFontSize}rem`;
        
        let paddingValue = 15 + (clickCount * 10);
        yesBtn.style.padding = `${paddingValue}px ${paddingValue * 1.5}px`;
        
        noBtn.innerText = messages[clickCount - 1];
    }
});

yesBtn.addEventListener('click', () => {
    quizSection.classList.add('hidden');
    sadSection.classList.add('hidden');
    successSection.classList.remove('hidden');
});

retryBtn.addEventListener('click', () => {
    clickCount = 0;
    currentFontSize = 1.1;
    
    yesBtn.style.fontSize = `1.1rem`;
    yesBtn.style.padding = `15px 30px`;
    noBtn.innerText = "No";
    
    sadSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
});
