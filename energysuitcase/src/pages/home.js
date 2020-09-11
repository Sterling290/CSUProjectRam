
import React from 'react';
import styled from 'styled-components';
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

`





export const Home = () =>(
<Styles>
<div className = "homepage">
<div className= "writingSection">
    
<h1 className ="title" id ="title1">Summary</h1>
<p>
<div className = 'paraghgraph'>
{`\xa0\xa0\xa0\xa0\Unfortunately, there are many impoverished and rural areas that do not have access to reliable electricity, including the Pine Ridge Reservation located in South Dakota.
Cost and accessibility can make it more feasible for residents to use propane and wood for heating. However, due to their remote location and spread, during extreme weather 
and emergencies, this can be life threatening quickly, with no access to charge personal devices, power medical equipment, and keep critical medications refrigerated. Trees, Water, and 
People, our local industry partner, is working to provide access to affordable, renewable power sources to this community. They have purchased an educational â€˜solar suitcaseâ€™ from We 
Share Solar, which includes two small solar panels and DC charging ports. Although this is an effective tool for education and to charge small devices, it will not power small appliances or even a laptop. 
 The goal of this project is to expand and modify the solar suitcase to be able to power a mini-refrigerator, with only four hours per day of recharging from renewable sources. This will be accomplished with conversion
  to AC power and user-friendly outlets, increasing solar generation, adding wind generation, and increasing battery capacity.`}
  </div>
<hr></hr>
<h1 className ="title" id ="title2">Background</h1>
<div className = 'paraghgraph'>{`
\xa0\xa0\xa0\xa0\As of 2013, 1.2 billion people around the globe live without access to electricity and another 2.8 billion depend on burning biomass for energy to heat their homes and for cooking [1]. In addition to adding to air pollution, cooking smoke kills an estimate of 3.5 million people each year due to respiratory illnesses. The proposed Energy Suitcase is an easily transportable solution to provide power to those in times of need, and could be lifesaving for the residents of the Pine Ridge Reservation during extreme weather events. In the future, larger systems similar to the suitcase could be the solution to bringing stable power to the reservation and limiting fuel costs for residents.`}
</div>
<ul className = "bulletList">

<li>Pine Ridge Reservation is the poorest county in the United States with a per capita income of $7,773 compared to United State average of $27,599</li>
<li>An 89% unemployment rate with an overall labor force of 29,539</li>
<li>Poverty rate living on Pine Ridge is 53.75% with the United States average is 15.6%</li>
<li>Education dropout rate is over 70%</li>
<li>Nearest large cities are located 100+ miles away from reservation
</li>
<li>1 in 4 children born on Pine Ridge are diagnosed with Fetal Alcohol Syndrome</li>
</ul>
<hr></hr>
<h1 className ="title" id ="title1">Project Solutions</h1>
<div className="paraghgraph">
   This case would provide basic home amenities and a source of sustainable electricity that many of these communities do not have infrastructure for.
<ul>
<li>Providing lights allowing children to study further into the night</li>
<li>Increased access to clean drinking water
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