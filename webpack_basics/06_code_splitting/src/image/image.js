import Zenitsu from "./Zenitsu.png";
import "./image.scss";

class Image {
    render() {
        const img = document.createElement("img");
        img.src = Zenitsu;
        img.alt = "Zenitsu";
        img.classList.add("zenitsu-image");

        const bodyDomElement = document.querySelector("body");
        bodyDomElement.appendChild(img);
    }
}

export default Image;
