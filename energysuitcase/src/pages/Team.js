import React from 'react'; 
import csuimage from '../smallerRam-image.png'
import other from  '../background.jpg'
import Carousel from 'react-bootstrap/Carousel'
import {Container} from 'react-bootstrap';
import styled from 'styled-components'
import sterlingcutout from './cutout.png'
import images from './pageImages/img_Main.png'
import kyle from './pageImages/image1.jpg'
import person from './pageImages/image2.png'
import hunter from './pageImages/image5.jpg'
import company from './pageImages/image4.png'
import josh from './pageImages/image6.jpg'

const Styles = styled.div`

.list{
  background-color:rgb(100,100,100);
  padding:10px
}
.mainpage{
    background-color:rgb(100,120,100);  
}
.people{
  height: 350px;
  width: 350px;
  &:hover{
    border: solid 1px #CCC;
    -moz-box-shadow: 5px 5px 0px #999;
    -webkit-box-shadow: 5px 5px 0px #999;
        box-shadow: 5px 5px 0px #999;
        
  }
}
#kyle{
  -webkit-
  tranfrom:rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform:
  rotate(90deg);
  -0-transfom:
  rotate(90deg);
  transform:rotate(90deg);

}
#hunter{
  height:400;
}



.paragraph{ 
  font-size 20px;
  &:hover{
    border: solid 1px #CCC;
    -moz-box-shadow: 5px 5px 0px #999;
    -webkit-box-shadow: 5px 5px 0px #999;
        box-shadow: 5px 5px 0px #999;
        
  } 
}
.item{
    background-color:gray;
    box-shadow:2px 2px 5 px black;
}
.link{
  color:green;
  &:hover{
 color: purple;
  }
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
    padding: 10px; 
}
.carousel{
    display:block;
    width:auto;
    height: auto;
    margin: auto;
    activeItem={1}
   fade:True;
   slide:"true";
   &:hover{
    border: solid 1px #CCC;
    -moz-box-shadow: 5px 5px 0px #999;
    -webkit-box-shadow: 5px 5px 0px #999;
        box-shadow: 5px 5px 0px #999;
        
  }
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
.words{
  font-size 20px;
  
  }
`
var array = [   
  kyle,
  person,
  josh,
  hunter,
  company
]
export const Team = () =>(
<Styles>
<div class="mainpage" >
<ul class="list">
 {/* {array.map((each,x)=>{
  return(
<li className="item">  
<a  className="material">
<hr className="line"></hr>
<div className = "wrapper">
<img className="people" id={`${x}people`} src={each}></img>
<p className="paragraph">words words words </p>
</div>
</a>
</li>
  )
})} */}
{/* kyle */}
<li className="item">  
<a  className="material">
<hr className="line"></hr>
<h1 className="title">Kyle Cunningham</h1>
<div className = "wrapper">
<img className="people" id={`kyle`} src={kyle}></img>
<p className="paragraph">
<div className ="words">{`\xa0\xa0\xa0\Hello, my name is Kyle Cunningham and I am an Electrical engineering student at Colorado State University. I am very excited to be a 
part of this team and make some great progress on the energy suitcase. I have found that I enjoy power engineering and feel this project
 will really help expand my knowledge in the subject. I hope that one day this project will help those in underdeveloped parts of the world as well as help those who have 
 gone through a natural disaster. We live in a world where everyone needs power and we hope to make this easier for everyone. Outside of school, I enjoy playing golf, hockey,
  and Texas Hold’em.
`}
</div>
<br></br>
   linkedin:<a className="link" href="https://www.linkedin.com/in/kylecunninghamelectricalengineer/">https://www.linkedin.com/in/kylecunninghamelectricalengineer/</a>
   <br></br>
   email: kyleham@rams.colostate.edu
</p>
</div>
</a>
</li>
{/* hunter */}
<li className="item">  
<a  className="material">
<hr className="line"></hr>
<h1 className="title">Hunter Becvar</h1>
<div className = "wrapper">
<img className="people" id={`hunter`} src={hunter}></img>
<p className="paragraph"> 
<div className="words">
{`\xa0\xa0\xa0\Hi, my name is Hunter Becvar and I am a four-year mechanical engineering student at Colorado State University. I enjoying 
solving problems, doing math, and helping people. The energy suitcase project aligns with a lot of things 
I enjoy! I hope one day the suitcase gets to help people in some way. Outside of school, I like reading books, playing sports such as basketball, 
soccer, golf, or volleyball, and spending time with friends.
`}</div>
<br></br>
linkedin:<a className="link" href="https://www.linkedin.com/in/hunter-becvar-b69014171/">https://www.linkedin.com/in/hunter-becvar-b69014171/</a>
  <br></br>
 {/* linkedin: <link src="https://www.linkedin.com/in/hunter-becvar-b69014171/">https://www.linkedin.com/in/hunter-becvar-b69014171/</link> */}
  email: hunterbecvar@gmail.com
</p>
</div>
</a>
</li>

{/* person */}
<li className="item">  
<a  className="material">
<hr className="line"></hr>
<h1 className="title">Sean Williams</h1>
<div className = "wrapper">
<img className="people" id={`person`} src={person}></img>
<p className="paragraph">
<div className="words">{`\xa0\xa0\xa0\Hello, my name is Sean Williams. I am currently a senior pursuing a bachelor’s in electrical engineering here at 
Colorado State University. While developing my skillset at CSU, I found a passion for power engineering and renewables. 
I am so excited to be part of the team for Energy Suitcase as we could help those in need! It will also help further my 
understanding in renewables and power electronics. While not studying I enjoy hiking, golfing, tennis and various other 
sports. I can’t wait to make a difference for those who need it.
`}</div>
<br></br>
 {/* linkedin: <link src="https://www.linkedin.com/in/hunter-becvar-b69014171/">https://www.linkedin.com/in/hunter-becvar-b69014171/</link> */}
  email: sewillia@rams.colostate.edu
</p>
</div>
</a>
</li>

{/* josh  */}
<li className="item">  
<a  className="material">
<hr className="line"></hr>
<h1 className="title">Josh</h1>
<div className = "wrapper">
<img className="people" id={`josh`} src={josh}></img>
<p className="paragraph">Hello, my name is Josh Ehr, I am a mechanical engineering student at Colorado State University. 
I have thoroughly enjoyed my time at CSU, and I am very excited to be working on this project. The Energy Suitcase will use solar energy to power the batteries, and this is a great area of interest for me. This project will work to help people in underdeveloped areas and underfunded communities, which was a huge draw for me. Outside of school, I love to be in the outdoors hiking, swimming, playing 
sports, and skiing as much as I can.  </p>
</div>
</a>
</li>
{/* Trees, Water & People */}
<li className="item">  
<a  className="material">
<hr className="line"></hr>
<h1 className="title">{`Trees, Water & People`}</h1>
<div className = "wrapper">
<img className="people" id={`company`} src={company}></img>
<p className="paragraph">
  <div className="words">
  {`At Trees, Water & People, our mission is to improve lives by helping communities to protect, conserve, 
and manage their natural resources`}</div>
link: <a className="link" href="https://www.treeswaterpeople.org/index.html">https://www.treeswaterpeople.org/index.html</a>
</p>
</div>
</a>
</li>
{/*Dr. James Barnes*/}
<li className="item">  
<a  className="material">
<hr className="line"></hr>
<h1 className="title">{`Dr. James Barnes`}</h1>
<div className = "wrapper">
<box></box>
<p className="paragraph">
 
link: <a className="link" href="https://www.treeswaterpeople.org/index.html">https://www.treeswaterpeople.org/index.html</a>
</p>
</div>
</a>
</li>





















</ul>
</div>
</Styles>
)