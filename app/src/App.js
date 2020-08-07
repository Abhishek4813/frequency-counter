import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.Number=React.createRef();
    this.state={
      isLoading:false,
      data:[],
    };
  }
  retry=()=>{
    this.setState({
      isLoading:false,
      data:[]
    })
  }
  submit=()=>{
    this.setState({
      isLoading:true
    })
    fetch("http://localhost:8000",{
      method:'post',
      body:JSON.stringify({Number:this.Number.current.value}),
      headers:{
        "content-Type":"application/json",
        'credentials':'cross-origin',
      }
    })
    .then(response=>response.json())
    .then(data=>{
        this.setState({
          isLoading:false,
          data:data,
        })
    })
  }
  render(){
    if(this.state.isLoading===true){
      return(<div className="App">
        <div className="form">
            <img src="/loader.gif"/>
            <div className="loading-text">Loading . . .</div>
        </div>
      </div>)

    }
    else if(this.state.data.length===0){
      return (
        <div className="App">
        <div className="form">
        <input type="number" min="1" placeholder="Enter A Number" ref={this.Number}/>
        <input type="submit" onClick={this.submit}/></div>
        </div>
  );
    }
  else{
    if(this.state.data[0].value===""){
      return(
        <div className="App">
        <div className="form">
            <div className="loading-text">Falied to Fetch the File please try again</div>
            <input type="submit"  value="Try Again" onClick={this.retry}/>
        </div></div>
      )
    }
    var data=this.state.data.map((val)=>{
      return(
        <tr>
          <td>{val.value}</td>
          <td>{val.count}</td>
        </tr>
      )
    })
    return(
          <div className="App">
          <table className="form">
          <thead>
            <th colSpan="2">Top {this.state.data.length} words used in the file</th>
          </thead>
            <tr>
              <th>Word</th>
              <th>Frequency</th>
            </tr>
            {data}
            <input type="submit"  value="Back" onClick={this.retry}/>
      </table>
    </div>
    )
  }
}
}

export default App;
