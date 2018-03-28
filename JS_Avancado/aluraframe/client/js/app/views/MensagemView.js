class MensagemView extends View {

    // não é necessario, somente se essa view tiver algum parametro a mais exemplo abaixo:
    /*
    constructor(elemento, parametro2) {
        super(elemento);
        this._parametro2 = parametro2;
    }
    */

    template(model) {
        // return `<p class="alert alert-info">${model.texto}</p>`
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '';
    }
}