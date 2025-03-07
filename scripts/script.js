document.querySelectorAll('.long-container-youtube').forEach(container => {
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

