import { cn } from '@/lib/utils/core';
import { CustomButton } from '@/ui/CustomButton';

interface ITask {
	id: number
	title: string
	description: string
	isDone: boolean
}

interface IProps {
	task: ITask
}	

export function Task({task} : IProps) {
    return (
			<div className='bg-c-primary-300 text-c-primary-100 rounded-md p-4 flex items-center justify-between min-w-96 min-h-20'>
				<p className={cn(task.isDone ? 'text-green-300 line-through' : '')}>{task.title}</p>

				{!task.isDone &&<div className='flex items-center gap-2'>
					<CustomButton icon='Check' />
					<CustomButton icon='Trash' />
				</div>}
			</div>
		);
}