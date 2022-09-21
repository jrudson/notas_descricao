import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
import Categorias from "./dados/categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {

  constructor(){

    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }
  
  //Desse jeito estamos conseguindo adicionar as categorias ao seu Array (que está em uma outra classe), porém não estamos conseguindo 
  //exibir na tela o valor que digitamos porque não estamos "renderizando" a página novamente 
  
  render() {
    
    return (
      
      <section className="conteudo">
        {/*
          *Maneiras de se conectar com outro elemento, no caso abaixo passando fontes de dados, via propriedades para um elemento
          com isso conseguimos acessar as propriedade em nossos componentes 
        */}
        <FormularioCadastro
          categorias={this.categorias} 
          criarNota={this.notas.adicionarNota.bind(this.notas)} //O "adicionarNotas" vem la da classe 'Notas'.
        />

        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategorias={this.categorias.adicionarCategoria.bind(this.categorias)} //Passando para o "listaDeCategorias" a função de adicionar categorias
            categorias={this.categorias}/*Passando para a 'listaDeCategorias' as categorias que adicionamos aqui*/
          />
        </main>

        <ListaDeNotas
          apagarNota={this.notas.apagarNota.bind(this.notas)} //Renderizando e mandado para o "ListaDeNotas" a função de deletar e com o "this" desta página
          notas={this.notas}
        />

      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;





//    this.state = {
//      notas:[],
//    }

//categorias:["Games", "Música"],
/*criarNota(titulo, texto, categoria){
  
  const novaNota = {titulo, texto, categoria};
  const novoArrayNotas = [...this.state.notas,novaNota]
  const novoEstado = {
    notas:novoArrayNotas
  }

  this.setState(novoEstado)
}


adicionarCategoria(nomeCategoria) {       //Recebendo a informação da categoria que queremos adicionar (a mesma que foi digitada no campo do input que adicionamos). 

  const novoArrayCategorias = [...this.state.categorias, nomeCategoria]      //Os "..." pegam o array de categorias que ja temos (no caso todos os elementos la em cima "Trabalho" e "Esporte")
       //E adiciona o que digitamos
  const novoEstado = {...this.state, categorias:novoArrayCategorias}      //Adicionando o "novoArrayCategorias" ao novoEstado
  this.setState(novoEstado)
}


deletarNota(index) { //Recebendo a posição da nota que clicamos e queremos deletar

  let arrayNotas = this.state.notas; //Pegando o Array com todas as nossas notas
  arrayNotas.splice(index, 1); //Apagando a nota que clicamos
  this.setState({notas:arrayNotas}) //Atualizando nosso estado do array já com a nossa nota excluida
}*/
