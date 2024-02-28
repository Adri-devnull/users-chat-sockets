import { Route, Routes } from 'react-router-dom';
import Chat from '../components/chat/Chat';
import Main from '../components/main/Main';

const Router = () => {
	return (
		<Routes>
			<Route index element={<Main />} />
			<Route path='/chat' element={<Chat />} />
		</Routes>
	);
};

export default Router;
