import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  h3 {
    position: relative;
    top: 20px;
  }

  span {
    position: relative;
    font-weight: bold;
    font-size: 1.1em;
    top: 80px;
  }
`;

export { Flex, Container };