// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme") || "dark";
body.setAttribute("data-theme", savedTheme);
icon.classList.remove("fa-sun", "fa-moon");
icon.classList.add(savedTheme === "dark" ? "fa-sun" : "fa-moon");

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  body.setAttribute("data-theme", newTheme);
  icon.classList.remove("fa-sun", "fa-moon");
  icon.classList.add(newTheme === "dark" ? "fa-sun" : "fa-moon");

  localStorage.setItem("theme", newTheme);
});
document.querySelectorAll(".project-image").forEach((img) => {
  img.style.transition = "transform 0.3s ease";
  img.parentElement.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
  });
  img.parentElement.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
const form = document.querySelector(".contact-form");
const submitButton = form.querySelector(".submit-btn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  submitButton.disabled = true;
  submitButton.innerHTML =
    '<i class="fas fa-spinner fa-spin"></i> Sending...';
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("Message sent successfully!");
    form.reset();
  } catch (error) {
    alert("Error sending message. Please try again.");
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = "Send Message";
  }
});
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".timeline-item, .skill-card").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});
document.head.insertAdjacentHTML(
  "beforeend",
  `
      <style>
          .fade-in {
              opacity: 1 !important;
              transform: translateY(0) !important;
          }

          /* Add smooth transition for theme changes */
          body {
              transition: background-color 0.3s ease, color 0.3s ease;
          }

          /* Add hover effects */
          .skill-tag {
              transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .skill-tag:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .timeline-content {
              transition: transform 0.2s ease;
          }

          .timeline-content:hover {
              transform: translateX(5px);
          }

          /* Add loading spinner animation */
          @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
          }

          .fa-spin {
              animation: spin 1s linear infinite;
          }
      </style>
  `
);

// Back to Top Button
const backToTopButton = document.createElement("button");
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.classList.add("back-to-top");
document.body.appendChild(backToTopButton);

backToTopButton.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 10px 15px;
      background-color: var(--primary);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s ease, background-color 0.3s ease;
      z-index: 1000;
  `;

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopButton.style.opacity = "1";
  } else {
    backToTopButton.style.opacity = "0";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

backToTopButton.addEventListener("mouseenter", () => {
  backToTopButton.style.backgroundColor = "var(--primary-dark)";
});

backToTopButton.addEventListener("mouseleave", () => {
  backToTopButton.style.backgroundColor = "var(--primary)";
});

