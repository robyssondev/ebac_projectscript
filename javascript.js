document.getElementById('idadeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const idadeAtual = parseFloat(document.getElementById('idade').value);
    const idadeInicioTrabalho = parseFloat(document.getElementById('idadeInicioTrabalho').value);
    const mensagem = document.getElementById('mensagem');

    if (idadeAtual > idadeInicioTrabalho) {
        mensagem.textContent = "Formulário válido: Idade atual é maior que a idade quando começou a trabalhar.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Formulário inválido: Idade atual deve ser maior que a idade quando começou a trabalhar.";
        mensagem.style.color = "red";
    }
});
