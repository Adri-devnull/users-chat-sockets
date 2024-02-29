import styled from 'styled-components';

const StyledChatContainer = styled.div`
	display: flex;
	padding: 30px;
	gap: 30px;
`;

const StyledContainerMain = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
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

const StyledForm = styled.form`
	margin-top: auto;
`;

export {
	StyledChatContainer,
	StyledContainerMain,
	StyledForm,
	StyledMessages,
	StyledMessagesContainer,
	StyledUsersConnected
};
