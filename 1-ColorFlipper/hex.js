let wrapper = document.getElementsByClassName("container")[0];
let colorEle = document.getElementsByTagName("span")[0];
let btnEle = document.getElementsByClassName("btn-click")[0];

let colorText = colorEle.innerText;
wrapper.style.backgroundColor = colorText;
console.log(btnEle)

// Random color
pickRandomColor = () => {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let newColor = rgb2hex(r, g, b);
    return newColor;
}


rgb2hex = (r, g, b) => {
    return '#'+ ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

changeBackgroundColor = (color) => {
    colorEle.innerText = color;
    wrapper.style.backgroundColor = color;
}

// Event Handler
btnEle.addEventListener("click", ()=>{
    console.log("click");
    let newColor = pickRandomColor();
    changeBackgroundColor(newColor);
});


