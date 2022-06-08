import styled from 'styled-components';

const Flex = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: #F5F3F2;

	h3 {
		font-weight: bold;
	}
`;

const Table = styled.table`
	width: 100%;
  font-weight: bold;
  border-collapse: collapse;

  th {
  	background-color: #666565;
  	color: #fff;
  	font-size: 1.1em;
  	font-weight: bold;
  }

	td, th {
	  border: 1px solid #dddddd;
	  text-align: left;
	  padding: 8px;
	}

	img {
		width: 60px;
		border-radius: 50%;
	}
`;

export { Table, Flex }