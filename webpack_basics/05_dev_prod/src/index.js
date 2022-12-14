import HelloWorldButton from "./hello-world-button/hello-world-button.js";
import Heading from "./heading/heading.js";

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();

heading.render();
helloWorldButton.render();

if (process.env.NODE_ENV === "production") {
    console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
    console.log("Development mode");
}
