import TaskPage from "./TaskPage";
import {PrismaClient} from "@prisma/client";

export default async function Page() {
	const prisma = new PrismaClient();

	const tasks = await prisma.task.findMany();
	console.log(tasks);

	return <TaskPage tasks={tasks} />;
}