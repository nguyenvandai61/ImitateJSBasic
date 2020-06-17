// Get eles of 3 buttons
let valEle;
let val;
let desBtn, resBtn, incBtn;

desBtn = document.getElementById("btnDes"); 
resBtn = document.getElementById("btnRes");
incBtn = document.getElementById("btnInc");

valEle = document.getElementById("counterVal");



descreaseValue = () => {
    val--;
    valEle.innerText = val;
}

resetValue = () => {
    val=0;
    valEle.innerText = val;
}

increaseValue = () => {
    val++;
    valEle.innerText = val;  
}


paintValue = () => {
    let color;
    if (val > 0) color = "green";
        else if (val < 0) color = "red";
        else color = "blue";
    valEle.style.color = color;
}

val = parseInt(valEle.innerText);
console.log(val);
desBtn.addEventListener("click",() => {
    descreaseValue();
    paintValue();
})

resBtn.addEventListener("click",() => {
    resetValue();
    paintValue();
})
incBtn.addEventListener("click",() => {
    increaseValue();
    paintValue();
})
