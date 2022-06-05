import styled from "styled-components";
import { LinkTo } from "../styles/Link";


export const GameContainer = styled.div`
  width:400px;
  position: relative;
  overflow: hidden;
  
 /*  backdrop-filter: blur(13px) saturate(100%); */
 /*  background-color: #fcfaf9; */
  border-radius: 0rem;
  transition: all .5s ease-in-out;
  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    z-index: -1;
    /* border-radius: 1rem 1rem 0 0; */
  }
  :hover {
    transform: translate(0, 0px);
  }
  h3 {
    font-family: 'Coda', cursive;
    text-align: center;
    margin-bottom: 1%;
    margin-top: 2%;
    font-size: 2rem;
    
  }
`;

export const Details = styled(LinkTo)`
  color: var(--text-color);
`;

export const Info = styled.div`
  margin-top: 0;
  position: absolute;
  top: 150%;
  left:50%;
  transform: translate(-50%, -50%);
  transition: all .5s ease-in-out;
  
  h2 {
   
    margin-bottom: 0rem;
    font-family: 'Courier Prime', monospace;
  }
  p {
    font-size: 0.9rem;
    font-weight: bold;
    font-family: 'Courier Prime', monospace;
    text-align: center;
  }
  span {
      font-size: 0.9rem;
      font-family: 'Courier Prime', monospace;
      font-weight: bold;
  }
  
  :hover{
    top: -2.5px;
  }

`;
export const Icono = styled.div`
position: relative;
background: none;
text-align: left;
font-weight: bold;
left:35%


`;
export const Bkg = styled.div`
background: linear-gradient(318deg, rgba(240,237,237,1) 0%, rgba(243,243,246,0.465721322708771) 100%);
width:400px;
height: 240px;
padding: 0.1rem;

`;
export const Gen = styled.div`

padding-right: 5px;
padding-left: 5px;
padding-top: 5px;
padding-bottom: 5px;


color: #004758
font-size: 14px;

text-align: center;

font-family: 'Courier Prime', monospace;
`;


