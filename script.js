document.addEventListener('DOMContentLoaded', () => {
    const amaForm = document.getElementById('ama-form');

    amaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("The AMA revamp is being worked on, in the meantime DM the question to me");
    });
});
