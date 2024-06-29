"use client";

import {useState} from "react";
import {CustomInput} from "@/ui/CustomInput";
import {CustomButton} from "@/ui/CustomButton";
import {TaskList} from "@/components/TaskList";
import * as taskServices from "@/services/taskService";
import {sleep} from "@/lib/utils/core";

export default function HomePage() {
	const [isLoading, setIsLoading] = useState(false);
	const [taskInput, setTaskInput] = useState("");
	const tasks = [
		{
			id: 1,
			title: "Learn Javascript",
			description: "Master the language powering the modern web",
			isDone: false,
		},
		{
			id: 2,
			title: "Learn React",
			description: "Master the language powering the modern web",
			isDone: true,
		},
	];

	const handleAddTask = async (e: React.MouseEvent<HTMLFormElement>) => {
		e.preventDefault();

		const payload = {
			title: taskInput,
		};

		try {
			setIsLoading(true);
			await taskServices.createTask(payload);
			setTaskInput("");
			await sleep(300);
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
				<h6 className='c-header'>Task To Do - 4</h6>
				<TaskList tasks={tasks} />
			</div>

			<div className='mt-10'>
				<h6 className='c-header'>Done - 1</h6>
				<TaskList tasks={tasks} /> 
			</div>
		</div>
	);
}
