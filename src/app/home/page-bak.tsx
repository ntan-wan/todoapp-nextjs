import {CustomCard} from "@/ui/CustomCard";
import {CustomButton} from "@/ui/CustomButton";
import {CustomInput} from "@/ui/CustomInput";
import {CustomDropdown} from "@/ui/CustomDropdown";
import {Task} from "@/components/Task";

export default function HomePage() {
	const tasks = [
		{
			id: 1,
			title: "Learn Javascript",
			description: "Master the language powering the modern web",
		},

		{
			id: 2,
			title: "Learn React",
			description: "Master the language powering the modern web",
		},

		{
			id: 3,
			title: "Learn Next.js",
			description: "Master the language powering the modern web",
		},

		{
			id: 4,
			title: "Learn TypeScript",
			description: "Master the language powering the modern web",
		},
	];

	const filter1 = [
		{label: "label", value: "value 1"},
		{label: "label 2", value: "value 2"},
		{label: "very long label", value: "value 3"},
	];
	const filter2 = [{label: "label", value: "value"}];

	return (
		<>
			<h1 className='text-5xl font-semibold text-center'>Hello Aqeel, start planning today</h1>

			<CustomCard className='mt-6'>
				<div className='flex'>
					<div className='w-4/12'>left</div>

					<div className='w-8/12'>
						<div className='flex items-center justify-between gap-4 p-[8px]'>
							<CustomInput placeholder='Title' />
							<CustomInput placeholder='Description' />
							<CustomButton />
						</div>

						<div className='p-[8px] flex items-center gap-4'>
							<CustomDropdown options={filter1} className='flex-1' />
							<CustomDropdown options={filter2} className='flex-1' />
							<CustomInput placeholder='Search By Name' icon='MagnifyingGlass' className='ml-auto block flex-1 md:w-60' />
						</div>

						<div className='mt-[8px] flex flex-wrap'>
							{tasks.map((task) => (
								<div key={task.id} className='w-6/12 p-[8px]'>
									<Task />
								</div>
							))}
						</div>
					</div>
				</div>
			</CustomCard>
		</>
	);
}
