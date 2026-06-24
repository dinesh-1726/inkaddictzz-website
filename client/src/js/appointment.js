document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("appointmentForm");

    if(!form) return;

    form.addEventListener("submit", function(event){

        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const tattooType = document.getElementById("tattooType").value;
        const date = document.getElementById("date").value;
        const message = document.getElementById("message").value;

        const whatsappMessage =
`🔥 New Tattoo Appointment Request 🔥

Name: ${name}
Phone: ${phone}
Email: ${email}

Tattoo Type: ${tattooType}

Preferred Date: ${date}

Tattoo Idea:
${message}`;

        const whatsappNumber = "919597084647";

        const whatsappURL =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

    });

});