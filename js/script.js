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
/* =====================================================
   ONLINE STUDENT REGISTRATION
===================================================== */

const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    /* ==============================
               HELPER
            =============================== */

    function validateField(fieldId, errorId, message) {
      const field = document.getElementById(fieldId);

      const error = document.getElementById(errorId);

      const formField = field.closest(".form-field");

      if (!field.value.trim()) {
        formField.classList.add("invalid");
        formField.classList.remove("valid");

        error.textContent = message;

        isValid = false;
      } else {
        formField.classList.remove("invalid");
        formField.classList.add("valid");

        error.textContent = "";
      }
    }

    /* ==============================
               REQUIRED FIELDS
            =============================== */

    validateField(
      "studentName",
      "studentNameError",
      "Please enter the student's full name.",
    );

    validateField(
      "gender",
      "genderError",
      "Please select the student's gender.",
    );

    validateField(
      "dateOfBirth",
      "dateOfBirthError",
      "Please select the date of birth.",
    );

    validateField(
      "nationality",
      "nationalityError",
      "Please enter the nationality.",
    );

    validateField(
      "applyingClass",
      "applyingClassError",
      "Please select the Form applying for.",
    );

    validateField(
      "parentName",
      "parentNameError",
      "Please enter the parent or guardian name.",
    );

    validateField(
      "relationship",
      "relationshipError",
      "Please select the relationship.",
    );

    validateField("phone", "phoneError", "Please enter a phone number.");

    validateField(
      "address",
      "addressError",
      "Please enter the residential address.",
    );

    validateField(
      "academicYear",
      "academicYearError",
      "Please select the academic year.",
    );

    /* ==============================
               PHONE VALIDATION
            =============================== */

    const phone = document.getElementById("phone");

    const phoneError = document.getElementById("phoneError");

    if (phone.value.trim()) {
      const phonePattern = /^(0|\+255)[0-9]{9}$/;

      if (!phonePattern.test(phone.value.trim())) {
        phone.closest(".form-field").classList.add("invalid");

        phone.closest(".form-field").classList.remove("valid");

        phoneError.textContent = "Enter a valid Tanzanian phone number.";

        isValid = false;
      }
    }

    /* ==============================
               EMAIL VALIDATION
            =============================== */

    const email = document.getElementById("email");

    const emailError = document.getElementById("emailError");

    if (email.value.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email.value.trim())) {
        email.closest(".form-field").classList.add("invalid");

        emailError.textContent = "Please enter a valid email address.";

        isValid = false;
      }
    }

    /* ==============================
               DATE VALIDATION
            =============================== */

    const dateOfBirth = document.getElementById("dateOfBirth");

    if (dateOfBirth.value) {
      const selectedDate = new Date(dateOfBirth.value);

      const today = new Date();

      today.setHours(0, 0, 0, 0);

      if (selectedDate >= today) {
        dateOfBirth.closest(".form-field").classList.add("invalid");

        document.getElementById("dateOfBirthError").textContent =
          "Date of birth must be in the past.";

        isValid = false;
      }
    }

    /* ==============================
               DECLARATION
            =============================== */

    const declaration = document.getElementById("declaration");

    const declarationError = document.getElementById("declarationError");

    if (!declaration.checked) {
      declarationError.textContent =
        "You must accept the declaration before submitting.";

      isValid = false;
    } else {
      declarationError.textContent = "";
    }

    /* ==============================
               IF INVALID
            =============================== */

    if (!isValid) {
      const firstError = document.querySelector(".invalid");

      if (firstError) {
        firstError.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }

      return;
    }

    /* ==============================
               SUCCESS
            =============================== */

    const successMessage = document.getElementById("registrationSuccess");

    const applicationNumber = document.getElementById("applicationNumber");

    /*
               Generate demo application number.
               This is NOT stored in a database.
            */

    const randomNumber = Math.floor(100000 + Math.random() * 900000);

    applicationNumber.textContent =
      "Application Number: IYUNGA-" + randomNumber;

    successMessage.style.display = "flex";

    successMessage.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    /*
               Disable submit after successful
               frontend submission.
            */

    const submitButton = registrationForm.querySelector(".submit-registration");

    submitButton.disabled = true;

    submitButton.style.opacity = "0.6";

    submitButton.innerHTML = '<i class="bi bi-check-circle"></i> Submitted';
  });

  /* ==============================
       CLEAR FORM
    =============================== */

  registrationForm.addEventListener("reset", function () {
    setTimeout(function () {
      document.querySelectorAll(".invalid").forEach(function (element) {
        element.classList.remove("invalid");
      });

      document.querySelectorAll(".valid").forEach(function (element) {
        element.classList.remove("valid");
      });

      document.querySelectorAll(".field-error").forEach(function (element) {
        element.textContent = "";
      });

      const successMessage = document.getElementById("registrationSuccess");

      successMessage.style.display = "none";

      const submitButton = registrationForm.querySelector(
        ".submit-registration",
      );

      submitButton.disabled = false;

      submitButton.style.opacity = "1";

      submitButton.innerHTML =
        'Submit Application <i class="bi bi-arrow-right"></i>';
    }, 0);
  });
}
