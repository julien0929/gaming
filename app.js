
// ------------------------- SCROLL ANIMATION -------------------------------
window.addEventListener("scroll", () => {
let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

    console.log(scrollValue);
    if(scrollValue > 0.23) {
        text.style.opacity = 1;
        text.style.transform = "none";
    }

    if(scrollValue > 0.34) {
        iconContainer.style.opacity = 1;
        iconContainer.style.transform = "none";
    }

    if(scrollValue > 0.50) {
        news.style.opacity = 1;
        news.style.transform = "none";
    }

    if(scrollValue > 0.57) {
        newContainer.style.opacity = 1;
        newContainer.style.transform = "none";
    }

    if(scrollValue > 0.79) {
        contactList.style.opacity = 1;
        contactList.style.transform = "none";
    }

    if(scrollValue > 0.91) {
        contactMedia.style.opacity = 1;
        contactMedia.style.transform = "none";
    }
});
