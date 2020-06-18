let sidebar =document.getElementsByClassName("sidebar")[0];
let btnRemove = document.getElementsByClassName("btn-remove")[0];
let barToggle =  document.getElementsByClassName("nav-toggle")[0];
btnRemove.addEventListener("click", ()=> {
    
    sidebar.classList.add("hide-sidebar");
})

barToggle.addEventListener("click", ()=>{
    sidebar.classList.remove("hide-sidebar");

})