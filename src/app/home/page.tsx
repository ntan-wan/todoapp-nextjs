import { CustomInput } from "@/ui/CustomInput";
import { CustomButton } from "@/ui/CustomButton";
import { TaskList } from "@/components/TaskList";

export default  function HomePage() {

	const tasks = [
		{
			id: 1,
			title: "Learn Javascript",
			description: "Master the language powering the modern web",
			isDone:false
		},
		{
			id: 2,
			title: "Learn React",
			description: "Master the language powering the modern web",
			isDone: true
		}
	]

	return (
		<div>
			<div className='flex items-center gap-4'>
				<CustomInput className='flex-1' placeholder='Add New Task' />
				<CustomButton icon="Plus"/>
			</div>

			<div className="mt-10">
				<h6 className="c-header">Task To Do - 4</h6>
				<TaskList tasks={tasks} />
			</div>

			<div className="mt-10">
				<h6 className="c-header">Done - 1</h6>
				<TaskList tasks={tasks} /> 
			</div>
		</div>
	);
}