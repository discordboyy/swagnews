document.querySelectorAll('.long-container-youtube').forEach(container => {
    container.addEventListener('click', () => {
        const link = container.dataset.link;
        if (link) {
            window.open(link, '_blank');
        }
    });
});

document.querySelectorAll('.short-container-youtube').forEach(container => {
    container.addEventListener('click', () => {
        const link = container.dataset.link;
        if (link) {
            window.open(link, '_blank');
        }
    });
});

document.querySelectorAll('#giperurl').forEach(container => {
    container.addEventListener('click', () => {
        const link = container.dataset.link;
        if (link) {
            window.open(link, '_blank');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const adBanner = document.getElementById("adBanner");
    const adCloseButton = document.getElementById("adCloseButton");
    const cookieBanner = document.getElementById("cookieBanner");
    const cookieAcceptButton = document.getElementById("cookieAcceptButton");

    // Функция для блокировки/разблокировки скролла
    function toggleScroll(block) {
        document.body.style.overflow = block ? "hidden" : "auto";
    }

    // Функция для показа баннеров с затемнением фона
    function showBanners() {
        overlay.style.display = "block";
        adBanner.style.display = "flex";
        cookieBanner.style.display = "flex";
        toggleScroll(true);
    }

    // Скрыть рекламу
    adCloseButton.addEventListener("click", () => {
        adBanner.style.display = "none";
        checkOverlay();
    });

    // Принять cookie
    cookieAcceptButton.addEventListener("click", () => {
        cookieBanner.style.display = "none";
        document.cookie = "cookie_acc=ok; max-age=31536000; path=/";
        checkOverlay();
    });

    // Убирает затемнённый фон и разблокирует скролл, если все баннеры скрыты
    function checkOverlay() {
        if (adBanner.style.display === "none" && cookieBanner.style.display === "none") {
            overlay.style.display = "none";
            toggleScroll(false);
        }
    }

    // Показываем баннеры (здесь можно настроить логику показа)
    const cookieAccepted = document.cookie.includes("cookie_acc=ok");
    if (!cookieAccepted) {
        showBanners();
    }
});

let lastTouchTime = 0;
let touchStartX = 0;
let touchEndX = 0;

// Prevent double-tap zoom
document.addEventListener("touchend", function (event) {
    const now = Date.now();
    if (now - lastTouchTime <= 300) {
        event.preventDefault(); // Prevent double-tap zoom
    }
    lastTouchTime = now;
}, { passive: false });

// Image carousel setup
const images = [
    "../link/content/another/offgodtate (1).jpg",
    "../link/content/another/offgodtate (2).jpg",
    "../link/content/another/offgodtate (3).jpg",
    "../link/content/another/offgodtate (4).jpg",
    "../link/content/another/offgodtate (5).jpg",
    "../link/content/another/offgodtate (6).jpg",
    "../link/content/another/offgodtate (7).jpg",
];

let currentIndex = parseInt(localStorage.getItem("lastImageIndex")) || 0; // Load last image or default to 0
const imageElement = document.getElementById("carousel-image");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

// Modal Elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Function to update the carousel image and save index
function updateImage(index) {
    imageElement.src = images[index];
    localStorage.setItem("lastImageIndex", index); // Save current image index
}

// Load the last image when the page loads
updateImage(currentIndex);

// Navigate Left
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
});

// Navigate Right
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
});

// Open Image in Modal
imageElement.addEventListener("click", function () {
    modal.classList.add("show");
    modalImg.src = images[currentIndex];
});

// Function to Close Modal
function closeModal() {
    modal.classList.remove("show");
}

// Close Modal when clicking the close button
closeBtn.addEventListener("click", closeModal);

// Close Modal when clicking outside the image
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Close Modal when pressing the Escape Key (ESC)
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("show")) {
        closeModal();
    }
});

// ----------------- Add This Swipe Gesture Support -----------------

// Detect touch start for swipe
imageElement.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
});

// Detect touch end for swipe
imageElement.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
});

// Function to handle swipe actions
function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance to consider a swipe

    if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left (next image)
        currentIndex = (currentIndex + 1) % images.length;
        updateImage(currentIndex);
    } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right (previous image)
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage(currentIndex);
    }
}



require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;
const API_KEY = process.env.API_KEY;

app.get('/eth-price', async (req, res) => {
    try {
        const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=ETH&convert=USDT`, {
            headers: { 'X-CMC_PRO_API_KEY': API_KEY }
        });
        const data = await response.json();
        res.json({ price: data.data.ETH.quote.USDT.price });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch price' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
