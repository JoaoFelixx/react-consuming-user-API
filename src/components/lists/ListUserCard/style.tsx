import styled from 'styled-components';

const Flex = styled.div`
	width: 100%;
	background-color: #ff0000;
	padding: 1em 0;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	align-content: center;

	@media (max-width: 768px) {
		flex-direction: column;
	} 
`;

const Card = styled.div`
	
	flex-basis: 200px;

	h3 {
		font-size: 1.1em;
		font-weight: bold;
	}
`;

export { Flex, Card };