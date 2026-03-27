// This will store the user's answers
const userAnswers = {};

// Select all question blocks
const questionBlocks = document.querySelectorAll(".question-block");

// Handle clicking answer buttons
questionBlocks.forEach((block, index) => {
    const buttons = block.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove highlight from all buttons in this question
            buttons.forEach(btn => btn.classList.remove("selected"));

            // Highlight the clicked button
            button.classList.add("selected");

            // Save the answer
            const questionId = `q${index + 1}`;
            userAnswers[questionId] = button.dataset.answer;

            console.log(userAnswers); // shows clicks are working
        });
    });
});


// Result button 
document.getElementById("show-result").addEventListener("click", () => {
    console.log("Result button clicked"); // ✅ FIXED

    let score = { A: 0, B: 0, C: 0, D: 0 };

    // Count answers
    Object.values(userAnswers).forEach(ans => {
        if (score[ans] !== undefined) {   // ✅ ADDED safety check
            score[ans]++;
        }
    });

    // Find highest score
    let maxAnswer = "A";
    for (let key in score) {
        if (score[key] > score[maxAnswer]) {
            maxAnswer = key;
        }
    }

    // Decide result
    let resultText = "";

    if (maxAnswer === "A") {
        resultText = "You're like The Weeknd (chill, mysterious, smooth)";
    } 
    else if (maxAnswer === "B") {
        resultText = "You're like Drake (confident, energetic, popular)";
    } 
    else if (maxAnswer === "C") {
        resultText = "You're like Doja Cat (creative, bold, fun)";
    } 
    else {
        resultText = "You're like Post Malone (laid-back, unique, vibey)";
    }

    // Show result on screen
    document.getElementById("result-container").style.display = "block";
    document.getElementById("result-text").textContent = resultText;
});
