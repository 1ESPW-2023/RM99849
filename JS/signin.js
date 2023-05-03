const eyePass = document.querySelector(".eye");

eyePass.addEventListener("click", ()=>{
    const inputPass = document.querySelector("#idPass");

    if(inputPass.getAttribute("type") == "password"){
        inputPass.setAttribute("type","text");
        eyePass.setAttribute("class","fa fa-eye eye");
    }else{
        inputPass.setAttribute("type","password");
        eyePass.setAttribute("class","fa fa-eye-slash eye");
    }

});
