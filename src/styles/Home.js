import styled from "styled-components";
//import background from '../assets/background.png'

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  /* padding: 1rem 0; */
  h2 {
    color: var(--text-color);
  }
  
`;

export const NoResult = styled.div`
  border-radius: 1rem;
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  padding: 1.5rem 1rem;
  text-align: center;
  img {
    width: 100%;
  }
`;
export const ContainerHome = styled.div`
  padding: 0.75rem;
 /*  min-height: 100vh; */
  background-color:  #0D1112;

`;

export const Btns = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Btnprinc = styled.div`
font-size: 10px;
margin: 1rem;
padding-top: 0.5rem;
img:hover {
  transform: translate(0, -5px);
}
`;
/* export const BtnReset = styled.div`
font-size: 10px;
margin: 1rem;
padding-top: 0.5rem;
img:hover {
  transform: translate(0, -5px);
  transition:2.5s;
  -webkit-transition:2.5s;
  -moz-transition:2.5s;
  -o-transition:2.5s;
  -webkit-transform:rotate(360deg);
  -moz-transform:rotate(360deg);
  -o-transform:rotate(360deg);
  transform:rotate(360deg);
}
`; */