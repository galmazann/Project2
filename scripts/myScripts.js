document.addEventListener('DOMContentLoaded', () => {
    const fortunes = [
        "You will have a great day!",
        "An exciting opportunity is on the horizon.",
        "Good things are coming your way.",
        "You will find a hidden talent.",
        "Expect positive changes in your life.",
        "A pleasant surprise is waiting for you.",
        "Someone you know will bring you joy.",
        "You will achieve your goals soon.",
        "New beginnings are ahead.",
        "Happiness is within your reach."
    ];

    const button = document.getElementById('tell-fortune');
    const output = document.getElementById('fortune-output');

    button.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        output.textContent = fortunes[randomIndex];
    });
});
