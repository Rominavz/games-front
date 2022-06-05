import styled, { keyframes } from "styled-components";
//import background from '../assets/background.webp'

export const Load = styled.div`
  width:0.5px;
 /*  min-height: 50vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* img {
    margin-left:-11.7%;
  } */
  padding: 0.75rem;
  min-height: 100vh;
    
    /* background-size: cover; */
    background-repeat: no-repeat;
   /*  background-attachment: fixed; */
    background-position: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  background-color: #00F8F6;
  box-shadow: 2px 2px 3px #00F8F6, -3px -3px 3px #33B0CF;
  border: 0.5rem solid transparent;
  width: 6rem;
  height: 7rem;
  border-radius: 50%;
  border-left-color: #33B0CF;
  animation: ${spin} 1s linear infinite;
  margin: 1rem;
  
`;
