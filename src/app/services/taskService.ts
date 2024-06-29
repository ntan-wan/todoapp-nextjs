import {callApi} from "@/lib/utils/callApi";

export async function createTask(payload : object) {
	await callApi.post("/api/tasks", payload);

}
