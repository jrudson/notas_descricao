import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

  //O "FormularioCadastro" só mudará (atualizará) quando tivermos uma nova categoria adicionada
  //Não importa quantas notas adicionamos a função de renderização dele só irá chamar quando tivermos uma nova 'categoria'
  //Assimevitamos um "gargalho" em nosso sistema
  //O mesmo acontece com as outras classes

  constructor(props) {

    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
    this.state = {categorias:[]}
    this._novasCategorias = this._novasCategorias.bind(this); //O "bind" é uma função que irá devolver uma função
    //Para termos a mesma referência tanto para o 'inscrever', quanto pro 'desinscrever' chamamos o bind uma só vez aqui no constructor
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() { //Chamado toda vez que nosso componente for destruido
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias});
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value; //Pegando o valor que digitamos na categoria
  }

  _handleMudancaTitulo(evento) {

    evento.stopPropagation();
    this.titulo = evento.target.value; //Pegando o valor que digitamos no Título
  }

  _handleMudancaTexto(evento) {

    evento.stopPropagation();
    this.texto = evento.target.value; //Pegando o valor que digitamos no Texto
  }

  _criarNota(evento) {

    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria); //Enviando o valor do "texto", "título" e "categoria" para o 'criarNota' do App.js
  }

  render() {

    return (
      
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >

        <select 
          onChange={this._handleMudancaCategoria.bind(this)} 
          className="form-cadastro_input"
        >

          <option>
            Sem categoria
          </option>

          {this.state.categorias.map((categoria, index) => { //Para que possamos desenhar a tag na tela (no caso cada uma das tags que digitamos no input)
          //E mostar (guardar) dentro do option.
            return <option key={index}>{categoria}</option>
          })}

        </select>

        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />

        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />

        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
        
      </form>
    );
  }
}

export default FormularioCadastro;
