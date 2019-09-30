import React, {Component} from 'react';
import logo from '../../assets/img/icon-login.png';
import Footer from '../../componentes/Footer/Footer'

class Categoria extends Component {

    constructor(){
        super();
        this.state = {
            lista: [
                // {idCategoria: 1, nome: "Design"},
                // {idCategoria: 2, nome: "Jogos"},
                // {idCategoria: 3, nome: "Meetup"}
            ]
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/categorias')
            .then(response => response.json())
            .then(data => this.setState({lista: data}))
    }

    adicionarItem = (event) => {
        event.preventDefault();
        this.setState({lista:[{idCategoria: 4, nome: "Nova Categoria"}]})
    }

    render(){
        return (
            <div>
                <header className="cabecalhoPrincipal">
                    <div className="container">
                    <img src={logo} />

                    <nav className="cabecalhoPrincipal-nav">
                        Administrador
                    </nav>
                    </div>
                </header>

                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                    <h1 className="conteudoPrincipal-cadastro-titulo">Categorias</h1>
                    <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Título</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo">
                            {this.state.lista.map(Element => {
                                return (
                                    <tr>
                                        <td>{Element.idCategoria}</td>
                                        <td>{Element.nome}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        </table>
                    </div>

                    <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">
                        Cadastrar Categoria
                        </h2>
                        <form>
                        <div className="container">
                            <input
                            type="text"
                            className="className__categoria"
                            id="input__categoria"
                            placeholder="tipo do evento"
                            />
                            <button
                            onClick={this.adicionarItem}
                            id="btn__cadastrar"
                            className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                            >
                            Cadastrar
                            </button>
                        </div>
                        </form>
                    </div>
                    </section>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Categoria;