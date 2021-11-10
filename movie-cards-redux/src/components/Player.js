import React from 'react';
import { connect } from 'react-redux';

class Player extends React.Component {
  render() {
    const { selectedCategory, selectedMovie } = this.props;
    return (
      <div>
        <h1>{selectedCategory}</h1>
        <h2>{selectedMovie}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedMovie: state.player.selectedMovie,
  selectedCategory: state.player.selectedCategory,
});

export default connect(mapStateToProps)(Player);

// Consultar o estado -------------------------------------------------------------------------

// 1 - Conectar o Componente
// export default connect()(Player);

// 2 - Fazer console das props, mostrando que o dispatch já está disponível
// console.log(this.props)

// 3 - Explicar mapStateToProps
// Uma função que vai mapear o que queremos usar do `state` para as `props` do component
// Ela recebe o estado, e deve retornar um objeto com as informações do `state` que usaremos
// const mapStateToProps = (state) => ({ selectedMovie: state.player.selectedMovie });

// 4 - Usar o mapStateToProps no connect
// export default connect(mapStateToProps)(Player);

// 5 - Fazer console das props, mostrando que o dispatch E o estado estão disponíveis
// console.log(this.props)

// 6 - Usar o estado para criar a view
