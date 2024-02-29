import styled from 'styled-components';

const StyledChatContainer = styled.div`
	display: flex;
	padding: 30px;
	gap: 30px;
`;

const StyledMessagesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

const StyledUsersConnected = styled.div`
	width: 30%;
`;

const StyledMessages = styled.div`
	width: 70%;
`;

export {
	StyledChatContainer,
	StyledMessages,
	StyledMessagesContainer,
	StyledUsersConnected
};
