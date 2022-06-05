import styled from "styled-components";
import { Button } from "../styles/Button";
import form from "../assets/form.jpg"
import { IoIosArrowDropleftCircle } from "react-icons/io";

export const BackBtn = styled(IoIosArrowDropleftCircle)`
  color: black;
  font-size: 2.3rem;
  background-color: white;
  border-radius: 1.1rem;
`;
export const Top = styled.div`
  display: inline;
  text-align: center;
  h1{
    margin-top: 2%;
    margin-bottom:0.5%;
    /* text-shadow: black 0.01em 0.01em; */
    color: #ffff;
    font-family: 'Coda', cursive;
    font-size: 1.65rem;
  }
`;
export const FormContainer = styled.form`
  padding: 1rem;
  min-height: 100vh;
  background-image: url(${form});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

export const InfoImg = styled.div`
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 100px;
  border: 2px solid rgb(139, 139, 139);
  cursor: pointer;
  margin-top: -1.5%;
  margin-bottom: -0.75%;
  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 100px;
  }
`;
export const BtnForm = styled(Button)`
  width: 100%;
  margin: 0.9rem 0;
  font-size: 1rem;
  color: black;
  font-family: 'Coda', cursive;
  font-size: 0.9rem;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  backdrop-filter: blur(16px) saturate(180%);
  background-color: #f1f1f1
  flex-wrap: wrap;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
  margin: auto;
  max-width: 600px;
  div {
    width: 100%;
  }
`;
export const InputLabel = styled.div`
  font-family: 'Courier Prime', monospace;
  width: 100%;
  p {
    margin: 0.9rem 0;
    font-size: 0.9rem;
  }
  
`;
export const InputText = styled.input`
  margin: 0.2%;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  padding: 0.4rem 1rem;
  font-size: 0.8rem;
  font-family: 'Courier Prime', monospace;
  width: 100%;
`;

export const Error = styled.span`
  color: #f86c7f;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0.2rem 0;
  font-family: 'Courier Prime', monospace;
`;

export const Select = styled.select`
  margin-top: 1%;
  margin-left: -0.0%;
  cursor: pointer;
  padding: 0.4rem 1rem;
  outline: none;
  border: none;
  background: #f0f0f0;
  font-size: 1rem;
  color: black;
  font-family: 'Courier Prime', monospace;
  font-size: 0.9rem;
  border-radius: 0.4rem;
  width: 100%;
  option {
    font-family: 'Courier Prime', monospace;
    font-weight: bold;
  }
`;
export const Delete = styled.div`
  margin: 0.5rem 0;
  background: rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(10px);
  padding: 0.3rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  font-family: 'Courier Prime', monospace;
  font-size: 0.9rem;
  color:white;
  img {
    width: 1.3rem;
    cursor: pointer;
    border-radius: 1rem;
  }
`;
