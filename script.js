// Copy Ad Script
function copyScript() {
    const scriptText = document.getElementById("adScript").innerText;

    navigator.clipboard.writeText(scriptText)
        .then(() => {
            alert("Ad script copied!");
        })
        .catch(() => {
            alert("Failed to copy.");
        });
}

// Random Hook Generator
const hooks = [
    "I stopped using expensive skincare after this...",
    "My skin changed in 7 days—no joke",
    "If you have dark spots, watch this",
    "Why is no one talking about this serum?",
    "I had zero expectations, but this worked..."
];

function generateHook() {
    const randomIndex = Math.floor(Math.random() * hooks.length);
    document.getElementById("randomHook").innerText = hooks[randomIndex];
}

// CTA Click Action
function handleCTA(action) {
    alert("You clicked: " + action);
}

// Run on page load
window.onload = function () {
    console.log("UGC Ads Page Loaded");
};
