import React from 'react';
import {Carousel,Container} from 'react-bootstrap';
import styled from 'styled-components';
import csuimage from '../smallerRam-image.png'
import other from  '../background.jpg'
const [index, setIndex] = useState(0);
        const handleSelect = (selectedIndex, e) => {
              setIndex(selectedIndex);
            };

const Styles = styled.div`
.carousel{
    display:block;
    width:50%;
    height: 50%;
    margin: auto;
    border-style: dotted;
    activeItem={1}
   
}
.carousel-caption{
    
}
.carousel-inner img {
    margin: auto;
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
`;

export const Gallery = () =>(
    
        
    <div>  
         
<Styles>
<Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
</Styles>
  </div>

)