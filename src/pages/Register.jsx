// import { Container as MuiContainer } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import {mobile} from '../pages/Responsive'
const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
  url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "75%" })}
`;
const Form = styled.div`
 font-size: 24px;
  font-weight: 300;
`;
const StyledTitle = styled.div`

`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreements = styled.div`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.div`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
export const Register = () => {
  return (
    <StyledContainer>
      <Wrapper>
        <StyledTitle>Register</StyledTitle>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreements>
            U agree to the consent of processing your personal data by creating an account
            <b>Privacy Policy</b>
          </Agreements>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </StyledContainer>
  );
};
