const butto=document.getElementById("btn") as HTMLButtonElement;
const handleClick=(event:MouseEvent):void=>{
    console.log("Button clicked", event);
    alert("you clicked the button");
}

butto?.addEventListener("click", handleClick);