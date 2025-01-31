var duvidas = document.querySelectorAll('.duvida')

duvidas.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        //drop down a aba de perguntas
        duvida.classList.toggle('ativa')
    })
})