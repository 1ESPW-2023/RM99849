/*
//Exemplo de Funções
const divElement = document.getElementById("div-box")

// divElement.addEventListener("click", ()=>{
//     console.log(divElement);
// });

divElement.addEventListener("click", mostraElemento);

function mostraElemento() {
    console.log(divElement)
}

function soma() {
    let n1 = 10
    let n2 = 5
    console.log(n1 + n2)
}
*/
 
//convertendo node.list em array 
const arrayElement = [document.querySelectorAll("li")];

arrayElement.map( (el,key)=>{
    if(el.textContent.indexOf("1",0)){
        el.textContent = `${key+1} [item-10]`
    }
} )

