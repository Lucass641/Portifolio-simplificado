const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
let barraAnimada = document.querySelectorAll('.bar');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});
function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}


let menu = document.querySelector('.menu');
let botaoMenu = document.querySelector('.btn-menu');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    barraAnimada.forEach(barra =>{
        barra.classList.toggle('animate');
        
        window.onscroll = () => {
            menu.classList.remove('ativo');
            barraAnimada.forEach(barra =>{
                barra.classList.remove('animate')
            });
        };

    });

});





