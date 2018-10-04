// buscando todos os alunos
const todosOsAlunos = document.querySelectorAll(".aluno");
// console.log(todosOsAlunos);
// const ana = "ana";
// const net = "nat";
// const den = "den";

// const todasAsAlunas = ["ana, "nat", "den"];
// console.log(toddasAsAlunas);

// imprimindo cada aluno da lista
for (let i = 0; i < todosOsAlunos.length; i++) {
     console.log(todosOsAlunos[i]);

     const aluno = todosOsAlunos[i];
     
     
     // buscar o valor da primeira nota
     const tdPrimeiraNota = aluno.querySelector(".info-notaum");
     let primeiraNota = tdPrimeiraNota.textContent;
     
     // buscar o valor da segunda nota
     const tdSegundaNota = aluno.querySelector(".info-notadois");
     let segundaNota = tdSegundaNota.textContent;
     //console.log(primeiraNota);
     //console.log(segundaNota);
     
     // campo da média
     const mediaFinal = aluno.querySelector(".info-media");
     const mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
     
     mediaFinal.textContent = mediaCalculada.toFixed(2); // quantidade de casas
}
     

