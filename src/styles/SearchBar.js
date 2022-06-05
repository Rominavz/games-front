import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Search = styled.form`
  /* background-color: var(--text-color); */
  display: flex;
  width: 150%;
  align-items: center;
  padding: 0.3rem 0.5rem;
  margin: 1rem 0;
  font-size: 1em;
  color: white;
  height: 2.5rem;
  border-radius: 0.75rem;
  input {
    border: none;
    outline: none;
    margin-right: 0.5rem;
    width: 100%;
    height: 100%;
    border-radius: 0.75rem;
    padding: 7px 10px;
    font-size: 0.8rem;
    font-family: 'Courier Prime', monospace;
    background-color: #f1f1f120;
    color: white;
  }
`;
export const IconSearch = styled(FaSearch)`
  margin: 0 0.5rem;
  margin-left: 8%;
  font-size: 1.2rem;
  color:#ffff;
  :hover {
    cursor: pointer;
  }
`;