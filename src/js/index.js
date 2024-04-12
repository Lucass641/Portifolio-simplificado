const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

let menu = document.querySelector('.menu')
let botaoMenu = document.querySelector('.btn-menu');


botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
    });
function esconderBotao(){
botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos(){
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

window.onscroll = () => {
    menu.classList.remove('ativo');
};


