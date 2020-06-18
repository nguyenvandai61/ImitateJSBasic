const plusbtns = document.getElementsByClassName("fa-plus-square");
const minusbtns = document.getElementsByClassName("fa-minus-square");
const quesText = document.getElementsByClassName("question-text");

for(let i in plusbtns) {
    minusbtns[i].classList.add("hide");
    quesText[i].classList.add("hide");
    plusbtns[i].addEventListener("click", ()=> {
        quesText[i].classList.remove("hide");
        plusbtns[i].classList.add("hide");
        minusbtns[i].classList.remove("hide");
    })
    minusbtns[i].addEventListener("click", ()=> {
        quesText[i].classList.add("hide");
        plusbtns[i].classList.remove("hide");
        minusbtns[i].classList.add("hide");
    })
};