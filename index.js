//Select DOM Elements
// Mobile Navigation
const openMobileMenu = document.getElementById("mobile-menu");
const closeMobileMenu = document.getElementById("close-menu");
const mobileNav = document.getElementById("mobile-nav");
const overlay = document.getElementById("overlay");

// Toggle mobile menu and overlay
function toggleMenu() {
  const isMenuOpen = mobileNav.classList.contains("flex");

  if (isMenuOpen) {
    // Close the menu
    mobileNav.classList.remove("flex");
    mobileNav.classList.add("hidden");
    overlay.classList.remove("flex");
    overlay.classList.add("hidden");
  } else {
    // Open the menu
    mobileNav.classList.remove("hidden");
    mobileNav.classList.add("flex");
    overlay.classList.remove("hidden");
    overlay.classList.add("flex");
  }
}

// Add event listeners
openMobileMenu.addEventListener("click", toggleMenu);
closeMobileMenu.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu); // Close menu when overlay is clicked
