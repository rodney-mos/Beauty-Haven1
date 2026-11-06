
// BEAUTY HAVEN SERVICE BOOKING

function bookService(serviceName) {

    const confirmation = confirm(
        "Welcome to Beauty Haven!\n\n" +
        "Your selected service is: " + serviceName +
        "\n\nWould you like to continue to booking?"
    );

    if (confirmation) {

        // Save selected service
        localStorage.setItem("selectedService", serviceName);

        // Move customer to booking section
        window.location.href = "#contact";

    }

}

// BEAUTY HAVEN WHATSAPP BOOKING

// Replace this with the salon's real WhatsApp number.
// Use country code 254, without the + sign or spaces.
const salonWhatsAppNumber = "254706317113";

// Allow service buttons to preselect a service.
function bookService(serviceName) {
    const serviceField = document.getElementById("selectedService");

    if (serviceField) {
        serviceField.value = serviceName;
    }

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

// Handle the booking form.
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const service = document.getElementById("selectedService").value;
        const date = document.getElementById("appointmentDate").value;
        const time = document.getElementById("appointmentTime").value;
        const message = document.getElementById("bookingMessage").value.trim();

        const bookingDetails =
            "Hello Beauty Haven! I would like to request an appointment.\n\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Service: " + service + "\n" +
            "Preferred date: " + date + "\n" +
            "Preferred time: " + time + "\n" +
            "Additional details: " + (message || "None");

        const whatsappLink =
            "https://wa.me/" + salonWhatsAppNumber +
            "?text=" + encodeURIComponent(bookingDetails);

        window.open(whatsappLink, "_blank");
    });
}

// Prevent customers from selecting a date in the past.
const dateField = document.getElementById("appointmentDate");

if (dateField) {
    const today = new Date();
    const localToday = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    dateField.min = localToday;
}
// Automatically update the copyright year
const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
// MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function() {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });

    });

}
