"use client";

import { useState} from "react";
import {CustomInput} from "@/ui/CustomInput";
import {CustomButton} from "@/ui/CustomButton";
import {TaskList} from "@/components/TaskList";
import * as taskServices from "@/services/taskService";
import {ITask} from "@/types/index";

interface IProps {
	tasks: ITask[]
}

export default function TaskPage({tasks} : IProps) {
	const [isLoading, setIsLoading] = useState(false);
	const [taskInput, setTaskInput] = useState("");
	const completedTasks = tasks.filter((task) => task.completed);
	const incompleteTasks = tasks.filter((task) => !task.completed);

	const handleAddTask = async (e: React.MouseEvent<HTMLFormElement>) => {
		e.preventDefault();

		const payload = {
			title: taskInput,
		};

		try {
			setIsLoading(true);
			await taskServices.createTask(payload);
			setTaskInput("");
			location.reload();
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	const handleTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTaskInput(e.target.value);
	};

	return (
		<div>
			<form onSubmit={handleAddTask}>
				<div className='flex items-center gap-4'>
					<CustomInput className='flex-1' placeholder='Add New Task' onChange={handleTaskInput} value={taskInput} />
					<CustomButton icon='Plus' type='submit' loading={isLoading} />
				</div>
			</form>

			<div className='mt-10'>
				<h6 className='c-header'>Task To Do - {incompleteTasks?.length}</h6>
				<TaskList tasks={incompleteTasks} />
			</div>

			<div className='mt-10'>
				<h6 className='c-header'>Done - {completedTasks?.length}</h6>
				<TaskList tasks={completedTasks} /> 
			</div>
		</div>
	);
}
