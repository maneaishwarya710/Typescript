var butto = document.getElementById("btn");
var handleClick = function (event) {
    console.log("Button clicked", event);
    alert("you clicked the button");
};
butto === null || butto === void 0 ? void 0 : butto.addEventListener("click", handleClick);
