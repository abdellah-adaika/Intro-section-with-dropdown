
const menuBtn = document.querySelector(".menu-btn");

const mobileMenu = document.querySelector(".mobile-menu");

const overlay = document.querySelector(".overlay");

const closeMenu = document.querySelector(".close-menu");

const dropdownToggle = document.querySelectorAll(".dropdown-toggle");



menuBtn.addEventListener("click",() => {
  mobileMenu.style.display = "block";
  overlay.style.display = "block";
});


closeMenu.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  overlay.style.display = "none";
  dropdownToggle.forEach((button) => {
    const navItem = button.parentElement;
    const dropdownMenu = navItem.querySelector("ul");
    const dropdownArrow = navItem.querySelector(".dropdown-arrow");
    dropdownMenu.classList.remove("dropdown-open");
    dropdownArrow.src = "icon-arrow-down.svg";
    
});
});


overlay.addEventListener("click",() => {
  mobileMenu.style.display = "none";
  overlay.style.display = "none";
}); 


dropdownToggle.forEach((button) => {
  button.addEventListener("click", () => {
    const navItem = button.parentElement;
    const dropdownMenu = navItem.querySelector("ul");
    const dropdownArrow = navItem.querySelector(".dropdown-arrow");
    const isOpen = dropdownMenu.classList.toggle("dropdown-open");
    dropdownToggle.forEach((otherButton) => {
      if (otherButton !== button) {
    const otherNavItem = otherButton.parentElement;
    const otherDropdownMenu = otherNavItem.querySelector("ul");
    if (otherDropdownMenu.classList.contains("dropdown-open")) {
    otherDropdownMenu.classList.remove("dropdown-open");
    const otherDropdownArrow = otherNavItem.querySelector(".dropdown-arrow");
    otherDropdownArrow.src = "icon-arrow-down-svg";
}
}
});
    if (isOpen) {
      dropdownArrow.src = "icon-arrow-up.svg";
} else {
    dropdownArrow.src = "icon-arrow-down.svg";
}
const menuLinks = mobileMenu.querySelectorAll("a");
menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.style.display = "none";
      overlay.style.display = "none";
    });
    
});
    
  });
  
});