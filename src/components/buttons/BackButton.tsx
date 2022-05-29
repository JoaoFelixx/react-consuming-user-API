import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button` 
  position: absolute;
  top: 0;
  background-color: #0099ff;
  margin: 10px 5px;
  padding: 10px 20px;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  cursor: pointer;
`;

export function BackButton() {
  return (
    <Link to='/'>
      <Button>Voltar</Button>
    </Link>
  )
}