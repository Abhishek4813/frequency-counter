import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.Number=React.createRef();
  }
  submit=()=>{
    fetch("http://localhost:8000",{
      method:'post',
      body:JSON.stringify({Number:this.Number.current.value}),
      headers:{
        "content-Type":"application/json",
        'credentials':'cross-origin',
      }
    })
    .then(response=>response.json())
    .then(data=>console.log(data));
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
