import styled from 'styled-components';

export const Loader = styled.div` 
  border: 16px solid transparent;
  border-radius: 50%;
  border-top: 16px solid #000;
  width: 120px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;