import "./hello-world-button.scss";

class HelloWorldButton {
    buttonCssClass = "hello-world-button";

    render() {
        const body = document.querySelector("body");
        const button = document.createElement("button");
        button.innerHTML = "Hello world";
        button.classList.add(this.buttonCssClass);
        button.onclick = function () {
            const p = document.createElement("p");
            p.innerHTML = "Hello!!";
            p.classList.add("hello-world-text");
            body.appendChild(p);
        };
        body.appendChild(button);
    }
}

export default HelloWorldButton;
