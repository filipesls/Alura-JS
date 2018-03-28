class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        //cria um Arquivo com as suas propriedades;
        // primeiro recebo os dados e divido em um array e transformo tudo em caixa alta
        // move para helper :
        // let dados = this._inputDados.value.split('/').map(item => item.toUppercase())
        // let arquivo = new Arquivo(...dados);
        let arquivo = ArquivoHelper.cria(this._inputDados.value)
        
        // exibe mensagem no console com os dados do arquivo.
        console.log(`Dados do arquivo: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`);

        this._limpaFormulario();
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}