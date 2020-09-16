
import React from 'react';
import styled from 'styled-components';
import images from './pageImages/img_Main.png'
import battery from './battery.png'
import energy from './energylogo.png'
import logo from './suitcase.png'
const Styles = styled.div`

.homepage{
    background-color:rgb(51,80,25);
    width:100%;
   
}
.title{ 
    background-image: linear-gradient(to left, rgba(0,0,0,0), rgba(250,250,250,1));
    //background-color:rgb(122,122,122);
    border: solid 1px #CCC;
    -moz-box-shadow: 5px 5px 0px #999;
    -webkit-box-shadow: 5px 5px 0px #999;
        box-shadow: 5px 5px 0px #999;
}
.paraghgraph{
padding:1%;
font-size:20px;

}
.bulletList{
    font-size:20px; 
}
.suitcase{
    display:block;
    margin:auto;
    width:50%;
    border:10px;
    border-style :outset;
    border-color: rgba(130,230,230,1);
    bottom:20px;
}
.header{
    display:block;
    margin:auto;
    width:50%;
    bottom:5px;
   
    position relative;
    font-size 70px;
    margin-top:0;
    font-family:Lobster,hevetica,arial;
}
.header a {
    text decoration:none;
    color #666;
    position:absolute
 -webkit-mask-image:webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,1)),color-stop(50%,rgba(0,0,0,5)),to(rgba(0,0,0,1)));
}
.header:after{
    content:'Suitcase';
    color:#d6d6d6;
    text-shadow: 0 1px 0 white;
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
.energylogo{
    display:block;
    margin:auto;
    width:50%;
   
  
    bottom:20px;

}
`





export const Home = () =>(
<Styles>
<div className = "homepage">
{/* <div>
<img className="suitcase" src={battery}></img>
    <div className="overlay"></div>
    <h1 className="header">
       <a>Energy</a> 
    </h1>
    </div>
     */}
         <h1 className="header">
       <a>Energy</a> 
         </h1>
     <img className="energylogo" src={logo}></img>

     <hr></hr>

     {/* <h1 className ="title" id ="title1">Product</h1>   */}
     <br></br>
<img className="suitcase" src={images}></img>
<br></br>
<div className= "writingSection">
    
<h1 className ="title" id ="title1">Summary</h1>
<p>
<div className = 'paraghgraph'>
{`\xa0\xa0\xa0\xa0\We live in a world that relies on electricity. Yet there are still so many impoverished and rural areas that don’t have a reliable source of power. Even in the United States, there are places that people struggle for this necessity including the Pine Ridge Reservation in South Dakota. Without access to electricity, extreme weather and emergencies can quickly become life-threatening. 
Trees, Water, & People, our local non-profit collaborator, is working to provide access to affordable, renewable power sources to this community. They have purchased an educational We Share Solar Suitcase® from We Care Solar, which includes two small solar panels and DC charging ports. This is a very valuable device, however, it doesn’t produce enough power to run small appliances. The goal of this 
project is to create a portable suitcase that provides enough power to charge bigger appliances such as laptops, small stoves, heated blankets, and even power a mini-refrigerator for medications. This suitcase will be powered by renewable sources such as solar and wind. This suitcase has the ability to save lives, and make daily tasks a little easier for those without easy access to electricity. `}
  </div>
<hr></hr>
<h1 className ="title" id ="title2">Background</h1>
<div className = 'paraghgraph'>{`
\xa0\xa0\xa0\xa0\In March of 2019, a devastating blizzard hit the residents of Pine Ridge Reservation leaving them stranded with no way to call for help. With a lack of supplies and ways to keep warm, by the time emergency services arrived, some residents lost their lives. Ninety-eight percent of the residents of the Pine Ridge Reservation live below the national poverty level, and over forty percent 
live without access to electricity (Lakota 2019). Additionally, there is a large diabetic population on the reservation, and it’s extremely important to refrigerate some medications. These problems could have been avoided if they had a way to power their personal devices.  The Energy Suitcase project is an easily transportable solution to help Pine Ridge residents during emergencies like in March 2019.
 Having the access to electricity and being able to continue to refrigerate medical supplies can save lives. `}
</div>

<hr></hr>
<h1 className ="title" id ="title1">Project Solutions</h1>
<div className="paraghgraph">
The energy suitcase will give struggling communities access to the necessary electricity that they need to survive. This suitcase will provide:
<ul>
<li>A water pump</li>
<li>Multiple working power outlets
</li>
<li>Access to refrigeration allow extend food preservation</li>
<li>Having a system to charge basic electronics: Phones, Laptops, and Rechargeable Batteries
</li>
</ul>
</div>

</p>

</div>
<br></br>



</div>
</Styles>
)