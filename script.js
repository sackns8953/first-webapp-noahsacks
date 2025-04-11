// Add JavaScript code for your web site here and call it from index.html.
let shownHint = 0;

//Checks if the answer is correct or incorrect and proceeds to give an answer based on that
//Easy
document.getElementById("myBtn")?.addEventListener("click", () => {
    let input = document.getElementById("fortnite")?.value;
    console.log(input);
    if (input == "Jamal Musiala" || input == "Musiala") {
        if (shownHint == 0) {
            document.getElementById("myPara").innerHTML = "Correct!";
        } else {
            document.getElementById("myPara").innerHTML = "Correct, but did you really get it? 💔🙏🥀😭";
        }
    } else (
        document.getElementById("myPara").innerHTML = "Incorrect :("
    )
});

//Medium
document.getElementById("myBtn2")?.addEventListener("click", () => {
    let input2 = document.getElementById("fortnite2").value;
    console.log(input2);
    if (input2 == "Mario Balotelli" || input2 == "Balotelli") {
        if (shownHint == 0) {
            document.getElementById("myPara").innerHTML = "Correct!";
        } else {
            document.getElementById("myPara").innerHTML = "Correct, but did you really get it? 💔🙏🥀😭";
        }
    } else (
        document.getElementById("myPara").innerHTML = "Incorrect :("
    )
})

//Hard
document.getElementById("myBtn3")?.addEventListener("click", () => {
    let input3 = document.getElementById("fortnite3").value;
    console.log(input3);
    if (input3 == "Geovany Quenda" || input3 == "Quenda") {
        if (shownHint == 0) {
            document.getElementById("myPara").innerHTML = "Correct!";
        } else {
            document.getElementById("myPara").innerHTML = "Correct, but did you really get it? 💔🙏🥀😭";
        }
    } else (
        document.getElementById("myPara").innerHTML = "Incorrect :("
    )
})

//Displays a hint when the hint button is clicked
//Easy
document.getElementById("hintBtn1")?.addEventListener("click", () => {
    document.getElementById("Hint").innerHTML = "He is 21 years old.";
})

//Medium
document.getElementById("hintBtn2")?.addEventListener("click", () => {
    document.getElementById("Hint").innerHTML = "He famously played for Man City and assisted Aguero's title winning goal in 2012.";
})

//Hard
document.getElementById("hintBtn3")?.addEventListener("click", () => {
    document.getElementById("Hint").innerHTML = "He is 17 years old and will sign for Chelsea in 2026.";
})

//Shows the answer if you don't get it; changes the correct text if you cheated
//Easy
document.getElementById("showAnswerBtn1")?.addEventListener("click", () => {
    document.getElementById("Answer").innerHTML = "The answer is Jamal Musiala.";
    shownHint = 1;
})

//Medium
document.getElementById("showAnswerBtn2")?.addEventListener("click", () => {
    document.getElementById("Answer").innerHTML = "The answer is Mario Balotelli.";
    shownHint = 1;
})

//Hard
document.getElementById("showAnswerBtn3")?.addEventListener("click", () => {
    document.getElementById("Answer").innerHTML = "The answer is Geovany Quenda.";
    shownHint = 1;
})