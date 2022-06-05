import styled from "styled-components";

export const Button = styled.button`
  color: #090909;
  padding: 0.2em 0.4em;
  font-size: 14px;
  margin: 1.1%;
  border-radius: 3em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 8px #c5c5c5, -3px -3px 3px #ffffff;
  cursor: pointer;
  font-family: "DM Serif Display", serif;

  :hover {
  border: 1px solid #fff;
  }
  
  svg {
    margin: 0;
    font-size: 1.1rem;
  }
  span {
    display: none;
  }
  /* :hover {
    opacity: 1;
    transform: translateY(0);
    transition-duration: 0.35s;
    box-shadow: 0px 0px 10px -2px rgba(222, 222, 222, 0.75);
  }
  @media (min-width: 768px) {
    svg {
      display: none;
    }
    span {
      display: inline;
    }
  } */
`;
export const ConteinerBtn= styled.div`
display: flex;
flex-wrap: nowrap;
justify-content: center;
cursor: pointer;
`;