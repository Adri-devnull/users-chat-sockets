import styled from 'styled-components';

const StyledContainerLogin = styled.div`
	background-color: aliceblue;
	height: 400px;
	padding: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	border-radius: 20px;
	width: 100%;
	box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`;

const StyledImg = styled.img`
	width: 120px;
	height: 120px;
`;

const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

const StyledInput = styled.input`
	padding: 10px;
	border: 2px solid #1f4e7a;
	border-radius: 10px;
	width: 100%;
`;

const StyledLabel = styled.label`
	font-size: 1.05em;
	font-weight: 500;
`;

const StyledButton = styled.button`
	padding: 10px 20px;
	border-radius: 10px;
	border: 2px solid #2c6e2c;
	background-color: #81c785;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	font-size: 1.01em;
`;
export {
	StyledButton,
	StyledContainerLogin,
	StyledImg,
	StyledInput,
	StyledInputContainer,
	StyledLabel
};
