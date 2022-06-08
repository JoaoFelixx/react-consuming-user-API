import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		font-family: 'Source Sans Pro', sans-serif;		
	}

	body {
		background-color: #C7C6C5;
	}

	::-webkit-scrollbar {
    display: none;
  }
`;