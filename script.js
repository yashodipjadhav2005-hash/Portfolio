const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".menu-toggle");

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });


// Succesfull MSG And Submit form to Online Site after submit : 
 const form = document.querySelector(".contact-form");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                successMessage.style.display = "block";
                form.reset();

                setTimeout(() => {
                    successMessage.style.display = "none";
                }, 5000);
            } else {
                alert("Oops! Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Network error. Please try again later.");
        }
    });

// Navigation using navigation links : 
 const navLinks = document.querySelectorAll('.sidebar-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offset = 20; // adjust if needed
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

// Loader animation :
window.addEventListener("load", () => {
        const loader = document.getElementById("loader");

        setTimeout(() => {
            loader.classList.add("hide");
        }, 600); // smooth delay
    });

// 
 const sidebar2 = document.querySelector('.sidebar');
    const navLinks2 = document.querySelectorAll('.sidebar-links a');

    navLinks2.forEach(link => {
        link.addEventListener('click', () => {
            // Close menu after click (mobile only)
            sidebar2.classList.remove('active');
        });
    });

const ctaBtn = document.querySelector('.sidebar-cta a');

if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
}
