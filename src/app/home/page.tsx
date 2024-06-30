import TaskPage from "./TaskPage";
import {PrismaClient} from "@prisma/client";

export const dynamic = "force-dynamic";

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