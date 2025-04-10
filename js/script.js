document.addEventListener("DOMContentLoaded", function () {
  // ===== Scroll to Top Button =====
  const scrollButton = document.querySelector(".scroll-top");
  const header = document.querySelector("header");

  if (scrollButton && header) {
    function toggleScrollButton() {
      if (window.scrollY > header.offsetHeight) {
        scrollButton.classList.add("active");
      } else {
        scrollButton.classList.remove("active");
      }
    }

    window.addEventListener("scroll", toggleScrollButton);

    scrollButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // ===== Sticky Header on Scroll =====
  const headers = document.querySelectorAll("header");

  if (headers.length > 0) {
    window.addEventListener("scroll", function () {
      headers.forEach(header => {
        if (window.scrollY > 10) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Get the current page pathname (e.g., '/about-us.html')
    const currentPath = window.location.pathname.split("/").pop();  // extracts the file name
    // Select all nav links in both desktop and mobile headers
    const navLinks = document.querySelectorAll('.nav-menus a');

    // Loop through all links and match their href with the currentPath
    navLinks.forEach(link => {
        // Extract the file part from href, e.g., 'about-us.html'
        const linkPath = link.getAttribute('href');

        // Compare currentPath with linkPath, if they match add the active class
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });

    // For single page apps, you might also want to add event listeners 
    // to remove the active class from other links and set it on click.
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove 'active' class from all links
            navLinks.forEach(item => item.classList.remove('active'));
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});

  // ===== Mobile Navigation Toggle =====
  const mobileHeader = document.querySelector(".show-for-mobile");

  if (mobileHeader) {
    const hamburger = mobileHeader.querySelector(".hamburger");
    const navMenus = mobileHeader.querySelector(".nav-menus");

    if (hamburger && navMenus) {
      hamburger.addEventListener("click", () => {
        navMenus.classList.toggle("active");
        hamburger.classList.toggle("active");
      });
    }
  }
});
