window.addEventListener("DOMContentLoaded", () => {
  const text = "Fullstack.Developer";
  const typewriter = document.getElementById("typewriter");
  let i = 0;

  function type() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100); // typing speed
    } else {
      // Start blinking after typing finishes
      typewriter.classList.add("blink");

      // Stop blinking after 8s
      setTimeout(() => {
        typewriter.classList.remove("blink");
        typewriter.style.borderRight = "none"; // remove cursor
      }, 6000);
    }
  }

  type();
});
