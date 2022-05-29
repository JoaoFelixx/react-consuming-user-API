import styled from 'styled-components';
import { BackButton } from '../buttons';

const Map = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #00ff00;
  padding: 0;
  margin: 0;
`;

export function MapUserById() {
  return (
    <Map>
      <BackButton />
    </Map>
  )
}