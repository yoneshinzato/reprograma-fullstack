const email = document.getElementById("newsInputEmail");
const inputar = document.querySelector(".news__button");

inputar.addEventListener("click", function(event){
    event.preventDefault();
    if(email.value == ""){
        alert("Digite um e-mail válido");
    } else{
    //cria um span para colocar um conteúdo dentro
    const resposta = document.createElement("span");
    //pegar span e colocar um conteúdo nele
    const pegarResposta = document.createTextNode("O e-mail foi cadastrado com sucesso");
    //pegar o texto e o coloca dentro do span
    resposta.appendChild(pegarResposta);

    const respostaSucesso = email.parentNode;
    console.log(respostaSucesso);
    respostaSucesso.insertBefore(resposta, email);
    }

    
    


})

// pegar o primeiro botão input, element by id numa const

// querySelector newsbutton

// colocar addeventlistenet com click 

// function com event pra não apagar o email 

// event.preventdefault() - evita apagar o conteúdo digitado

// const resposta = document.createElement("span"); - criar elemento do tipo span, mas poderia ser um paragráfo ou qualquer olutro elemento sendo criado

// const respostaMensagem = document.createTextNode("Email cadastrado com sucesso");

// coloca o conteúdo dentro do texto que criouo
// resposta.appenChild(respostaMensagem);

// //<span>Email cadastrado com sucesso</span>
// //const p = document.querySelector("#parResposta");
// //p.textContent = 'Email cadastrado com sucesso."

// const newsForm = document.querySelector(".news__form");
// newsForm.insertBefore(resposta, input.parentNode);

// console.log do input do botao

// verificar se o email foi digitado

// foi digitado - 

// não foi digitado - 

// ao digitar o email, clica em enviar e aparece a frase "Email cadastrado com sucesso"