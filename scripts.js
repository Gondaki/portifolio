const abrirCaixaBtn = document.getElementById('abrirCaixaBtn');
const fecharCaixaBtn = document.getElementById('fecharCaixaBtn');
const caixa = document.getElementById('caixa');
const Projetos = document.getElementById('Projetos')

// Função para abrir a caixa
function abriCaixa() {
    caixa.style.display = 'block'; // Exibe a caixa
}

// Função para fechar a caixa
fecharCaixaBtn.onclick = function() {
    caixa.style.display = 'none'; // Oculta a caixa
}
