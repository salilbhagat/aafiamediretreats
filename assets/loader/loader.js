window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const body = document.body;

    // Hide the loader and enable interactions when the page is fully loaded
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    body.classList.add("loaded");
});
