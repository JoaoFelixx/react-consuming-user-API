import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #777777;
  border-bottom: 2px solid #000;

  select {
    width: 8em;
    font-size: 1em; 
    height: 2.5em;
    overflow: hidden;
    background-color: #ddd;
    border: 1px solid #ccc;

    @media (max-width: 768px) {
      width: 10em;
    }
  }

  label.list {
    margin-right: 4px;
  }

  div.switch {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  }
`; 

const Card = styled.div`
  width: 40%;
  padding: 0.5em 0;
  display: flex;
  align-items: center;
  background-color: #777777;

  @media (max-width: 768px) {
    width: 90%;
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
  width: 30%;
  background-color: #0099ff;
	padding: 6px 10px;  
	cursor: pointer;
	border: none;
	color: #fff;
	font-weight: bold;
	font-size: 1.1em;
`;

export { Container, Card, SearchBar, SearchButton };