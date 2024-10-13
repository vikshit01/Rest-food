const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const MainImage = document.getElementById("food");
const menu = document.getElementById("menu");

const items = [
    "./pizaa.png",
    "./burger.png",
    "./sandwich.png",
    "./fries.png",
    "./SpringRoll.png",
    "./Momos.png",
    "./Noodles.png",
    "./Pasta.png"
];

let str = "";

// Toggle Hamburger Menu
hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
    hamburger.classList.toggle('show');
});

// Set default main image
MainImage.style.backgroundImage = `url(${items[0]})`;

window.addEventListener("load", () => {
    items.forEach((item, index) => {
        str += `
        <div class="food_image">
            <img src=${item} class="image" alt="item${index + 1}"/>
        </div>
        `;
    });
    menu.innerHTML += str;

    const images = document.getElementsByClassName("image");
    const imageArray = Array.from(images);

    imageArray.forEach(image => {
        image.addEventListener("click", (e) => {
            const clickedImage = e.target.src;
            MainImage.style.backgroundImage = `url(${clickedImage})`;
        });
    });
});