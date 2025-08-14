const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navigation nav a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === entry.target.id) {
          link.classList.add("active");
        }
      });
    }
  });
}, { threshold: 0.6 }); // 60% visible to trigger

sections.forEach(section => observer.observe(section));
