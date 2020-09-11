import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components'
const Styles = styled.div`
.main{

}
.container{
 background-color:#222;
padding-left: 0px;
padding-right: 0px;
  
}`
export const Layout = (props) =>(
    <Styles>
        <div className="main">
   <Container>
       {props.children}
   </Container>
   </div>
   </Styles>
    )