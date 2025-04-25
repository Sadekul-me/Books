// Console log for dev check
console.log("Main.js is connected 🚀");

// Scroll to top on page load
window.onload = () => {
  window.scrollTo(0, 0);
};

// Smooth scroll for internal links (যদি পরবর্তীতে ব্যবহার করো)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
