document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const alertContainer = document.getElementById("alertContainer");

            alertContainer.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
                    Email sent successfully!
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `;
        });
    }

});