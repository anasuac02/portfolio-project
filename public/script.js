console.log("JS Loaded");

document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("status");
    const sendBtn = document.getElementById("sendBtn");

    // Reset status
    status.innerText = "";
    status.style.color = "red";

    // Basic validation
    if (name.length < 2) {
        status.innerText = "Name must be at least 2 characters.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        status.innerText = "Enter a valid email address.";
        return;
    }

    if (message.length < 5) {
        status.innerText = "Message should be at least 5 characters.";
        return;
    }

    // Disable button to prevent double-click
    sendBtn.disabled = true;
    sendBtn.innerText = "Sending...";

    try {
        const res = await fetch("/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        const result = await res.text();

        status.style.color = "green";
        status.innerText = result;

        // Reset fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

    } catch (err) {
        status.style.color = "red";
        status.innerText = "Something went wrong. Try again.";
        console.error(err);
    }

    // Re-enable button
    sendBtn.disabled = false;
    sendBtn.innerText = "Send";
});