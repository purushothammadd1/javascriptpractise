let colorContainerParent = document.getElementById("colorContainer");

for(let i=0;i<300;i++){
    let colorContainer=document.createElement("div");
    colorContainer.classList.add("color-container");
    colorContainerParent.appendChild(colorContainer);
}
let allDivs =document.querySelectorAll(".color-container");

allDivs.forEach((div) =>{
    let newColor=randonColor();
    div.style.backgroundColor=newColor;
    div.innerText=newColor;
})

function randonColor(){
    let str="0123456789abcdef";
    let colorStr="#";
    for(let i=0;i<6;i++){
        let randomIndex =math.floor(Math.random() * str.length);

        colorStr += str[randomIndex];
    }
    return colorStr;
}

randonColor;