// ================= GALLERY DATA =================

const images = [
    {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        title: "Into the Forest",
        category: "nature"
    },

    {
        src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
        title: "City Lights",
        category: "city"
    },

    {
        src: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        title: "Mountain Escape",
        category: "travel"
    },

    {
        src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
        title: "Color Waves",
        category: "abstract"
    },

    {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        title: "Golden Journey",
        category: "travel"
    },

    {
        src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390",
        title: "Urban Life",
        category: "city"
    }
];

// ================= DISPLAY GALLERY =================

const gallery = document.getElementById("gallery");

images.forEach(function (image) {

    const card = document.createElement("div");

    card.classList.add("gallery-card");

   card.innerHTML = `
    <img src="${image.src}" alt="${image.title}">

    <div class="overlay">
        <div class="overlay-content">
            <h3>${image.title}</h3>
            <span>${image.category}</span>
        </div>
    </div>
`;

    gallery.appendChild(card);

});

// ================= FILTER FUNCTIONALITY =================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCategory = button.dataset.category;

        // Active button change
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // Filter images
        const cards = document.querySelectorAll(".gallery-card");

        cards.forEach(function (card, index) {

            if (
                selectedCategory === "all" ||
                images[index].category === selectedCategory
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

// ================= LIGHTBOX FUNCTIONALITY =================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

const galleryImages = document.querySelectorAll(".gallery-card img");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.style.display = "flex";

    });

});

lightboxClose.addEventListener("click", function () {

    lightbox.style.display = "none";

});

// ================= LIGHTBOX NAVIGATION =================

const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentIndex = 0;

galleryImages.forEach(function (image, index) {

    image.addEventListener("click", function () {
        currentIndex = index;
    });

});

function showLightboxImage(index) {

    currentIndex = index;

    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].title;

}

lightboxPrev.addEventListener("click", function () {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showLightboxImage(currentIndex);

});

lightboxNext.addEventListener("click", function () {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showLightboxImage(currentIndex);

});
