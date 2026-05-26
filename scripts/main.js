console.log("Hello gamer!")
localStorage.setItem("name", "Person");

// function
var typeEffect = (element, newText, spacingTimeMS, endingFunction) => {
    // Variables to help us
    newText = newText.split("");
    const originalLen = newText.length;
    let len = 0;
    let currentText = "";

    // Do like the type effect
    const intervalId = setInterval(() => {
        currentText = currentText + newText[len];
        element.textContent = currentText + "|";

        console.log(`Status: ${len} // ${originalLen}`);
    
        len++;
        if (len === originalLen) {
            element.textContent = currentText; 
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
    `There is a ${Math.round(100 / fillerText.length).toString()}% chance that you will see this rare message!`,
    `My my, ${localStorage.getItem("name") || "Person"} is a wonderful name!`,
    "How's your side hustle going?"
];
typeEffect(welcomeText, `Welcome back, ${localStorage.getItem("name") || "Person"}.`, 100, () => {
    setTimeout(() => {
        typeEffect(welcomeText, fillerText[Math.floor(Math.random() * fillerText.length)], 75);
    }, 400);
});