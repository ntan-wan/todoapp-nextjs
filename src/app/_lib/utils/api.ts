import axios from "axios";

export const api = axios.create();

api.interceptors.response.use(
	// (response) => {
	// 	return response.data;
	// },
	// (error) => {
	// 	return Promise.reject(error);
	// }
);