import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 90%;
  	padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  label,
  span,
  input[type="checkbox"] {
    margin-right: 6px;
  }
  

  select {
    margin-right: 6px;
    width: 16em;
    height: 34px;
    overflow: hidden;
    background: url(nova_setinha.jpg) no-repeat right #ddd; /* novo ícone para o <select> */
    border: 1px solid #ccc;
  }
`; 

const SearchBar = styled.input`
  padding: 6px;
  width: 40%;
  font-size: 1.1em;
  border: none;
  background-color: rgb(235, 235, 235);
  margin-right: 20px;
`;

const SearchButton = styled.button`
	background-color: #0099ff;
	padding: 6px;  
	cursor: pointer;
	border: none;
	color: #fff;
	font-weight: bold;
	font-size: 1.1em;
`;


export { Card, SearchBar, SearchButton };