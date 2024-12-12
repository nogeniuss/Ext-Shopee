setTimeout(() => {
    const div = document.querySelector('.performance-title-container');

    // Seleciona os valores dos elementos e coloca-os em um array
    const elementos = document.querySelectorAll('.text.ellipsis');
    console.log('Elementos encontrados:', elementos);
    window.alert(elementos)
    const elementosArray = Array.from(elementos).map(element => element.textContent);
    console.log('Elementos Array:', elementosArray);

    // Adiciona o botão na tela
    if (div) {
        // Cria uma div com class
        const divbutton = document.createElement('div');
        divbutton.className = "button-copiar";
        window.alert('div')

        // Cria o btn
        const buttoncopiar = document.createElement('button');
        buttoncopiar.textContent = "Copiar"; // Nome do button
        buttoncopiar.className = "shopee-btn"; // Class
        window.alert('Button')

        // Adiciona o button na div
        divbutton.appendChild(buttoncopiar);
        div.appendChild(divbutton); // Adiciona a div que contém o botão à div principal
        window.alert('Button adicionado')

        // Adiciona o evento de clique ao botão
        buttoncopiar.addEventListener('click', copiar);
        window.alert('eventlistener')
    }

    // Função copiar
    function copiar() {
        const conteudoParaCopiar = elementosArray.join(', '); // Treinar await

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
}, 10000); // Tempo de espera