import React from 'react'; 
import csuimage from '../smallerRam-image.png'
import other from  '../background.jpg'
import Carousel from 'react-bootstrap/Carousel'
import {Container} from 'react-bootstrap';
import styled from 'styled-components'
const Styles = styled.div`
.mainpage{
    background-color:rgb(100,120,100);  
}
.paragraph{   
}
.item{
    background-color:gray;
  
    

}
.material{
    
}
.line{
    border-top: 10px soild green;
}
.wrapper{
    
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 10px;
}
.carousel{
    display:block;
    width:auto;
    height: auto;
    margin: auto;
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
`
var array = [   
"https://d33wubrfki0l68.cloudfront.net/b7711971f006689b3b7e0d5cc14f327375505f82/4cb59/playground/uploads/upload/upload/193/image-02.jpg",
"https://d33wubrfki0l68.cloudfront.net/b7711971f006689b3b7e0d5cc14f327375505f82/4cb59/playground/uploads/upload/upload/193/image-02.jpg",
"https://d33wubrfki0l68.cloudfront.net/b7711971f006689b3b7e0d5cc14f327375505f82/4cb59/playground/uploads/upload/upload/193/image-02.jpg",
"https://d33wubrfki0l68.cloudfront.net/b7711971f006689b3b7e0d5cc14f327375505f82/4cb59/playground/uploads/upload/upload/193/image-02.jpg",
"https://d33wubrfki0l68.cloudfront.net/b7711971f006689b3b7e0d5cc14f327375505f82/4cb59/playground/uploads/upload/upload/193/image-02.jpg",
"https://d33wubrfki0l68.cloudfront.net/b7711971f006689b3b7e0d5cc14f327375505f82/4cb59/playground/uploads/upload/upload/193/image-02.jpg"

]
export const Team = () =>(
<Styles>
<div class="mainpage" >
<ul class="list">
 {array.map((each,x)=>{
   if(x % 2 === 0){
     return(

<li className="item">  
<a  className="material">
<hr className="line"></hr>
<div className = "wrapper">
<Carousel>
  <Carousel.Item>
  <img className="people" id={`${x}people`} src={each}></img>
  </Carousel.Item>

  <Carousel.Item>
  <img className="people" id={`${x}people`} src={array[x+1]}></img>
  </Carousel.Item>
</Carousel>
<p className="paragraph">words words words </p>
</div>
</a>
</li>
)
}})}
</ul>
</div>
</Styles>
)