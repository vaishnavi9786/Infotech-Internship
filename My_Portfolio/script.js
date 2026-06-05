document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const popup = document.createElement("div");

        popup.innerHTML = "✅ Your Message Sent Successfully!";

        popup.style.position = "fixed";
        popup.style.top = "20px";
        popup.style.right = "20px";
        popup.style.padding = "15px 25px";
        popup.style.background = "#28a745";
        popup.style.color = "#fff";
        popup.style.borderRadius = "10px";
        popup.style.fontSize = "16px";
        popup.style.fontWeight = "bold";
        popup.style.zIndex = "9999";
        popup.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";

        document.body.appendChild(popup);

        form.reset();

        setTimeout(() => {
            popup.remove();
            location.reload(); // Page Refresh
        }, 3000); // 3 seconds

    });

});