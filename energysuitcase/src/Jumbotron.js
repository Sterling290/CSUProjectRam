import React from 'react'; 
import {Jumbotron as Jumbo,Container} from 'react-bootstrap';
import styled from 'styled-components'
import backgroundImage from './orangesky.jpg'
import csuimage from './smallerRam-image.png'
const Styles = styled.div`
.jumbo{
background: url(${backgroundImage}) no-repeat fixed bottom;
background-size: cover;
// color:#ccc
 height:430px;
position:relative;
// z-index -2;
margin-bottom: 0px ;
}
.overlay{
    // background-color:#A52A2A;
    opacity: 0.6;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index -1;
}
.ramimage{
    width: 5%
    heigth: 5%
    float:left

}
.projectName{
    
    
    
}
`;
export const Jumbotron = () =>(
<Styles>
<Jumbo fluid className="jumbo">

<div className="overlay"></div>
<br></br>
<hr></hr>
<Container>
    <div>
    <img className="ramimage"src ={csuimage}></img>
    
    <h1 className ="projectName">Energy Backpack</h1>
    </div>
</Container>
<hr></hr>
</Jumbo>
</Styles>


)