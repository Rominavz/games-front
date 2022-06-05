import styled from "styled-components";
import { LinkTo } from "../styles/Link";


export const PageNotFound = styled.div`
  color: var(--text-color);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color:#004758;
  
  
`;

export const Content = styled.div`
  display: flex;
 /*  flex-direction: column; */
  justify-content: center;
  align-items: center;
  background-color:#004758;
  img {
    width: 35%;
    margin: 16rem 0;
   
 
  }
  h2{
    margin-top:-10%;
    margin-left:-32.2%;
    font-family: 'Courier Prime', monospace;
    color:  #00F8F6;
    
  }
`;

export const LinkBack = styled(LinkTo)`
  position: absolute;
  left: 1rem;
  top: 1rem;
`;