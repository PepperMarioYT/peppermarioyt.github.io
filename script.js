document.addEventListener('DOMContentLoaded', () => {
    const amaForm = document.getElementById('ama-form');
    const linkBtn = document.getElementById('link-discord');
    const unlinkBtn = document.getElementById('unlink-discord');
    const discordLinkWrapper = document.getElementById('discord-link-wrapper');
    const unlinkMsg = document.getElementById('unlink-msg');


    function updateUI(linked) {
        if (linked) {
            amaForm.style.display = "block";
            linkBtn.style.display = "none";
            unlinkBtn.style.display = "inline-block";
            unlinkMsg.textContent = "";
        } else {
            amaForm.style.display = "none";
            linkBtn.style.display = "inline-block";
            unlinkBtn.style.display = "none";
            unlinkMsg.textContent = "You are not linked. 💔";
        }
    }

    if (localStorage.getItem("discordLinked") === "true") {
        updateUI(true);
    } else {
        updateUI(false);
    }

    linkBtn.addEventListener('click', () => {
        linkBtn.addEventListener('click', () => {
            const popup = window.open(
                atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9vYXV0aDIvYXV0aG9yaXplP2NsaWVudF9pZD0xMzYwOTkzNDE3Nzk4MjIyMDQ1JnJlc3BvbnNlX3R5cGU9Y29kZSZyZWRpcmVjdF91cmk9aHR0cHMlM0ElMkYlMkZwZXBwZXJtYXJpb3l0LmdpdGh1Yi5pbyUyRmNhbGxiYWNrLmh0bWwmc2NvcGU9aWRlbnRpZnkrZ3VpbGRzLmNoYW5uZWxzLnJlYWQ="),
                'discordLinkPopup',
                'width=500,height=600'
            );
        });        
    });

    unlinkBtn.addEventListener('click', () => {
        localStorage.removeItem("discordLinked");
        updateUI(false);
    });

    amaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = amaForm.querySelector('input').value;
        const responseBox = document.getElementById('ama-response');
        responseBox.textContent = `Your question has been sent: "${input}" 🤖`;
    });
});
