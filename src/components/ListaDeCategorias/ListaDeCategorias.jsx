import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component { 

    constructor() {

        super();
        this.state = {categorias:[]}
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    //Não usamos o "constructor" pois ele logo após faz uma renderização, quando tiver uma atualização (novas props por exemplo), ele chamará a renderização 
    //E ainda atuliza o DOM da página, por isso não devemos chamar "efeitos colaterais" no constructor
    //Por isso usamos o "componentDidMount";

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);       
    }

    _novasCategorias(categorias) {
        this.setState({...this.state, categorias})
    }
 

    _handleEventoInput(event) {

        if(event.key == "Enter") {
            let valorCategoria = event.target.value; //O que nós digitamos no campo de digitação
            this.props.adicionarCategorias(valorCategoria) //Passando o que digitamos para a propriedade "adicionaCategorias" do nosso App.js
        }
    }

    render() {//Colocamos as 'listas' e o 'input' dentro de uma "section" (que é o elemento pai) para que possa compilar
        //Pois sempre precisamos ter apenas um elemento "pai".
        return ( 
        
            <section className="lista-categorias">

                <ul className="lista-categorias_lista"> 
                    {this.state.categorias.map((categoria, index) => { //Exibindo na tela o valor das categorias digitadas
                        return <li key={index} className="lista-categorias_item">{categoria}</li>
                        //Chamando "this.state.categorias.map", o "categorias" duas vezes pois o segundo é um Array.
                    })}
                </ul>

                <input //Campo para que possamos digitar o texto da categoria que desejamos
                    type="text" 
                    className="lista-categorias_input" 
                    placeholder="Adicionar categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                />

            </section>
        )
    }
}

export default ListaDeCategorias;
