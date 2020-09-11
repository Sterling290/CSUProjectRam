import React from 'react'; 
import {Nav,Navbar,Container} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
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
    width: 50%;
    padding-left:10px;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 0px;
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
</Nav>
</Navbar.Collapse>
</Navbar>
</Styles> 
)