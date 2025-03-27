// script.js
document.addEventListener('DOMContentLoaded', () => {
    const amaForm = document.getElementById('ama-form');
    const amaQuestion = document.getElementById('ama-question');
    const amaResponse = document.getElementById('ama-response');
    
    // Blast HL2 song on load
    const sound = new Howl({
        src: ['HL2_Song29.mp3'],
        autoplay: true,
        loop: true,
        volume: 0.5
    });

    // Handle AMA Form submission
    amaForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const question = amaQuestion.value.trim();
        if (question === '') {
            alert("ok, guessing your gonna draw something")
        }
        // Create the mailto link with the question as part of the email body
        const mailtoLink = `mailto:peppermarioyt@gmail.com?subject=Github%20Page%20-%20AMA&body=Question:%20${encodeURIComponent(question)}`;
        window.location.href = mailtoLink;  // Trigger the email client with the pre-filled details
        amaQuestion.value = '';  // Clear input after submission
    });
});
