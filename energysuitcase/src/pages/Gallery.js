import React from 'react'; 
import csuimage from '../smallerRam-image.png'
import other from  '../background.jpg'
import Carousel from 'react-bootstrap/Carousel'
import {Container} from 'react-bootstrap';
import styled from 'styled-components'
const Styles = styled.div`
.mainpage{
    background-color:rgb(25,25,25);
}
.carousel{
    display:block;
    width:500px;
    height: 400px;
    margin: auto;
    border-style: dotted;
    activeItem={1}
   fade:True;
   slide:"true";
}
.carousel-item{
    
}
.carousel-caption{
    
    
}
.carousel-inner img {
    display:block;
    background-color:rgb(122,139,120);
    margin: auto;
    &:hover{
        
    }
   
    
   
  }
.carousel-control-prev-icon,  
.carousel-control-next-icon {
    outline: black;
    color:#A52A2A;
    background-image: none;  
  }
.carousel-control-next-icon:after
{
   
  content: '>';
  font-size: 50px;
  color: red;
}
.carousel-control-prev-icon:after {
  content: '<';
  font-size: 50px;
  color: red;
}
.title{ 
    background-image: linear-gradient(to left, rgba(0,0,0,0), rgba(250,250,250,1));
    //background-color:rgb(122,122,122);
    padding-left:10px
}
`;


export const Carousell = () =>(
    <Styles>
    <div className ="mainpage">
 <h1 className ="title" id ="title1">Gallery</h1>
<Carousel>

  <Carousel.Item>
    <img
      className="d-block w-10 h-50"
      src="holder.js/10x50?text=First slide&bg=373940"
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={csuimage}
      alt="Third slide"/>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={other}
      alt="Third slide"/>
  </Carousel.Item>

</Carousel>

</div>
</Styles>
)


  