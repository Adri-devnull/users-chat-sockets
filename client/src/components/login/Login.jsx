import { useNavigate } from 'react-router-dom';
import { socket } from '../../sockets/socket';
import {
	StyledButton,
	StyledFormLogin,
	StyledImg,
	StyledInput,
	StyledInputContainer,
	StyledLabel
} from './styles';

const Login = () => {
	const navigate = useNavigate();

	return (
		<StyledFormLogin onSubmit={event => sendUsername(event, navigate, socket)}>
			<div>
				<StyledImg
					src='assets/images/chat.png'
					alt='imagen del icono de chat'
				/>
			</div>
			<StyledInputContainer>
				<StyledLabel htmlFor='username'>
					Introduce tu nombre de usuario
				</StyledLabel>
				<StyledInput type='text' id='username' />
			</StyledInputContainer>
			<StyledButton>Entrar al chat</StyledButton>
		</StyledFormLogin>
	);
};

// FUNCION PARA ENVIAR EL NOMBRE DEL USUARIO
const sendUsername = (event, navigate, socket) => {
	event.preventDefault();
	const username = event.target.username.value;
	if (!username) return alert('Necesitas un nombre de usuario');
	event.target.reset();
	navigate('/chat');
	socket.emit('login', username);
};

export default Login;
