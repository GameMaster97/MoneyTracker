console.log("Hello gamer!")
localStorage.setItem("name", "Person");

// function
var typeEffect = (element, textToAdd, spacingTimeMS, endingFunction) => {
    // Variables to help us
    textToAdd = textToAdd.split("");
    const originalLen = textToAdd.length;
    let len = 0;
    let currentText = element.innerHTML;

    // Do like the type effect
    const intervalId = setInterval(() => {
        currentText = currentText + textToAdd[len];
        element.innerHTML = currentText + "|";

        console.log(`Status: ${len} // ${originalLen}`);
    
        len++;
        if (len === originalLen) {
            element.innerHTML = currentText; 
            clearInterval(intervalId);
            if (endingFunction !== undefined) {
                endingFunction()
            }
        }
    }, spacingTimeMS);
}

const welcomeText = document.getElementById("welcome-text");
const fillerText = [
    "Ready to see your metrics?",
    "Don't waste all your money!",
    "Always keep an eye on your spending!",
    "Cancel useless subscriptions, please.",
    `My my, ${localStorage.getItem("name") || "Person"} is a wonderful name!`,
    "How's your side hustle going?",
    "Feels good to be productive, huh?",
    "He sacs, THE ROOOOOOOOK!",
    "Yeet the knight to f6, forking the queen and the rook.",
    "They say e=mc<sup>2</sup>, so does that mean e=m(a<sup>2</sup>+b<sup>2</sup>)?",
    "Game is.. something that's not game?",
    "It is 7:43PM and I'm writing the stupidest splash texts.",
    "Side hustles can sure be helpful.",
    "A high-interest savings account works wonders.",
    "Don't invest in TO-DA-MOON!",
    "The average return of the S&P 500 is 8-10% annually.",
    "You wouldn't believe how much water AI Data Centers use.",
    "Rammageddon - A huge price surge of ram (bad), thanks to AI!",
    "So you're telling me I pay the same price for less monthly robux?",
];
fillerText.push([`There is a ${Math.round(100 / (fillerText.length+1)).toString()}% chance that you will see this rare message!`])

typeEffect(welcomeText, `Welcome back, ${localStorage.getItem("name") || "Person"}.`, 100, () => {
    setTimeout(() => {
        welcomeText.innerHTML += " ";
        typeEffect(welcomeText, fillerText[Math.floor(Math.random() * fillerText.length)], 75);
    }, 400);
});