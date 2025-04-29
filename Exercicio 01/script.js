const numeroSorteado = Math.floor(Math.random() * 10) + 1;

        function verificar() {
            const palpite = parseInt(document.getElementById("palpiteUsuario").value);
            const resultado = document.getElementById("resultado");

            if (palpite === numeroSorteado) {
                resultado.textContent = "Você acertou!";
            } else if (palpite < numeroSorteado) {
                resultado.textContent = "O número é maior.";
            } else {
                resultado.textContent = "O número é menor.";
            }
        }