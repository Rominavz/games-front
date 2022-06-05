import styled from "styled-components";

export const ContainerPage = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1rem 0;
    button {
      /* backdrop-filter: blur(16px) saturate(180%); */
      /* background-color: rgba(194, 197, 198, 0.8); */
      font-weight: bold;
      /* color: var(--text-color); */
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.9rem;
      border-radius: 1rem;
      margin: 0.2rem;
      min-width: 2rem;
      font-family: 'Coda', cursive;
      padding: 0 0.3rem;
      height: 2rem;
      border: 0.2;
      /* text-decoration: none; */
      cursor: pointer;
      box-shadow: 4px 6px 6px 1px rgba(0,0,0,0.2);
      border: none;
    background: #e8e8e8;
    border: 1px solid #e8e8e8;
   
    }
    button:hover {
      background-color:  #00F8F6;
      color: #fff;
    }
    button:focus {
      background-color:  #00F8F6;
      color: #fff;
    }
    
  }
`;

export const PrevNext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: 100%;
  /* background-color: rgba(17, 25, 40, 0.75); */
  box-shadow: 2px 2px 6px #00F8F6, -3px -3px 6px #33B0CF;
  padding: 0.4rem;
  border-radius: 1rem;
  span {
    font-family: 'Coda', cursive;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
    width: 100%;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const BtnPaged = styled.button`
  backdrop-filter: blur(16px) saturate(180%);
  /* background-color: rgba(17, 25, 40, 0.75); */
  box-shadow: 4px 4px 12px #c5c5c56b, -6px -6px 12px #ffffff8a;
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 1rem;
  margin: 0.2rem;
  min-width: 2rem;
  padding: 0 0.3rem;
  height: 2rem;
  border-style: hidden;
  cursor: pointer;
  box-shadow: 4px 6px 6px 1px rgba(0,0,0,0.5);
  :hover {
    background-color:  #00F8F6;
    color: #fff;
  }
  :disabled {
    background-color: #333333;
  }
`;