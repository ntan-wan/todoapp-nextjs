import { cn } from "@/lib/utils/core"
import { Task } from "@/components/Task";

interface ITask {
	id: number
	title: string
	description: string
	isDone:boolean
}

interface IProps {
	className?: string,
	tasks : ITask[]
}

export function TaskList({tasks, className} : IProps) {

	const renderView = (tasks : ITask[]) => {
		if (!tasks?.length) {
			return (
				<p>There are no tasks</p>
			)
		} else {
			return (
				<div className="flex flex-col gap-4">
					{tasks.map((task) => (
						<Task key={task.id} task={task}/>
					))}
				</div>
			)
		}
	}

	return (
		<div className={cn(className)}>
			{renderView(tasks)}
		</div>
	)
}