window.addEventListener("scroll", imgOnScroll);

function imgOnScroll() {
  const transparent_image = document.getElementById("transparent_image");

  // Get the current scroll position
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Get the height of the entire page and the window's viewport height
  let documentHeight = document.documentElement.scrollHeight;
  let windowHeight = window.innerHeight;

  // Calculate the scrollable height of the page
  let scrollableHeight = documentHeight - windowHeight;

  // Calculate the scroll progress as a value between 0 and 1
  let scrollPercentage = scrollTop / scrollableHeight;

  // Adjust the opacity based on the scroll progress
  let newOpacity = scrollPercentage * 50; // New opacity value between 0 and 1

  // Ensure the opacity stays within the range [0, 1]
  newOpacity = Math.min(Math.max(newOpacity, 0), 1);

  // Set the new opacity on the image
  transparent_image.style.opacity = newOpacity;
  console.log(opacity);
}
