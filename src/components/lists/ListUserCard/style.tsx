import styled from 'styled-components';

const Flex = styled.div`
	width: 100%;
	padding: 1em 0;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	align-content: center;
	
	h3 {
		font-weight: bold;
	}

	@media (max-width: 768px) {
		flex-direction: column;
	} 
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items:center;
	margin-bottom: 20px;
	flex-basis: 13em;

	h3 {
		position: relative;
		top: 10px;	
		text-align: center;
		font-size: 1.1em;
		font-weight: bold;
	}
`;

export { Flex, Card };