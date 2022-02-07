import React, { Component } from "react";

class teste extends Component {
  mensagem = () => {
    return ["Olá mundo", "Oi tudo bem"];
  };
  calc = (x) => {
    return [x + 3, x * 2];
  };
  render() {
    return (
      <div>
        <h1>{this.mensagem()[0]}, {this.mensagem()[1]}</h1>.
        <h2>{this.calc(2)[0]}, {this.calc(2)[1]}</h2>
      </div>
    );
  }
}

export default teste;