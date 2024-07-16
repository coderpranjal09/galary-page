// loyalty_test.js

// Ask the user for the number of dates they've been in touch
const noOfDates = parseInt(prompt("Welcome to the 5/5 Loyalty Test! Please enter the number of date when we first time text you:"));

if (noOfDates === 11) {
    // Ask another question
    const jeeMarks = parseInt(prompt("What is my total positive JEE Advanced marks?"));

    if (jeeMarks === 102) {
        // Correct answers: Show success message and redirect
        alert("Congratulations! You passed our loyalty test.");
        window.location.href = "passed.html"; // Replace with your desired URL
    } else {
        // Incorrect JEE marks: Show failure message and redirect
        alert("Kya be, ab ruk tu! You failed our loyalty test. Please try again later.");
        window.location.href = "failed.html"; // Replace with your desired URL
    }
} else {
    // Incorrect number of dates: Show failure message and redirect
    alert("Kya be, ab ruk tu! You failed our loyalty test. Please try again later.");
    window.location.href = "failed.html"; // Replace with your desired URL
}
