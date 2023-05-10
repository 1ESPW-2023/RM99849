"use strict";

//CRIANDO UM OBJETO
const usuario1 = {
    nomeUsuario:"pt001",
    senhaUsuario:"12345"
}

const usuario2 = {
    nomeUsuario:"pt002",
    senhaUsuario:"12345"
}

//CRIAR UMA LISTA DE OBJETOS
let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

// listaDeUsuarios.forEach( (usuario)=>{
    
//     console.log("NOME DE USUÁRIO : " + usuario.nomeUsuario);
//     console.log("SENHA DE USUÁRIO : " + usuario.senhaUsuario);

// });


addEventListener("click", (evt)=>{
    if(evt.target.id == "btnSubmit"){

        let usuarioInput = document.querySelector("#usuario").value;
        let senhaInput = document.querySelector("#senha").value;


        try{

            listaDeUsuarios.forEach((usuario)=>{

                if(usuarioInput == usuario.nomeUsuario && senhaInput == usuario.senhaUsuario){
            
                    throw "USUÁRIO VALIDADO!";

                }else{

                    throw "SENHA OU NOME DE USUÁRIO INVÁLIDO!";
                }
            });
        }catch(err){
            
        }
           


    }
});