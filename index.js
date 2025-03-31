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

// Get all tab buttons and panels
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

// Function to switch tabs
function switchTab(clickedTab) {
  // Get the target tab from data attribute
  const targetTab = clickedTab.getAttribute("data-tab");

  // Remove active class from all buttons and panels
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  tabPanels.forEach((panel) => {
    panel.classList.remove("flex");
    panel.classList.add("hidden");
  });

  // Add active class to clicked button and corresponding panel
  clickedTab.classList.add("active");
  document.getElementById(targetTab).classList.add("flex");
  document.getElementById(targetTab).classList.remove("hidden");
}

// Add click event listeners to all tab buttons
tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    switchTab(this);
  });
});

// Add keyboard navigation
document.addEventListener("keydown", function (e) {
  const activeTabIndex = Array.from(tabButtons).findIndex((btn) =>
    btn.classList.contains("active"),
  );

  if (e.key === "ArrowRight") {
    const nextTabIndex = (activeTabIndex + 1) % tabButtons.length;
    switchTab(tabButtons[nextTabIndex]);
  } else if (e.key === "ArrowLeft") {
    const prevTabIndex =
      (activeTabIndex - 1 + tabButtons.length) % tabButtons.length;
    switchTab(tabButtons[prevTabIndex]);
  }
});

// Add event listeners
openMobileMenu.addEventListener("click", toggleMenu);
closeMobileMenu.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu); // Close menu when overlay is clicked
