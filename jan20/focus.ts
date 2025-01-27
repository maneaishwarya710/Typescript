const inputField=document.createElement("input");
document.body.appendChild(inputField);

inputField.addEventListener("Focus",()=>{
    inputField.style.border="2px solid green";
});

inputField.addEventListener("Blur",()=>{
    inputField.style.border="2px solid black";
});