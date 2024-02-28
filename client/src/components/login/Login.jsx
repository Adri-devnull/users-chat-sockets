import { useNavigate } from 'react-router-dom';
import {
	StyledButton,
	StyledContainerLogin,
	StyledImg,
	StyledInput,
	StyledInputContainer,
	StyledLabel
} from './styles';

const Login = () => {
	const navigate = useNavigate();
	return (
		<StyledContainerLogin>
			<div>
				<StyledImg
					src='assets/images/chat.png'
					alt='imagen del icono de chat'
				/>
			</div>
			<StyledInputContainer>
				<StyledLabel htmlFor='name'>Introduce tu nombre de usuario</StyledLabel>
				<StyledInput type='text' id='name' name='name' />
			</StyledInputContainer>
			<StyledButton onClick={() => navigate('/chat')}>
				Entrar al chat
			</StyledButton>
		</StyledContainerLogin>
	);
};

export default Login;
