const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const retryBtn = document.getElementById('retryBtn');
const quizSection = document.getElementById('quiz-section');
const successSection = document.getElementById('success-section');
const sadSection = document.getElementById('sad-section');

let fontSize = 18;
let clickCount = 0;

const messages = [
    "Sicura??",
    "Dodona, pensaci bene...",
    "Riprova!",
    "Ma come No?",
    "Con chi magero' il mc",
    "Ultima chance!",
    "OK, BASTA. 😡"
];

noBtn.addEventListener('click', () => 
{
    clickCount++;
    
    if (clickCount >= 7) 
    {
        quizSection.classList.add('hidden');
        sadSection.classList.remove('hidden');
    } 
    else 
    {
        fontSize += 35;
        yesBtn.style.fontSize = `${fontSize}px`;
        yesBtn.style.padding = `${fontSize/2}px ${fontSize}px`;
        noBtn.innerText = messages[Math.min(clickCount - 1, messages.length - 1)];
    }
});

yesBtn.addEventListener('click', () => 
{
    quizSection.classList.add('hidden');
    sadSection.classList.add('hidden');
    successSection.classList.remove('hidden');
});

retryBtn.addEventListener('click', () => 
{
    clickCount = 0;
    fontSize = 18;
    yesBtn.style.fontSize = `18px`;
    yesBtn.style.padding = `15px 30px`;
    noBtn.innerText = "No";
    
    sadSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
});