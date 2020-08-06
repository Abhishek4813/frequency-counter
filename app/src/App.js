import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.Number=React.createRef();
  }
  submit=()=>{
    console.log(this.Number.current.value);
  }
  render(){
  return (
    <div className="App">
      <div className="form">
        <input type="number" min="1" placeholder="Enter A Number" ref={this.Number}/>
        <input type="submit" onClick={this.submit}/></div>
    </div>
  );
}
}

export default App;
