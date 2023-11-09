import { API_URL } from "../config";

export const fetchTaskList = async () => {
	try {
		const response = await fetch(API_URL);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching task list: ", error);
		throw error;
	}
};
