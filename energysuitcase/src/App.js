

import React, { Component } from 'react';
import {Jumbotron} from './Jumbotron.js';
import styled from 'styled-components';




const Styles = styled.div`
.App{
  background-color:rgb(250,250,250)
}
`

class  App extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
    
    } 
  }
  render(){
  return (
    <Styles>
    <div className="App">
      {/* <header className="App-header"> */}
      <Jumbotron/>
      {/* </header> */}
    </div>
    </Styles>
  )
}
}

export default App;
