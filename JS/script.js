//exemplo de funções

const divElement = document.getElementById('div-box')
/*
divElement.addEventListener("click", ()=>{
    console.log(divElement)
});
*/
divElement.addEventListener("click",mostraElemento);
    function mostraElemento(){
        console.log(divElement)
    }

    function soma (){
        let v1 = 5
        let v2 = 2
        console.log(v1 + v2)

    }