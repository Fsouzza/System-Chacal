
const form = document.querySelector("form"),
searchBx = form.querySelector("#bx-pesquisar"),
salvarBtn = form.querySelector("#btn-salvar"),
backBtn = form.querySelector("#btn-voltar"),
searchText = form.querySelector('.search-txt')
allInputs = form.querySelectorAll(".principal input");


const display1 = document.getElementById('principal');
const display1b = document.getElementById('principal2');
const display2 = document.getElementById('secundaria');
const display2b = document.getElementById('secundaria2');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
    
    
    
function initSearch(){
    display1.style.display = "none";
    display1b.style.display = "none";
    btn1.style.display = "none";
    display2.style.display = "block";
    display2b.style.display = "block";
    btn2.style.display = "inline";
}
    
function returnBtn(){
    display2.style.display = "none";
    display2b.style.display = "none";
    btn2.style.display = "none";
    display1.style.display = "block";
    display1b.style.display = "block";
    btn1.style.display = "inline";
}
    
            
searchBx.addEventListener("click", ()=> {
    allInputs.forEach(input => {
        if(input.value == ""){
            initSearch();
            searchText.focus();
        }
    })   
});
    
    
backBtn.addEventListener("click", () => {
    returnBtn();
})
