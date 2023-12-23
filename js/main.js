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

let cssOnCurrentPage = "color: red;";
let predId = "menu#firstItem";
let element = document.getElementById(predId);
element.cssText = cssOnCurrentPage;


let onClick = (paragraph) => {
    console.info("currentId = " + paragraph.id);
    let currentId = paragraph.id;

}

// let hrefArray = window.location.pathname.split("/");
// let fileName = hrefArray[hrefArray.length - 1];
// console.info("current file name: " + fileName);
// switch (fileName) {
//     case "index.html":
//         console.log(1);
//         break;
//     case "aboutUs.html":
//         console.log(2);
//         break;
//     case "topForWeek.html":
//         console.log(3);
//         break;
// }