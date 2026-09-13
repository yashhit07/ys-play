const translations = {
    "en": {
        "nav-home": "HOME",
        "nav-charts": "OLD CHARTS",
        "nav-how": "HOW TO PLAY",
        "hero-title": "YS PLAY",
        "hero-sub": "Your numbers. Your charts. Your game.",
        "timer-label": "Next Update In",
        "timer-note": "Updates automatically",
        "latest-head": "Latest Numbers",
        "chart-head": "Today's Chart",
        "chart-tag": "Latest",
        "chart-time": "Time",
        "chart-res1": "Result 1",
        "chart-res2": "Result 2",
        "chart-res3": "Result 3",
        "live-text": "LIVE • People Playing Now",
        "live-sub": "players currently online"
    },
    "hi": {
        "nav-home": "होम",
        "nav-charts": "पुराने चार्ट",
        "nav-how": "कैसे खेलें",
        "hero-title": "YS PLAY",
        "hero-sub": "आपके नंबर. आपके चार्ट. आपका खेल.",
        "timer-label": "अगला अपडेट",
        "timer-note": "अपने आप अपडेट होता है",
        "latest-head": "नवीनतम नंबर",
        "chart-head": "आज का चार्ट",
        "chart-tag": "नवीनतम",
        "chart-time": "समय",
        "chart-res1": "परिणाम 1",
        "chart-res2": "परिणाम 2",
        "chart-res3": "परिणाम 3",
        "live-text": "लाइव • लोग अभी खेल रहे हैं",
        "live-sub": "खिलाड़ी अभी ऑनलाइन हैं"
    }
};

function setLanguage(lang) {
    // Memory me language save kar rahe hain
    localStorage.setItem("ysplay_lang", lang);
    
    // Website ke saare text update karna
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach(el => {
        const key = el.getAttribute("data-lang");
        if(translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Button ka text update karna
    const langBtns = document.querySelectorAll(".language-toggle");
    langBtns.forEach(btn => {
        if (lang === "en") {
            btn.innerHTML = "English | <strong>हिंदी</strong>";
        } else {
            btn.innerHTML = "<strong>English</strong> | हिंदी";
        }
    });
}

function toggleLanguage() {
    let currentLang = localStorage.getItem("ysplay_lang") || "en";
    let newLang = currentLang === "en" ? "hi" : "en";
    setLanguage(newLang);
}

// Jab bhi koi page load ho, memory se language check karo
window.addEventListener("DOMContentLoaded", () => {
    let savedLang = localStorage.getItem("ysplay_lang") || "en";
    setLanguage(savedLang);

    // Button par click function lagana
    const langBtns = document.querySelectorAll(".language-toggle");
    langBtns.forEach(btn => {
        btn.addEventListener("click", toggleLanguage);
    });
});
