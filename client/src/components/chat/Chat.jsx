import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { socket } from '../../sockets/socket';

const Chat = () => {
	const [users, setUsers] = useState([]);
	// const [messages, setMessages] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		socket.on('users', allUsersConnected => {
			if (allUsersConnected.length === 0) {
				navigate('/');
			}
			setUsers(allUsersConnected);
		});
	}, []);

	return (
		<div>
			<div>
				<h3>Usuarios conectados</h3>
				{users.map(user => (
					<li key={user.id}>{user.username}</li>
				))}
			</div>

			<div>
				<h3>Mensajes del chat</h3>
				{/* Mensajes del chat en directo  */}
			</div>
			<form onSubmit={event => sendMessage(event)}>
				<input type='text' id='message' />
				<button>Send</button>
			</form>
		</div>
	);
};

// FUNCION PARA ENVIAR EL MENSAJE

const sendMessage = event => {
	event.preventDefault();
	const msg = event.target.message.value;
	socket.emit('message', msg);
	event.target.reset();
};

export default Chat;
