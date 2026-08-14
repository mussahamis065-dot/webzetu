/* =========================================================
   IYUNGA SECONDARY SCHOOL WEBSITE
   MAIN JAVASCRIPT
   ========================================================= */

/* =========================================================
   1. MOBILE NAVIGATION MENU
   ========================================================= */

function toggleMenu() {
  const navMenu = document.querySelector(".nav-links");

  if (!navMenu) {
    return;
  }

  navMenu.classList.toggle("show");
}

/* Close mobile menu when a navigation link is clicked */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const navMenu = document.querySelector(".nav-links");

    if (navMenu) {
      navMenu.classList.remove("show");
    }
  });
});

/* Close mobile menu when clicking outside */

document.addEventListener("click", function (event) {
  const navbar = document.querySelector(".navbar");
  const navMenu = document.querySelector(".nav-links");
  const menuButton = document.querySelector(".menu-btn");

  if (!navbar || !navMenu || !menuButton) {
    return;
  }

  if (!navbar.contains(event.target)) {
    navMenu.classList.remove("show");
  }
});

/* =========================================================
   2. ACTIVE NAVIGATION LINK
   ========================================================= */

function setActiveNavigation() {
  let currentPage = window.location.pathname.split("/").pop();

  /*
        If the browser doesn't show a filename,
        treat the page as index.html.
    */

  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }

  const links = document.querySelectorAll(".nav-links a");

  links.forEach(function (link) {
    const linkPage = link.getAttribute("href");

    link.classList.remove("active");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

/* Run active navigation */

setActiveNavigation();

/* =========================================================
   3. AUTOMATIC COPYRIGHT YEAR
   ========================================================= */

const currentYear = new Date().getFullYear();

const yearElements = document.querySelectorAll(".copyright-year");

yearElements.forEach(function (element) {
  element.textContent = currentYear;
});

/* =========================================================
   4. CONTACT FORM
   ========================================================= */

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactForm.querySelector('input[name="name"]');

    const email = contactForm.querySelector('input[name="email"]');

    const subject = contactForm.querySelector('input[name="subject"]');

    const message = contactForm.querySelector("textarea");

    /*
                Make sure the required fields exist.
            */

    if (!name || !email || !subject || !message) {
      alert("The contact form is not configured correctly.");

      return;
    }

    /*
                Check empty fields.
            */

    if (
      name.value.trim() === "" ||
      email.value.trim() === "" ||
      subject.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      alert("Please fill in all required fields.");

      return;
    }

    /*
                Simple email validation.
            */

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
      alert("Please enter a valid email address.");

      return;
    }

    /*
                Temporary frontend response.

                This does NOT send the message
                to a real school email yet.
            */

    const contactSuccess = document.getElementById("contactSuccess");

    if (contactSuccess) {
      contactSuccess.style.display = "block";
    }

    // clear the form

    contactForm.reset();
  });
}

/* =========================================================
   5. ONLINE ADMISSION FORM
   ========================================================= */

const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {
  admissionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    /* -----------------------------------------
               GET FORM ELEMENTS
            ----------------------------------------- */

    const studentName = document.getElementById("studentName");

    const dob = document.getElementById("dob");

    const gender = document.getElementById("gender");

    const classApplying = document.getElementById("classApplying");

    const guardianName = document.getElementById("guardianName");

    const guardianPhone = document.getElementById("guardianPhone");

    const relationship = document.getElementById("relationship");

    const previousSchool = document.getElementById("previousSchool");

    const yearCompleted = document.getElementById("yearCompleted");

    const region = document.getElementById("region");

    const district = document.getElementById("district");

    const agreement = document.getElementById("agreement");

    /* -----------------------------------------
               CHECK THAT IMPORTANT ELEMENTS EXIST
            ----------------------------------------- */

    if (
      !studentName ||
      !dob ||
      !gender ||
      !classApplying ||
      !guardianName ||
      !guardianPhone ||
      !relationship ||
      !previousSchool ||
      !yearCompleted ||
      !region ||
      !district ||
      !agreement
    ) {
      alert("The admission form is not configured correctly.");

      return;
    }

    /* -----------------------------------------
               VALIDATE REQUIRED TEXT FIELDS
            ----------------------------------------- */

    const requiredFields = [
      studentName,
      dob,
      gender,
      classApplying,
      guardianName,
      guardianPhone,
      relationship,
      previousSchool,
      yearCompleted,
      region,
      district,
    ];

    for (let i = 0; i < requiredFields.length; i++) {
      if (requiredFields[i].value.trim() === "") {
        alert("Please complete all required fields.");

        requiredFields[i].focus();

        return;
      }
    }

    /* -----------------------------------------
               VALIDATE AGREEMENT
            ----------------------------------------- */

    if (!agreement.checked) {
      alert(
        "Please confirm that the information provided is accurate and complete.",
      );

      agreement.focus();

      return;
    }

    /* -----------------------------------------
               VALIDATE PHONE NUMBER
            ----------------------------------------- */

    const phonePattern = /^[0-9+\-\s()]{9,20}$/;

    if (!phonePattern.test(guardianPhone.value.trim())) {
      alert("Please enter a valid guardian phone number.");

      guardianPhone.focus();

      return;
    }

    /* -----------------------------------------
               VALIDATE YEAR
            ----------------------------------------- */

    const year = Number(yearCompleted.value);

    if (year < 2000 || year > 2100) {
      alert("Please enter a valid completion year.");

      yearCompleted.focus();

      return;
    }

    /* -----------------------------------------
               SHOW SUCCESS MESSAGE
            ----------------------------------------- */

    const successMessage = document.getElementById("admissionSuccess");

    if (successMessage) {
      successMessage.style.display = "block";
    }

    /*
                IMPORTANT:

                At this stage the application
                is NOT stored in a database.

                This is only frontend validation.
            */

    alert("Application form completed successfully.");

    /* Clear the form */

    admissionForm.reset();

    /* Scroll to success message */

    if (successMessage) {
      successMessage.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  });
}

/* =========================================================
   6. GALLERY IMAGE INTERACTION
   ========================================================= */

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(function (image) {
  image.addEventListener("click", function () {
    image.classList.toggle("gallery-active");
  });
});

/* =========================================================
   7. SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements = document.querySelectorAll(
  ".info-card, " +
    ".academic-card, " +
    ".news-card, " +
    ".value-card, " +
    ".mission-card, " +
    ".admission-card",
);

function revealOnScroll() {
  revealElements.forEach(function (element) {
    const elementPosition = element.getBoundingClientRect().top;

    const screenPosition = window.innerHeight - 80;

    if (elementPosition < screenPosition) {
      element.classList.add("reveal-active");
    }
  });
}

/* Run once when page loads */

revealOnScroll();

/* Run when scrolling */

window.addEventListener("scroll", revealOnScroll);

/* =========================================================
   8. PREVENT INVALID FORM SUBMISSION
   ========================================================= */

const forms = document.querySelectorAll("form");

forms.forEach(function (form) {
  form.addEventListener(
    "invalid",
    function () {
      /*
                Browser handles the actual
                validation message.

                This listener simply keeps
                the form behaviour consistent.
            */
    },
    true,
  );
});

/* =========================================================
   9. PAGE READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /*
            This confirms that the HTML document
            has loaded successfully.

            We intentionally do not hide the body
            here. This prevents the whole website
            from appearing blank if JavaScript
            has an error.
        */

  document.body.classList.add("page-ready");
});
