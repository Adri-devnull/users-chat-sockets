import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { socket } from '../../sockets/socket';
import Messages from '../messages/Messages';
import {
	StyledChatContainer,
	StyledContainerMain,
	StyledForm,
	StyledMessages,
	StyledMessagesContainer,
	StyledUsersConnected
} from './styles';

const Chat = () => {
	const [users, setUsers] = useState([]);
	const [messages, setMessages] = useState([]);
	const [userColors, setUserColors] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		socket.on('users', allUsersConnected => {
			getAllOfUsers(allUsersConnected, setUsers, navigate);
		});

		return () => socket.off('users', getAllOfUsers);
	}, []);

	useEffect(() => {
		socket.on('allMessages', allMessages => {
			setMessages(allMessages);
		});
	}, []);

	return (
		<StyledContainerMain>
			<StyledChatContainer>
				<StyledUsersConnected>
					<h3>Usuarios</h3>
					{users.map(user => (
						<ul key={user.id}>
							<li>{user.username}</li>
						</ul>
					))}
				</StyledUsersConnected>

				<StyledMessages>
					{users
						.filter(user => user.id === socket.id)
						.map(filteredUser => {
							return (
								<span key={filteredUser.id}>
									Bienvenido {filteredUser.username}!
								</span>
							);
						})}
					<h3>Mensajes del chat</h3>
					{messages.map(msg => (
						<StyledMessagesContainer key={v4()}>
							<Messages
								username={msg.username}
								message={msg.message}
								$color={msg.color}
							/>
						</StyledMessagesContainer>
					))}
				</StyledMessages>
			</StyledChatContainer>
			<StyledForm
				onSubmit={event => sendMessage(event, userColors, setUserColors)}
			>
				<input type='text' id='message' />
				<button>Send</button>
			</StyledForm>
		</StyledContainerMain>
	);
};

// FUNCION PARA ENVIAR EL MENSAJE
const sendMessage = (event, userColors, setUserColors) => {
	event.preventDefault();
	const msg = {
		msg: event.target.message.value,
		color: asignUserColor(userColors, setUserColors)
	};
	socket.emit('message', msg);
	event.target.reset();
};

// FUNCION PARA GENERAR COLOR ALEATORIO PARA CADA UNO DE LOS USUARIOS
const generarColorPastel = () => {
	const newR = Math.floor(Math.random() * 128) + 128;
	const newG = Math.floor(Math.random() * 128) + 128;
	const newB = Math.floor(Math.random() * 128) + 128;

	const nuevoColor =
		'#' + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1);

	return nuevoColor;
};

// FUNCION PARA ASIGNAR EL COLOR DEL USUARIO
const asignUserColor = (userColors, setUserColors) => {
	const userId = socket.id;
	if (!userColors[userId]) {
		const color = generarColorPastel();
		setUserColors({ ...userColors, [userId]: color });
		return color;
	}
	return userColors[userId];
};

const getAllOfUsers = (users, setUsers, navigate) => {
	if (users.length === 0) {
		navigate('/');
	}
	setUsers(users);
};

export default Chat;
