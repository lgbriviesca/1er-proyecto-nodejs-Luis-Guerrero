import axios from 'axios';

import { transfersActions } from '../slices/transfers.slice';

const API_URL = 'http://localhost:4000/api/v1/';


export const getUsersTransfers = () => {
	return async dispatch => {
		try {
			console.log("Me ejecute")
			const id = localStorage.getItem("userId")
			console.log(id)
			const res = await axios.get(`${API_URL}users/${id}/history`)
			console.log("hola")
			dispatch(transfersActions.getTransfers(res.data.user));
		} catch (error) {
			console.log(error);
		}
	};
};

export const newTransfer = (accountInputRef, sendAccountInputRef, amountInputRef) => {
	return async dispatch => {
		try {
			const dataTransfer = {accountInputRef, sendAccountInputRef, amountInputRef};
			const res = await axios.post(`${API_URL}transferences`, dataTransfer )
			console.log(res.data)
			//dispatch(transfersActions.newTransfer(res.data));
		} catch (error) {
			console.log(error);
		}
	};
};