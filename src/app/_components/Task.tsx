import {cn} from "@/src/app/_lib/utils/core";
import {CustomButton} from "@/ui/CustomButton";
import {ITask} from "@/types/index";

interface IProps {
	task: ITask;
	loading: boolean;
	onClickDelete: () => void;
	onClickCheck: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export function Task({task, loading = false, onClickCheck, onClickDelete}: IProps) {

	return (
		<div className='bg-c-primary-300 text-c-primary-100 rounded-md p-4 flex items-center justify-between min-w-96 min-h-20'>
			<p className={cn(task.completed ? "text-green-300 line-through" : "")}>{task.title}</p>

			{!task.completed && (
				<div className='flex items-center gap-2'>
					<CustomButton icon='Check' onClick={onClickCheck} loading={loading}/>
					<CustomButton icon='Trash' onClick={onClickDelete} />
				</div>
			)}
		</div>
	);
}
