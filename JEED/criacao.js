document.addEventListener('DOMContentLoaded', () => {
    const modalidades = document.querySelectorAll('.modalidade');
    const errorMessage = document.getElementById('error-message'); // Elemento para mensagens de erro
    const criarCampeonatoButton = document.getElementById('criar-campeonato');
 
    const removeErrorStyles = (element) => {
        element.classList.remove('input-error');
    };
 
    const addErrorStyles = (element) => {
        element.classList.add('input-error');
    };
 
    modalidades.forEach(modalidade => {
        modalidade.addEventListener('click', () => {
            modalidades.forEach(mod => mod.classList.remove('selected'));
            modalidade.classList.add('selected');
        });
    });
 
    criarCampeonatoButton.addEventListener('click', function(event) {      
 
        // Limpar a mensagem de erro
        errorMessage.textContent = '';
 
        // Verificar se uma modalidade foi selecionada
        const modalidadeSelecionada = document.querySelector('.modalidade.selected');
        if (!modalidadeSelecionada) {
            errorMessage.textContent = 'Por favor, selecione uma modalidade.';
            return false; // Não prosseguir se a modalidade não foi selecionada
        }
            
           
           
 
        const numeroEquipes = document.getElementById('numero-equipes');
        let numeroEquipesValue = parseInt(numeroEquipes.value);
 
        // Tudo validado corretamente, redirecionar para a página correspondente
        let url;
        switch (numeroEquipesValue) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                url = 'http://127.0.0.1:5500/equipes8.html';  // Modifique esta URL conforme necessário
        }
 
        window.location.href = url;
    });
});

