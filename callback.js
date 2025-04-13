// Wait for DOM to load
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('access_token') || params.get('code'); // depending on your flow

    if (window.opener && token) {
        // Send the token (or success flag) back to the opener
        window.opener.postMessage({
            type: 'discord-auth-success',
            token: token
        }, '*');

        window.close(); // bye-bye popup ✨
    } else {
        // Something went wrong
        document.body.innerHTML = '<p>Failed to link Discord. Please try again.</p>';
    }
});
