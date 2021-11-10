import React from 'react';
import { connect } from 'react-redux';
// import { selectMovie as selectMovieAction } from '../store/actions';

class Sidebar extends React.Component {
  render() {
    const { categories = [], selectMovie } = this.props;
    console.log(this.props);

    return (
      <aside>
        {
          categories.map((category) => (
            <div key={ category.id }>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map((movie) => (
                    <li key={ movie.id }>
                      {movie.title}
                      {' '}
                      was released in
                      {' '}
                      {movie.released}

                      <button
                        type="button"
                        onClick={
                          () => selectMovie(category.name, movie.title)
                        }
                      >
                        Select

                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    );
  }
}

// const mapStateToProps = (state) => ({ categories: state.player.categories });
// const mapDispatchToProps = (dispatch) => ({
//   selectMovie: (category, movie) => dispatch(selectMovieAction(category, movie)),
// });

export default connect()(Sidebar);

// Consultar o estado -------------------------------------------------------------------------

// 1 - Conectar o Componente
// export default connect()(Sidebar);

// 2 - Fazer console das props, mostrando que o dispatch já está disponível
// console.log(this.props)

// 3 - Explicar mapStateToProps
// Uma função que vai mapear o que queremos usar do `state` para as `props` do component
// Ela recebe o estado por parâmetro e deve retornar um objeto com as informações do `state` que devem estar disponíveis via props
// const mapStateToProps = (state) => ({ categories: state.player.categories });

// 4 - Usar o mapStateToProps no connect
// export default connect(mapStateToProps)(Sidebar);

// 5 - Fazer console das props, mostrando que o dispatch E o estado estão disponíveis
// console.log(this.props)

// 6 - Usar o estado para criar a view

// Modificar o estado -------------------------------------------------------------------------

// 1 - Ao clicar no filme, disparar ação que seleciona o filme e a categoria
// 1.1 - Lembrar que o dispatch está disponível nas props
// const { categories = [], dispatch } = this.props
// 1.2 - Criar o onClick
// onClick={() => dispatch(selectMovie(category.name, movie.title))}

// 2 - Explicar o mapDispatchToProps
// Uma função que vai mapear os dispatchs específicos para as `props` do componente
// Ela recebe o dispatch por parâmetro e deve retornar um objeto com as funções que fazem dispatchs específicos
// const mapDispatchToProps = (dispatch) => ({
//   selectMovie: (category, movie) => dispatch(selectMovie(category, movie)),
// });

// 3 - Usar a selectMovie no onClick
// Primeiro precisamos renomear a Action Creator pra selectMovieAction
// import { selectMovie as selectMovieAction } from '../store/actions';
// () => selectMovie(category.name, movie.title)
