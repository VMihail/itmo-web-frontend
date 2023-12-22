"use strict";

const cssOnMouseDown = "#menu {\n" +
    "    list-style-type: none;\n" +
    "    padding: 0;\n" +
    "}\n";

const cssOnMouseOver = "border: 2px solid black; padding: 10px;";

let onMouse = (paragraph, cssText) => {
    let menu = document.querySelectorAll("#menu li");
    paragraph.style.cssText = cssText;
}

let onMouseOver = (paragraph) => {
    onMouse(paragraph, cssOnMouseOver);
}

let onMouseDown = (paragraph) => {
    onMouse(paragraph, cssOnMouseDown)
}