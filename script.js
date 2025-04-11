// Add JavaScript code for your web site here and call it from index.html.
document.getElementById("myBtn")?.addEventListener("click", () => {
    let input = document.getElementById("fortnite")?.value;
    console.log(input);
    if(input == "Jamal Musiala" || input == "Musiala"){
        document.getElementById("myPara").innerHTML = "Correct!"
    } else(
        document.getElementById("myPara").innerHTML = "Incorrect :("
    )
});


document.getElementById("myBtn2")?.addEventListener("click", () => {
    let input2 = document.getElementById("fortnite2").value;
    console.log(input2);
    if(input2 == "Mario Balotelli" || input2 == "Balotelli"){
        document.getElementById("myPara").innerHTML = "Correct!"
    } else(
        document.getElementById("myPara").innerHTML = "Incorrect :("
    )
});

document.getElementById("myBtn3")?.addEventListener("click", () => {
    let input3 = document.getElementById("fortnite3").value;
    console.log(input3);
    if(input3 == "Geovany Quenda" || input3 == "Quenda"){
        document.getElementById("myPara").innerHTML = "Correct!"
    } else(
        document.getElementById("myPara").innerHTML = "Incorrect :("
    )
});

document.getElementById("hintBtn1")?.addEventListener("click", () => {
    document.getElementById("Hint").innerHTML = "He is 21 years old."
})

document.getElementById("hintBtn2")?.addEventListener("click", () => {
    document.getElementById("Hint").innerHTML = "He famously played for Man City and assisted Aguero's title winning goal in 2012."
})
document.getElementById("hintBtn3")?.addEventListener("click", () => {
    document.getElementById("Hint").innerHTML = "He is 17 years old and will sign for Chelsea in 2026."
})
