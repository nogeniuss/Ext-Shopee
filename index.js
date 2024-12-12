setTimeout( () => {
    const div = document.querySelector('.performance-title-container');

    //seleciona os valores dos elementos e colocaos em um array
    const elementos = document.querySelectorAll('.text.ellipsis');
    console.log('Elementos encontrados :', elementos)
    const elementosArray = Array.from(elementos).map(element => element.textContent);
    console.log('Elementos Array :', elementosArray);

    // Adiciona o botão na tela
    div?.insertAdjacentHTML(
        'beforeend',
        `
      <div class='button-copiar'>
      <button class='shopee-btn'>Copiar</button>
      </div>
  `);

    // Adiciona o evento de clique ao botão
    const button = document.querySelector('.shopee-btn');
    button.addEventListener('click', copiar);

    // Função copiar
    function copiar() {
        const conteudoParaCopiar = elementosArray.join(', ');//treinar await

        if (conteudoParaCopiar) {
            navigator.clipboard.writeText(conteudoParaCopiar)
                .then(() => {
                    window.alert('Conteúdo copiado');
                })
                .catch(err => {
                    console.error('Erro ao copiar: ', err);
                    window.alert('Erro ao copiar');
                });
        } else {
            console.error('Nenhum elemento encontrado para copiar');
            window.alert('Nenhum elemento encontrado para copiar');
        }
    }
}, 7000);//tempo de espera