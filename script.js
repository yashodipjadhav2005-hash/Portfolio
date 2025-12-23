const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".menu-toggle");

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });


const skillsSection = document.querySelector('#skills');
    const progressBars = document.querySelectorAll('.skill-progress');

    const skillObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressBars.forEach(bar => {
                        bar.style.width = bar.style.getPropertyValue('--progress');
                    });
                    observer.unobserve(entry.target); // animate only once
                }
            });
        },
        { threshold: 0.4 }
    );

    skillObserver.observe(skillsSection);