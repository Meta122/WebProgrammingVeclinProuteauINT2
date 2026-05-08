console.log("I am the console!");

// Hide the quiz section on page load, so it appears when the user starts the quiz
document.addEventListener("DOMContentLoaded", function() {
    var quizElements = document.getElementsByClassName("quiz");
    for (var i = 0; i < quizElements.length; i++) {
        quizElements[i].style.display = "none";
    }
});

function quizAlert() {
    alert("You're about to start the quiz!");
    quizConfirm();
}

function quizConfirm() {
    var name = document.getElementById("name").value.trim();
    var surname = document.getElementById("surname").value.trim();
    var birth = document.getElementById("birth").value;
    var mail = document.getElementById("mail").value.trim();
    var status = document.getElementById("status").value;

    if (!name || !surname || !birth || !mail || !status) {
        alert("Please fill in all fields!");
        return;
    }

    var res = confirm("Are you sure you want to continue?");
    if (res == true) {
        
        var quizElements = document.getElementsByClassName("quiz");
        for (var i = 0; i < quizElements.length; i++) {
            quizElements[i].style.display = "block";
        }
        
        // Hide user info fieldset
        document.getElementById("information").style.display = "none";
        
    } else {
        alert("You will be redirected to the home page!");
        window.location.href = "index.html"; 
    }
}

var attemptNumber = 0;

function submitQuiz() {
    var score = 0;

    // Q1 Evaluation
    var q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === "a") {
        score += 2; 
    }

    // Q2 Evaluation
    var q2a = document.getElementById("q2a").checked; 
    var q2b = document.getElementById("q2b").checked; 
    var q2c = document.getElementById("q2c").checked; 
    
    if (q2a) score += 1;
    if (q2b) score += 1;
    if (q2c) score -= 1;

    // Q3 Evaluation
    var q3Answer = document.getElementById("q3").value.toLowerCase();
    var osKeywords = ["windows", "linux", "macos", "mac", "android", "ios", "unix", "ubuntu"];
    for (var i = 0; i < osKeywords.length; i++) {
        if (q3Answer.includes(osKeywords[i])) {
            score += 2;
            break; 
        }
    }

    // Q4 Evaluation
    var q4Answer = document.querySelector('input[name="q4"]:checked');
    if (q4Answer && q4Answer.value === "a") {
        score += 2; 
    }

    // Q5 Evaluation
    var q5Answer = document.querySelector('input[name="q5"]:checked');
    if (q5Answer && q5Answer.value === "true") {
        score += 2; 
    }

    // Prevent negative scores
    if (score < 0) score = 0;

    attemptNumber++;

    // Create results table directly if it doesn't exist 
    var tableBody = document.querySelector("#results tbody");
    if (!tableBody) {
        var resultsTable = document.createElement("table");
        resultsTable.id = "results";
        resultsTable.innerHTML = `
            <thead>
                <tr>
                    <th>Attempt</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        document.querySelector(".box").appendChild(resultsTable); 
        tableBody = resultsTable.querySelector("tbody");
    }

    // Add row to results table with attempt number and score
    var newRow = tableBody.insertRow();
    var cellAttempt = newRow.insertCell(0);
    var cellScore = newRow.insertCell(1);

    cellAttempt.textContent = "Attempt " + attemptNumber;
    cellScore.textContent = score + " / 10 points";

    // Reset all fields
    var allRadios = document.querySelectorAll('input[type="radio"]');
    for (var j = 0; j < allRadios.length; j++) {
        allRadios[j].checked = false;
    }
    
    var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var k = 0; k < allCheckboxes.length; k++) {
        allCheckboxes[k].checked = false;
    }
    
    document.getElementById("q3").value = "";

    // Check attempt limits
    if (attemptNumber >= 3) {
        var submitBtn = document.querySelector('input[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.value = "No attempt left";
        submitBtn.style.backgroundColor = "gray";
        submitBtn.style.cursor = "not-allowed";
        alert("You have reached the maximum number of attempts.");
    }
}