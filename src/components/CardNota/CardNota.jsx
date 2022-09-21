import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../assets/imagens/delete.svg" //Precisamos creiar a aplicação com o createReact

class CardNota extends Component {

  apagar() {//Recebendo em uma função o 'indice' que é a posição na qual clicamos, e o "apagarNota" que vem la do "ListaDeNotas" e adicionando
    //o indice dentro do 'apagarNota' para que ele possa apagar a nota na qual clicamos.
    const indice = this.props.indice 
    this.props.apagarNota(indice)
  }
  
  render() {

    return (
      
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)}/*Chamando a função 'apagar' através do "onClick"*//> 
        <h4>{this.props.categoria /*Mostrando em cada card a categoria que selecionamos para a criação do card em específico*/}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
