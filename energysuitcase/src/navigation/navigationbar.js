import React from 'react'; 
import {Nav,Navbar,Container} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
.item{
text-size:5px;
}
.list{

}
.nav{
    height:40px;
    padding: 25px 50px;
    margin-top: 0px ;
    
   
    
}
.navbar{
    background-color: #222;
      padding: $spacer !important;
      
     
      
    
   
}
.navbar-brand,
 .navbar-nav .nav-link{
    font-size:34px;
    text-decoration: none;
    color: #bbb;
    &:hover{
        color:orange;
        background-color:rgb(51,80,25);
       
        
    }
}
.m1-auto{  
    display: grid;
    height:40px;
    width: 100%;
    margin:auto;
    grid-template-columns: repeat(6,1fr);
    grid-gap: 0px;
    
}
.dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
`;
export const NavigationBar = () =>(
 <Styles>
 <Navbar> 
 {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/> */}
 <Navbar.Collapse id="basic-navbar-nav">
<Nav className = "m1-auto">
<Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
<Nav.Item ><Nav.Link  href="/Gallery">Gallery</Nav.Link></Nav.Item>  
<Nav.Item><Nav.Link href="/Team">Team</Nav.Link></Nav.Item>   
<Nav.Item><Nav.Link href="/Timeline">Timeline</Nav.Link></Nav.Item>   
<Nav.Item><Nav.Link href="/documents">Documents</Nav.Link></Nav.Item> 
<Nav.Item><Nav.Link><div class="dropdown">More<div class="dropdown-content">
    <p>
        <ul className ="list">
            <li className="items"><a href="https://www.colostate.edu/">csu Homepage</a></li>
            <li><a href="https://www.engr.colostate.edu/ece/index.php">ECE Department</a></li>
            <li><a href="https://www.engr.colostate.edu/ECE401/AY19_senior_design_projects.php">ECE senior Projects</a></li>
            <li><a href="https://advancing.colostate.edu/ENG/ECE_SRDESIGN/GIVE">Support Our Program</a></li>
        </ul>   
    </p></div></div></Nav.Link></Nav.Item> 
</Nav>
</Navbar.Collapse>
</Navbar>
</Styles> 
)