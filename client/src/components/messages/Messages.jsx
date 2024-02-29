import { SytledMessage, SytledMessageContainer, SytledName } from './styles';

const Messages = ({ username, message, $color }) => {
	return (
		<SytledMessageContainer $color={$color}>
			<SytledName>{username}</SytledName>
			<SytledMessage>{message}</SytledMessage>
		</SytledMessageContainer>
	);
};

export default Messages;
