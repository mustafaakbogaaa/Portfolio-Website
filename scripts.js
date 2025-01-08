document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website is ready!");

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, 
                    behavior: "smooth"
                });
            }
        });
    });

  
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.addEventListener("mouseenter", () => {
            project.style.transform = "translateY(-5px)";
        });
        project.addEventListener("mouseleave", () => {
            project.style.transform = "translateY(0)";
        });
    });
});