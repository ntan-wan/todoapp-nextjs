import {api} from "@/src/app/_lib/utils/api";

export async function createTask(payload : object) {
	await api.post("/api/tasks", payload);
}

export async function updateTask(payload: object) {
	await api.put("/api/tasks", payload);
}
