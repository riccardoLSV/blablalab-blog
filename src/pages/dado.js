import React from 'react';

export default class PersonList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {numeroEstratto: 0};
  }

  randomNumber() {
    return Math.round(Math.random() * 5) + 1;
  }
  lanciaDado() {
    this.setState({numeroEstratto: this.randomNumber()});
  }

  render() {

    let valore;
    if(this.state.numeroEstratto === 0){
      valore = <small>Lancia il dado cliccando sul pulsante sottostante</small>
    }else{
      valore = <span className="numero-estratto">{this.state.numeroEstratto}</span>
    }

    return (
      <div>
        <p className="dado-text">{valore}</p>
        <button onClick={() => this.lanciaDado()}>Lancia il dado</button>
      </div>
    )
  }
}