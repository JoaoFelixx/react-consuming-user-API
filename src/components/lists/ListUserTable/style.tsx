import styled from 'styled-components';

const Table = styled.table`
	width: 100%;
  font-weight: bold;
  border-collapse: collapse;
  width: 100%;

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

export { Table }