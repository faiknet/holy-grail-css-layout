function toggleNav() {
  // button to extend the navbar in the outer grid on mobile, activates a secondary grid that has the nav whereas the default grid does not have the nav
  const outerGrid = document.querySelector(".outer-grid");
  outerGrid.classList.toggle("outer-grid-expanded");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}
