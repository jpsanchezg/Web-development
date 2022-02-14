window.onscroll = function () {
    scrollFunction();
    scrollFunctionBTT();
};

function scrollFunction() {
    let intViewportWidth = window.innerWidth;
    if (
        document.body.scrollTop > 30 ||
        (document.documentElement.scrollTop > 30) & (intViewportWidth > 991)
    ) {
        document.getElementById("navbar").classList.add("top-nav-collapse");
    } else if (
        document.body.scrollTop < 30 ||
        (document.documentElement.scrollTop < 30) & (intViewportWidth > 991)
    ) {
        document.getElementById("navbar").classList.remove("top-nav-collapse");
    }
}

function toggleDropdown(e) {
    const _d = e.target.closest(".dropdown");
    let _m = document.querySelector(".dropdown-menu", _d);

    setTimeout(
        function () {
            const shouldOpen = _d.matches(":hover");
            _m.classList.toggle("show", shouldOpen);
            _d.classList.toggle("show", shouldOpen);

            _d.setAttribute("aria-expanded", shouldOpen);
        },
        e.type === "mouseleave" ? 300 : 0
    );
}

const dropdownCheck = document.querySelector(".dropdown");

if (dropdownCheck !== null) {
    document
        .querySelector(".dropdown")
        .addEventListener("mouseleave", toggleDropdown);
    document
        .querySelector(".dropdown")
        .addEventListener("mouseover", toggleDropdown);

    // ON CLICK
    document.querySelector(".dropdown").addEventListener("click", (e) => {
        const _d = e.target.closest(".dropdown");
        let _m = document.querySelector(".dropdown-menu", _d);
        if (_d.classList.contains("show")) {
            _m.classList.remove("show");
            _d.classList.remove("show");
        } else {
            _m.classList.add("show");
            _d.classList.add("show");
        }
    });
}

var cardSlider = new Swiper(".card-slider", {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 70,
    breakpoints: {

        767: {
            slidesPerView: 1,
        },

        991: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
});


myButton = document.getElementById("myBtn");


function scrollFunctionBTT() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// AOS ANIMATION ON SCROLL
AOS.init({
    duration: 1000,
    easing: "ease",
    once: true,
});
