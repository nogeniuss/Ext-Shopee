setTimeout(() => {

    //codigo tela de anuncio ads
    const divads = document.querySelector('.performance-title-container');

    // Seleciona os valores dos elementos e coloca-os em um array
    const elementos = document.querySelectorAll('.text.ellipsis');//impressões, cliques, gmv, investimento e roas
    const elemento3 = document.querySelectorAll('.title.no-cursor');//colocação
    const elemento4 = document.querySelectorAll('.ellipsis-content.single');//orçamento



//utilizamos o arrayfrom, para cada conjunto de elementos e em seguida, cobinamos tudo em um unico array usando
//o operador de espelhamento (...).
    const elementosArray = [
        ...Array.from(elementos, element => element.textContent),
        ...Array.from(elemento3, element => element.textContent),
        ...Array.from(elemento4, element => element.textContent)

    
    ]
    // Adiciona o botão na tela
    if (divads) {
        // Cria uma div com class
        const divbutton = document.createElement('div');
        divbutton.className = "button-copiar";

        // Cria o btn
        const buttoncopiar = document.createElement('button');
        buttoncopiar.textContent = "Copiar"; // Nome do button
        buttoncopiar.className = "shopee-btn"; // Class

        // Adiciona o button na div
        divbutton.appendChild(buttoncopiar);
        divads.appendChild(divbutton); // Adiciona a div que contém o botão à div principal

        // Adiciona o evento de clique ao botão
        buttoncopiar.addEventListener('click', copiar_ads);
    };

    // Função copiar anuncios ads
    function copiar_ads() {
        const conteudoParaCopiar = elementosArray.join(', ');

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
    };

    //codigo tela de produtos

    const nome_produto = document.querySelectorAll('.product-name-wrap');//nome
    const Vendas_produto = document.querySelectorAll('.list-view-sales');//vendas
    const preco_produto = document.querySelectorAll('.list-view-price.span');//preço
    const imagem_produto = document.querySelectorAll('.product-image');//imagem
    const estoque_produto = document.querySelectorAll('.stock-text');//estoque

    const divanuncio = document.querySelector('.form')//div do button

    const elementosArray2 = [
        ...Array.from(nome_produto, element => element.textContent),
        ...Array.from(Vendas_produto, element => element.textContent),
        ...Array.from(preco_produto, element => element.textContent),
        ...Array.from(estoque_produto, element => element.textContent),
        ...Array.from(imagem_produto, element => element.textContent)
    ]

    if (divanuncio) {
        // Cria uma div com class
        const divbuttonanuncio = document.createElement('div');
        divbuttonanuncio.className = "button-copiar";

        // Cria o btn
        const buttoncopiaranuncio = document.createElement('button');
        buttoncopiaranuncio.textContent = "Copiar"; // Nome do button
        buttoncopiaranuncio.className = "shopee-btn"; // Class

        // Adiciona o button na div
        divbuttonanuncio.appendChild(buttoncopiaranuncio);
        divanuncio.appendChild(divbuttonanuncio); // Adiciona a div que contém o botão à div principal

        // Adiciona o evento de clique ao botão
        buttoncopiaranuncio.addEventListener('click', copiar_anuncio);
    };

    function copiar_anuncio() {
        const elementosArray2 = [];

        //itera sobre os produtos e coleta os dados
        //precisamos criar um array de cada produto, dentro do array elementos2
        for(let i = 0; i < nome_produto.length; i++) {
            const imagem = imagem_produto[i] ? imagem_produto[i].src : 'Não disponivel'; //obtem a URL da imaem
            const nome = nome_produto[i] ? nome_produto[i].textContent : 'Não disponivel';
            const estoque = estoque_produto[i] ? estoque_produto[i].textContent : 'Não disponivel';
            const vendas = Vendas_produto[i] ? Vendas_produto[i].textContent: 'Não Disponivel';
            const preco = preco_produto[i] ? preco_produto[i].textContent : 'Não disponivel';
            // adiciona os dados do produto em uma linha
            elementosArray2.push([imagem,nome,estoque,vendas,preco]);
    };

    const conteudoParaCopiar = elementosArray2.join('\n'); //junta os dados em linhas separadas

    if(conteudoParaCopiar){
        navigator.clipboard.writeText(conteudoParaCopiar)
        .then(()=> {
            window.alert('Conteudo Copiado');
        })
        .catch(err => {
            console.error('Erro ao copiar conteúdo:', err);
            window.alert('Erro ao copiar');
        })
    }else{
        window.alert('Nenhum produto encontrado');
    };

}}, 10000);