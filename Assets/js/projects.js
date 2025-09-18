// Project data
  const projectData = {
    imaara: {
      title: "The Imaara Mall",
      img: "Assets/img/imaara.webp",
      tech: "Built with HTML, CSS, JavaScript, PHP, MySql",
      link: "https://theimaara.co.ke"
    },
    epione: {
      title: "Epione-health",
      img: "Assets/img/epione.png",
      tech: "Built with HTML, CSS, JavaScript, Bootstrap",
      link: "https://epione-health.com"
    },
    abok: {
      title: "Abok Adventures & Safaris",
      img: "Assets/img/abok.png",
      tech: "Built with PHP, MySQL, Bootstrap, EmailJs, Google Translate",
      link: "https://abokadventures.com"
    },
    herox: {
      title: "Hero-X",
      img: "Assets/img/hero-x.png",
      tech: "Built with JavaScript, Express.js, EJS, Ajax",
      link: "https://github.com/Niarb144/heroX-v2"
    },
    maze: {
      title: "Maze-Crawler",
      img: "images/maze.jpg",
      tech: "Built with C#, Unity",
      link: "https://github.com/Niarb144/maze-crawler"
    },
    task: {
      title: "Task Manager",
      img: "images/task.jpg",
      tech: "Built with PHP, MySQL, Bootstrap",
      link: "https://github.com/Niarb144/task_manager"
    }
  };

  // Modal Elements
  const modal = document.getElementById("projectModal");
  const modalImg = document.getElementById("projectImage");
  const modalTitle = document.getElementById("projectTitle");
  const modalTech = document.getElementById("projectTech");
  const modalLink = document.getElementById("projectLink");
  const closeBtn = document.querySelector(".close");

  // Open modal on link click
  document.querySelectorAll(".project-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const key = link.getAttribute("data-project");
      const data = projectData[key];
      if (data) {
        modalImg.src = data.img;
        modalTitle.textContent = data.title;
        modalTech.textContent = data.tech;
        modalLink.href = data.link || "#";
        modal.style.display = "flex";
      }
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
