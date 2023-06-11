import React from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import {sliderItems} from "../data";
const Container = styled.div`
  width: 100%;
  height: 100vh; /* full screen slider */
  display: flex;
  position: relative;
  background-color:white;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f4f4f4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:0px;
  bottom: 0px;
  left:${props=> props.direction==="left" && "10px"};
  right:${props=> props.direction==="right"&&"10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper=styled.div`
 height:100%;  
 display: flex;
 transform: translateX(${props=>props.slideIndex * -100}vw);
 transition: all 1.5s ease;
`
const Slide=styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
background-color: #${props=>props.bg};
`
const ImageContainer=styled.div`
flex:1;   
height:100%;
overflow-x: hidden;
margin-left: 2px;
margin-top: 60px;
`
const Image=styled.img`
width: 100%;
height: 85%;
object-fit: cover;
`
const InfoContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
flex:1;
`
const Title=styled.h1`
font-size:70px;
margin:2px 30px;
`
const Desc=styled.p`
margin:10px 30px;
font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button=styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor: pointer;
margin: 3px 30px;
`
 const Slider = () => {
  const [slideIndex,setSlideIndex] = React.useState(0);
  const handleClick=(direction)=>{
  if(direction==="left"){
setSlideIndex(slideIndex>0?slideIndex-1 :2);
  }else{
    setSlideIndex(slideIndex<2?slideIndex+1 :0);
  }
  };
  return (
    <Container>
      <Arrow direction="left"onClick={() => handleClick("left")} >
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>(
        <Slide bg={item.bg}>
      <ImageContainer>
      <Image src={item.img}/>
      </ImageContainer>
      <InfoContainer>
       <Title>
       {item.title}
       </Title>
       <Desc>
        {item.desc}
       </Desc>
       <Button>Shop Now</Button>
      </InfoContainer>
      </Slide >
      ))}
      </Wrapper>
      <Arrow direction="right"onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
export default Slider;