import HelloWorldButton from "./hello-world-button/hello-world-button.js";
import Heading from "./heading/heading.js";
import React from "react";

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();

heading.render("1");
helloWorldButton.render();

if (process.env.NODE_ENV === "production") {
    console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
    console.log("Development mode");
}
