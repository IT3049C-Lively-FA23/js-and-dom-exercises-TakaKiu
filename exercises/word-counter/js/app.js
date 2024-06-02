// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textarea = document.querySelector("#text");
const statsSection = document.querySelector("#stats");

// 🤖: Create an Event Listener on textarea input
textarea.addEventListener("input", function() {
    // Get the text content of the textarea
    const text = textarea.value;

    // 🤖: Calculate the number of words (using split method) and characters
    const words = text.trim().split(/\s+/).filter(word => word !== "").length;
    const characters = text.length;

    // Update the stats section with the number of words and characters
    statsSection.textContent = `Words: ${words}, Characters: ${characters}`;
});
