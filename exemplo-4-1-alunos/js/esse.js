
const todasAlunas = document.querySelectorAll(".aluno");

for (let i = 0; i < todasAlunas.length; i++) {
 
    const alunas = todasAlunas[i];

    //primeira nota
    const tdPrimeiraNota = alunas.querySelector(".info-notaum");
    let primeiraNota = tdPrimeiraNota.textContent;


    //segunda nota
   const tdSegundaNota = alunas.querySelector(".info-notadois");
   let segundaNota = tdSegundaNota.textContent;

    //Média Final
    const mediaFinal = alunas.querySelector(".info-media");
    const mediaCal = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
    
    mediaFinal.textContent = mediaCal.toFixed(2);

   




}


/*const botao = document.querySelector(".bto-principal")

botao.addEventListener("click", function(event){
    event.preventDefault();

    
})*/