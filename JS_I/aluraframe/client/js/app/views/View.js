class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    _template() {
        throw new Error('O template deve ser implementado em toda view que herda de View.js');
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}