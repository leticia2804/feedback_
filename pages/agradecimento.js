function pegarNota() {
    let nota = localStorage.getItem("nota")

   let paragrafoNota = document.QquerySelector(".paragrafo_nota")

    paragrafoNota.innerHTML = `Você selecionou $ {nota} de 5`
}

pagarNota()