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

// Accordion implementation
const accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const button = item.querySelector(".accordion-button");
  const collapse = item.querySelector(".accordion-collapse");
  const icon = item.querySelector(".accordion-icon");

  // Add click event to header (including button and icon)
  header.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";

    // Toggle aria-expanded attribute
    button.setAttribute("aria-expanded", !isOpen);

    // Toggle collapse visibility
    collapse.classList.toggle("hidden");

    // Rotate the icon
    icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";

    // Optional: Change button color when expanded
    if (!isOpen) {
      const path = icon.querySelector("path");
      path.style.stroke = "var(--orange)";
    } else {
      const path = icon.querySelector("path");
      path.style.stroke = "var(--lightBlue)";
    }
  });
  button.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      header.click();
    }
  });
});

// Add event listeners
openMobileMenu.addEventListener("click", toggleMenu);
closeMobileMenu.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu); // Close menu when overlay is clicked

// Signup input
const form = document.querySelector(".form");
const inputField = document.getElementById("email");
const error = document.getElementById("error");
const errorIcon = document.querySelector(".error-icon");
const submitBtn = document.getElementById("submit-btn");
// Regular expression for email validation as per HTML specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Check if the email is valid
const isValidEmail = () => {
  const validity = email.value.length !== 0 && emailRegExp.test(email.value);
  return validity;
};

// Update email input class based on validity
const setEmailClass = (isValid) => {
  if (isValid) {
    email.classList.remove("error");
    email.classList.add("rounded-[5px]");
    errorIcon.classList.add("hidden");
  } else {
    email.classList.add("error");
    email.classList.remove("rounded-[5px]");
    email.classList.add("rounded-t-[5px]");
    errorIcon.classList.remove("hidden");
  }
};

// Update error message and visibility
const updateError = (isValidInput) => {
  if (isValidInput) {
    error.textContent = "";
    error.classList.add("hidden");
  } else {
    error.textContent = " Whoops, make sure it’s an email";
    error.classList.remove("hidden");
  }
};
// Handle input event to update email validity
const handleInput = () => {
  const emailInput = isValidEmail();
  setEmailClass(emailInput);
  updateError(emailInput);
};

function handleSubmit(e) {
  e.preventDefault(); // prevent the default browser behaviour

  const emailInput = isValidEmail();
  setEmailClass(emailInput);
  updateError(emailInput);

  if (emailInput) {
    const formData = new FormData(e.target);
    const { email } = Object.fromEntries(formData);
    alert(`Thank you! You will be contacted via ${email}`);

    form.reset();
  }
}

email.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);
