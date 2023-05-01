let fullImageContainer = document.getElementById("full_image_container");
let fullImage = document.getElementById("full_image");
let navbar = document.getElementById("nav_links");

function openFullImage(path) {
    fullImageContainer.style.display = "flex";
    fullImage.src = path;
}

function closeFullImage() {
    fullImageContainer.style.display = "none";
}

document.addEventListener("keydown", function(e) {
    if(e.keyCode == 27){
        closeFullImage();
    }
});

if(fullImageContainer) fullImageContainer.addEventListener("click", function(e) {
    closeFullImage();
});

document.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        navbar.classList.add("nav_scroll");
    } else {
        navbar.classList.remove("nav_scroll");
    }
});