const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Animate the element
        entry.target.classList.add('show'); // Add the animation class
  
        // Ensure animation runs only once (optional)
        observer.unobserve(entry.target); // Disconnect from observer after animation
      }
    });
  });
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); 

// animate speech bubble
window.onload = function() {
  const fadeInOutElement = document.getElementById('dialog');
  fadeInOutElement.classList.add('show'); // Make the element visible

  setTimeout(() => {
    fadeInOutElement.classList.remove('show'); // Remove the 'show' class after 2 seconds
  }, 3500);
};