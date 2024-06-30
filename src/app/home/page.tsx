import TaskPage from "./TaskPage";
import {PrismaClient} from "@prisma/client";


export default async function Page() {

	const prisma = new PrismaClient();

	const tasks = await prisma.task.findMany(
		{
			orderBy: {
				createdAt: "desc",
			},
		}
	);

	return <TaskPage tasks={tasks} />;
}