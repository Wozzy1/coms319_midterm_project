const toggleButton = document.getElementById("darkModeToggle");

// Check if the user has a preferred theme stored in localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save the user's preference in localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
