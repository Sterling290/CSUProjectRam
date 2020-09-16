
import React,{ Component } from 'react';
import {Jumbotron} from './Jumbotron.js';
import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';
 import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import { render } from '@testing-library/react';
import {Container} from 'react-bootstrap';
import {Home} from './pages/home.js';
import {Team} from './pages/Team.js';
import {Timeline} from './pages/Timeline.js';
import {NoMatch} from './navigation/nomatch.js';
import {Layout} from './navigation/Layout.js';
import {Carousell} from './pages/Gallery.js';
import {Documents} from './pages/documents.js';
import {NavigationBar} from './navigation/navigationbar.js';

const Styles = styled.div`
.App{
  padding-left:0;
}
.main{ 
  background-color:rgb(51,80,25);
  //background: #263238;
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
    <div className="App">
      <Styles>
     
    <div className = "main">
    <React.Fragment>
     <Jumbotron />
   {/* <div className = "back"> */}
   <NavigationBar/>
     <Layout>
     <Router>
     <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/team" component={Team} />
     <Route path="/timeline" component={Timeline} />
     <Route path="/gallery" component={Carousell} /> 
     <Route path="/document" component={Documents} /> 
     <Route component={NoMatch} /> 
     </Switch>
     </Router>
     </Layout>
    
     {/* </div> */}
   </React.Fragment>
      </div>

      {/* </header> */}
     </Styles>
    </div>
    
    
  )
};
}

export default App;
