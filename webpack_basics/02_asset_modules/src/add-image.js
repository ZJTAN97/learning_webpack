import Quby from "./quby1.png";

function addImage() {
    const img = document.createElement("img");
    img.alt = "Quby";
    img.width = 300;
    img.src = Quby;
    const body = document.querySelector("body");
    body.appendChild(img);
}

export default addImage;