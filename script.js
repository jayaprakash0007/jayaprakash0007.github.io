const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();
const roles = ["Computer Science & Cybersecurity", "Software Developer", "AI & Machine Learning Enthusiast"];
const target = document.querySelector("#typed-role");
let roleIndex = 0, charIndex = 0, deleting = false;
function typeRole() {
  const current = roles[roleIndex];
  target.textContent = current.slice(0, charIndex);
  if (!deleting && charIndex < current.length) { charIndex++; setTimeout(typeRole, 75); }
  else if (!deleting) { deleting = true; setTimeout(typeRole, 1500); }
  else if (charIndex > 0) { charIndex--; setTimeout(typeRole, 35); }
  else { deleting = false; roleIndex = (roleIndex + 1) % roles.length; setTimeout(typeRole, 350); }
}
typeRole();