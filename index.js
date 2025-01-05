// Initialize EmailJS
emailjs.init("3fs2TNI-xyG3II10F"); // Replace with your Public Key

// Handle form submission
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Get form data
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Service ID and Template ID
    const serviceID = "e28chdq";
    const templateID = "4Itfb48";

    // Send email via EmailJS
    emailjs
        .send(serviceID, templateID, params)
        .then((response) => {
            alert("Thank you for contacting Maheera Salon & Makeup! We will get back to you soon.");
            console.log("SUCCESS!", response.status, response.text);

            // Clear the form after submission
            document.querySelector("form").reset();
        })
        .catch((error) => {
            alert("Failed to send your message. Please try again.");
            console.error("FAILED...", error);
        });
});

