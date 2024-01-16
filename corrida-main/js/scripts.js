
function showGameDetails() {
        // Obtenha a referência ao container do jogo clicado
        var gameId = prompt("Enter the game ID (e.g., naruto, mk, etc.):");
        var gameContainer = document.getElementById(gameId);

        // Verifique se o container foi encontrado
        if (gameContainer) {
            // Exiba os detalhes do jogo (você pode ajustar conforme necessário)
            alert("Game Details:\n" +
                "Name: " + gameContainer.querySelector(".fw-bolder").innerText + "\n" +
                "Price: " + gameContainer.querySelector("p").innerText);
        } else {
            alert("Game not found. Please enter a valid game ID.");
        }
    }
    // Adiciona um ouvinte de evento ao botão com o ID "userButton"
    document.getElementById('userButton').addEventListener('click', function() {
        // Redireciona para a página /perfil.html
        window.location.href = '/perfil.html';
    });