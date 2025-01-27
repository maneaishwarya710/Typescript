var inputField = document.createElement("input");
document.body.appendChild(inputField);
inputField.addEventListener("Focus", function () {
    inputField.style.border = "2px solid green";
});
inputField.addEventListener("Blur", function () {
    inputField.style.border = "2px solid black";
});
