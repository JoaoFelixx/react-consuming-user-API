import styled from 'styled-components';

const Flex = styled.div`
	display: flex;
	justify-content: center;
`;

const Table = styled.table`
	width: 98%;
  font-weight: bold;
  border-collapse: collapse;
  transition: 1s;

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