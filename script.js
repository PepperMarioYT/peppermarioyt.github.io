document.addEventListener('DOMContentLoaded', () => {
    const amaForm = document.getElementById('ama-form');
    const linkBtn = document.getElementById('link-discord');
    const discordLinkWrapper = document.getElementById('discord-link-wrapper');

    // base64 decode the link you gave
    const discordOAuthLink = atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9vYXV0aDIvYXV0aG9yaXplP2NsaWVudF9pZD0xMzYwOTkzNDE3Nzk4MjIyMDQ1JnJlc3BvbnNlX3R5cGU9dG9rZW4mcmVkaXJlY3RfdXJpPWh0dHBzJTNBJTJGJTJGcGVwcGVybWFyaW95dC5naXRodWIuaW8mc2NvcGU9aWRlbnRpZnkK");

    // Check if Discord is already linked (pretend using localStorage)
    if (localStorage.getItem("discordLinked") === "true") {
        amaForm.style.display = "block";
        discordLinkWrapper.style.display = "none";
    }

    linkBtn.addEventListener('click', () => {
        // You'd normally handle the redirect + token server-side
        // Simulating user linking with a redirect for now
        window.location.href = discordOAuthLink;
        localStorage.setItem("discordLinked", "true");
    });

    amaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = amaForm.querySelector('input').value;
        const responseBox = document.getElementById('ama-response');
        responseBox.textContent = `Your question has been sent: "${input}" 🤖`;
    });
});
