import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 40%;
  	padding: 0.5em 0;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  input[type="checkbox"] {
    margin-right: 2px;
  }

  select {
    width: 9em;
    height: 2.5em;
    overflow: hidden;
    background-color: #ddd;
    border: 1px solid #ccc;

    @media (max-width: 768px) {
      width: 5em;
    }
  }

  label.list {
    margin-right: 4px;
  }

  div.check {
    @media (max-width: 768px) {
      display: none;
    }
  }
`; 

const SearchBar = styled.input`
  width: 70%;
  padding: 6px 10px;  
  font-size: 1.1em;
  border: none;
  background-color: rgb(235, 235, 235);

  @media (max-width: 768px) {
    width: 60%;
    font-size: 1em;
  }
`;

const SearchButton = styled.button`
  background-color: #0099ff;
	padding: 6px 10px;  
	cursor: pointer;
	border: none;
	color: #fff;
	font-weight: bold;
	font-size: 1.1em;
`;


export { Card, SearchBar, SearchButton };