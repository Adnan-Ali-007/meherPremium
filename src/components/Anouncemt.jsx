import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
 height:30px;  
 background-color: #dc5555;
 display: flex;
 align-items: center;
 justify-content: center;
 font-weight: 500;
 color:white;
 width: 100vw;
`
const Anouncemt = () => {
  return (
   <Container>
    Super Deal!Free shopping over $50  
   </Container>
  )
}
export default Anouncemt