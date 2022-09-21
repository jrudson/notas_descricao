export default class Categorias {

    constructor() {

        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f!== func); //Filtrando todas as funções que não são as que recebemos por parâmetro
    }

    notificar() {
        this._inscritos.forEach(func => {//"Varrendo" a lista com um 'forEach' e executando cada "função" que foi passada para ele
            func(this.categorias);
        });
        //E ainda passando a informação do que foi alterado
    }

    //Transformando a classe em "Observable" 

    adicionarCategoria(novaCategoria) {

        this.categorias.push(novaCategoria);
        this.notificar();
    }
}
