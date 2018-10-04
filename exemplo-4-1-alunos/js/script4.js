const adicionarAluno = document.querySelector("#adicionar-aluno");

adicionarAluno.addEventListener('click', function (event) {
    event.preventDefault();

    const formularioAluno = document.querySelector("#form-adiciona");

    let aluno = obterDadosDoFormulario(formularioAluno);

    // criando a linha
    let alunoTr = document.createElement("tr");

    let nomeAlunoTd = document.createElement("td");
    let notaUmAlunoTd = document.createElement("td");
    let notaDoisAlunoTd = document.createElement("td");
    let mediaAlunoTd = document.createElement("td");

    nomeAlunoTd.textContent = aluno.nomeAluno;
    notaUmAlunoTd.textContent = aluno.notaUmAluno;
    notaDoisAlunoTd.textContent = aluno.notaDoisAluno;
    // mediaAlunoTd.textContent = calculaMedia(notaUmAluno, notaDoisAluno);
    mediaAlunoTd.textContent = aluno.media;

    alunoTr.appendChild(nomeAlunoTd);
    alunoTr.appendChild(notaUmAlunoTd);
    alunoTr.appendChild(notaDoisAlunoTd);
    alunoTr.appendChild(mediaAlunoTd);

    const tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);

});

function obterDadosDoFormulario(formulario) {
    const objetoAluno = {
        nomeAluno: formulario.nome.value
        , notaUmAluno: formulario.notaum.value
        , notaDoisAluno: formulario.notadois.value
        , media: calculaMedia(formulario.notaum.value, formulario.notadois.value)
    }
    return objetoAluno;
}