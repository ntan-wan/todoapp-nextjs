import { useState } from "react";
import {cn} from "@/src/app/_lib/utils/core";
import {Task} from "@/components/Task";
import {ITask} from "@/types/index";
import * as taskService from "@/services/taskService";

interface IProps {
	className?: string;
	tasks: ITask[];
}

export function TaskList({tasks, className}: IProps) {

	const [loading, setLoading] = useState(false);

	const handleCheckTask = async (taskId: string | number) => {
		const payload : {taskId: string | number; completed: boolean} = {
			taskId: taskId,
			completed:true
		}

		try {
			setLoading(true);
			await taskService.updateTask(payload);
			location.reload()
		} catch(err) {

		}finally {
			setLoading(false);
		}
	};

	const renderView = (tasks: ITask[]) => {
		if (!tasks?.length) {
			return <p className="text-white text-center"><i>No Tasks Found</i></p>;
		} else {
			return (
				<div className='flex flex-col gap-4'>
					{tasks.map((task) => (
						<Task key={task.id} loading={loading} task={task} onClickCheck={() => handleCheckTask(task.id)} onClickDelete={() => {}}/>
					))}
				</div>
			);
		}
	};

	return <div className={cn(className)}>{renderView(tasks)}</div>;
}
