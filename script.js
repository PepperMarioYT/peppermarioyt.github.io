// script.js
document.addEventListener('DOMContentLoaded', () => {
    const amaForm = document.getElementById('ama-form');
    const amaQuestion = document.getElementById('ama-question');
    const amaResponse = document.getElementById('ama-response');

    // Handle AMA Form submission
    amaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("The AMA revamp is being worked on, in the meantime DM the question to me");
    });
});
