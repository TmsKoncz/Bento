document.addEventListener("DOMContentLoaded", function () {
    const nameModal = document.getElementById("nameModal");
    const nameInput = document.getElementById("nameInput");
    const saveNameButton = document.getElementById("saveNameButton");
    const greetings = document.getElementById("greetings");

    // Check if name is already stored in localStorage
    let storedName = localStorage.getItem("userName");

    if (!storedName) {
        // Show the modal if name is not set
        nameModal.style.display = "flex";

        // Save name on button click
        saveNameButton.addEventListener("click", function () {
            const userName = nameInput.value;
            if (userName) {
                // Save name to localStorage
                localStorage.setItem("userName", userName);
                nameModal.style.display = "none";
                displayGreeting(userName);
            }
        });
    } else {
        // If name is already stored, display the greeting
        displayGreeting(storedName);
    }

    // Function to display the appropriate greeting
    function displayGreeting(name) {
        const hours = new Date().getHours();
        let greetingText = "";

        if (hours < 12) {
            greetingText = `${CONFIG.greetingMorning} ${name}`;
        } else if (hours < 18) {
            greetingText = `${CONFIG.greetingAfternoon} ${name}`;
        } else if (hours < 22) {
            greetingText = `${CONFIG.greetingEvening} ${name}`;
        } else {
            greetingText = `${CONFIG.greetingNight} ${name}`;
        }

        greetings.textContent = greetingText;
    }
});
