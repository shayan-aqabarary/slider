const slider = document.querySelector("#slider-container");
const lArr = document.querySelector(".larr");
const rArr = document.querySelector(".rarr");

rArr.addEventListener("click", function () {
    setTimeout(nextImage, 500);
    let firstPic = document.querySelector("img");
    firstPic.style.marginLeft = `-${firstPic.clientWidth}px`;

});

function nextImage() {
    let firstPic = document.querySelector("img");
    let pic1source = firstPic.getAttribute("src");
    let newImage = document.createElement("img");
    newImage.setAttribute("src", pic1source);
    slider.appendChild(newImage);
    firstPic.remove();
}

lArr.addEventListener("click", function () {
    let lastPic = document.querySelectorAll("img")[document.querySelectorAll("img").length - 1];
    let pic5source = lastPic.getAttribute("src");
    lastPic.remove();
    let newImage = document.createElement("img");
    newImage.setAttribute("src", pic5source);
    newImage.style.marginLeft = `-${document.querySelector("img").clientWidth}px`;
    slider.insertBefore(newImage, slider.children[0]);
    setTimeout(previousImage, 1);
});

function previousImage() {
    let firstPic = document.querySelector("img");
    firstPic.style.marginLeft = `0px`;
}