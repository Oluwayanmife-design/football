const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");

// Toggle the sidebar
hamburger.addEventListener("click", function () {
  sidebar.classList.remove("-translate-x-full"); // Show sidebar
  sidebar.classList.add("translate-x-0"); // Move it into view
  hamburger.classList.add("hidden"); // Hide hamburger icon
  sidebar.style.backgroundColor = "black"; // Set sidebar background to gray
});

// Close the sidebar
closeSidebar.addEventListener("click", function () {
  sidebar.classList.add("-translate-x-full"); // Hide sidebar
  sidebar.classList.remove("translate-x-0");
  hamburger.classList.remove("hidden"); // Show hamburger icon again
  sidebar.style.backgroundColor = ""; // Reset background color
});
