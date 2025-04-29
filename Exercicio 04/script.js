function confirmarEscolha() {
    const escolha = document.querySelector('input[name="personagem"]:checked');
    const mensagem = document.getElementById('mensagem');

    if (!escolha) {
        mensagem.textContent = "Por favor, selecione um personagem.";
        return;
    }

    if (escolha.value === "mago") {
        mensagem.textContent = "Você escolheu ser um Mago! Prepare-se para lançar feitiços!";
    } else if (escolha.value === "guerreiro") {
        mensagem.textContent = "Você escolheu ser um Guerreiro! Prepare-se para batalhas épicas!";
    } else if (escolha.value === "arqueiro") {
        mensagem.textContent = "Você escolheu ser um Arqueiro! Prepare-se para acertar alvos distantes!";
    }
}