import React from "react";
import ReactDOM from "react-dom/client";
import "./css/main.css";
import "./css/main.scrollbar.css";
import "./css/main.varibles.css";
import "./css/main.basicElements.css";
import App from "./components/App";
import { mountGetPx } from "./util";

if("serviceWorker" in window.navigator) window.navigator.serviceWorker.register("serviceworker.js");

const
    element = document.getElementById("root")!,
    root = ReactDOM.createRoot(element);

mountGetPx(element);

export async function load(){
    root.render(<React.StrictMode><App key={Date.now()} /></React.StrictMode>);
}
load();