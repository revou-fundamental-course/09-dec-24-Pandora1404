document.addEventListener("DOMContentLoaded", () => {
    // DOM Variables
    const nameInput = document.getElementById("name_input");
    const emailInput = document.getElementById("email_input");
    const interestInput = document.getElementById("interest_input");
    const nameInputError = document.getElementById("name_input_error");
    const emailInputError = document.getElementById("email_input_error");
    const interestInputError = document.getElementById("interest_input_error");
    const contactUsForm = document.getElementById("contact_us_form");
    const hamburgerIcon = document.getElementById("hamburger_icon");
    const mobileNav = document.getElementById("mobile_nav");

    // Banners Auto Slider
    const bannerDisplayer = document.getElementById("banner_displayer");
    const banners = document.getElementsByClassName("banner");

    const totalBanners = banners.length;
    let currentBannerIndex = 0;


    // HAMBURGER ICON Navigation
    hamburgerIcon.addEventListener("click", event => {
        event.stopPropagation();
        mobileNav.classList.toggle("show");
    });

    document.addEventListener("click", event => {
        if (!mobileNav.contains(event.target) && event.target !== hamburgerIcon) {
            mobileNav.classList.remove("show");
        }
    });

    // Banners Auto Slider Function
    let moveDirection = "right";
    let moveToNextBanner = () => {
        if (currentBannerIndex === (totalBanners - 1)) {
            moveDirection = "left";
        } else if (currentBannerIndex === 0) {
            moveDirection = "right";
        }

        if (moveDirection === "right") {
            currentBannerIndex++;
        } else if (moveDirection === "left") {
            currentBannerIndex--;
        }

        const offset = -currentBannerIndex * 100;

        // Move Banner Displayer
        bannerDisplayer.style.transform = `translateX(${offset}%)`;
    }

    setInterval(moveToNextBanner, 3000);

    // Input Validations
    let validateInput = () => {
        let isValid = true;

        // Name Validation
        if (nameInput.value.trim() === "") {
            nameInput.classList.add("error");
            nameInputError.classList.add("show-error");
            isValid = false;
        } else {
            nameInput.classList.remove("error");
            nameInputError.classList.remove("show-error");
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add("error");
            emailInputError.classList.add("show-error");
            isValid = false;
        } else {
            emailInput.classList.remove("error");
            emailInputError.classList.remove("show-error");
        }

        // Interest Validation
        if (interestInput.value.trim() === "") {
            interestInput.classList.add("error");
            interestInputError.classList.add("show-error");
            isValid = false;
        } else {
            interestInput.classList.remove("error");
            interestInputError.classList.add("show-error");
        }

        return isValid;
    }

    contactUsForm.addEventListener('submit', event => {
        if (!validateInput()) {
            event.preventDefault();
        }
    });

});