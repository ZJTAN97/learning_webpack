import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app-root");
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <h1>Example of setting up React with TS without CRA</h1>
    </React.StrictMode>
);
