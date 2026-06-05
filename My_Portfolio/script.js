document.addEventListener("DOMContentLoaded", function(){

    const form =
    document.getElementById("contactForm");

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("✅ Message Sent Successfully!");

        form.reset();

        setTimeout(function(){

            location.reload();

        },1000);

    });

});