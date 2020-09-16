import React from 'react'; 
import csuimage from '../smallerRam-image.png'
import other from  '../background.jpg'
import {Container} from 'react-bootstrap';
import styled from 'styled-components'
const Styles = styled.div`
.mainpage{
    background-color:rgb(25,125,225);
}
.title{ 
    background-image: linear-gradient(to left, rgba(0,0,0,0), rgba(250,250,250,1));
    //background-color:rgb(122,122,122);
    padding-left:10px
}
`;


export const Documents = () =>(
    <Styles>
    <div className ="mainpage">
 <h1 className ="title" id ="title1">documents</h1>




 

</div>
</Styles>
)