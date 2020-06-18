let modalbox =document.getElementsByClassName("modalbox")[0];
let btnRemove = document.getElementsByClassName("btn-remove")[0];
let btnOpenModal = document.getElementsByClassName("btn-modal")[0];
btnRemove.addEventListener("click", ()=> {
    modalbox.classList.remove("show");
})
btnOpenModal.addEventListener("click", () => {
    modalbox.classList.add("show");

})
