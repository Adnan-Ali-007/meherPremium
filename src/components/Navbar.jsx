import {Badge} from '@material-ui/core';
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from "../pages/Responsive"
const Container=styled.div`
height:60px;
${mobile({backgroundColor:"red"})}
`;
const Wrapper=styled.div` 
padding:2px 20px;
  display:flex;
  align-items: center;
  justify-content:space-between;
`
const Right=styled.div`
flex:1;
display:flex;
align-items:center ;
justify-content: flex-end;
${mobile({flex:2,justifyContent:"center"})}
`
const Center=styled.div`
flex:1;
text-align: center;
`
const MenuItem=styled.div`
font-size:14px;
/* font-weight:bold; */
cursor:pointer;
margin-left: 25px;
${mobile({fontSize:"12px",marginLeft:"10px"})}
`
const Logo=styled.h1`
font-weight:bold;  
`
const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`
const Language=styled.span`
font-size:14px;
cursor:pointer;
font-weight:bold;
`
const SearchContainer=styled.div`
border:1px solid lightgray;
margin-left:25px;
padding:2px;
display:flex;
align-items:center;
`;
const Input=styled.input`
border: none;
`;
const Navbar = () =>{
   return(
        <Container>
          <Wrapper>
            <Left><Language>en</Language><SearchContainer><Input /> <Search style={{color:"gray",fontSize:16}} /></SearchContainer></Left>
       <Center><Logo>Meher premium </Logo></Center>
       <Right><MenuItem>REGISTER </MenuItem>
       <MenuItem>SIGN IN</MenuItem>
       <MenuItem> <Badge badgeContent={4} color="primary">
        <ShoppingCartOutlined/>
    </Badge>
    </MenuItem>
       </Right> 
          </Wrapper>
        </Container>
   );
}
export default Navbar;