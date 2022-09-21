import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component { //Com a extensão "Component" é possível acessar (alterar) alguns métodos que podemos acessar em momentos específicos de
  //nossos elementos em determinados momentos no ciclo de vida do mesmo, como por exemplo o "componentDidMount"

  constructor() {

    super();
    this.state = {notas:[]}
    this._novasNotas = this._novasNotas.bind(this); //Para que seja apenas uma referência do 'bind(this)' para o inscrever e o desinscrever
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas);
  }

  componentWillUnmount() {
    this.props.notas.desinscrever(this._novasNotas)
  }

  //Como o "setState" tem a função de renderizar todo aquele componente e os filhos do componente (altera a página toda) quando nós chamamos o "setState"
  //Temos que tomar cuidade de quantas vezes chamamos o mesmo, então é recomendado que adicionamos somente na página que iremos usar
  //assim ele só irá ser chamado (consequêntemente só irá alterar) a página quando a chamarmos

  _novasNotas(notas) {
    this.setState({...this.state, notas});
  }

  render() {

    return (

      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => { //Desenhando as notas na tela

          return (

            <li className="lista-notas_item" key={index}>

              <CardNota 
                indice={index} //Passando para o 'CardNota' a posição da nota que clicamos através do "indice" 
                apagarNota={this.props.apagarNota} //Passando a propriedade de "apagarNota" (que vem direto do App.js) para o 'CardNota'
                titulo={nota.titulo} //Passando o título digitado na tela para o "cardNota"
                texto={nota.texto} //Passando o texto digitado na tela para o "cardNota"
                categoria={nota.categoria} //Pegando a informação da categoria de cada nota e passando para o 'cardNota' 
              />

            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
