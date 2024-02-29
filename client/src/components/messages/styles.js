import styled from 'styled-components';

const SytledMessageContainer = styled.div`
	background-color: ${({ $color }) => $color};
	padding: 10px 15px;
	border-radius: 10px;
	margin-bottom: 10px;
`;

const SytledName = styled.h3`
	text-transform: uppercase;
	font-size: 1em;
`;

const SytledMessage = styled.p`
	font-size: 0.9em;
	font-weight: 500;
`;

export { SytledMessage, SytledMessageContainer, SytledName };
