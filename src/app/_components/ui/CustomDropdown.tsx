import {cn} from "@/src/app/_lib/utils/core";

interface IOption {
	label: string;
	value: string;
}

interface IProps {
	className?: string;
	options: IOption[];
}

export function CustomDropdown({options, className}: IProps) {

	if (!options || !options?.length) {
		return (
			<select className={cn("bg-blue-100 px-2 py-2 rounded-md")}>
				<option  hidden value=''></option>
				<option value=''>There are no options </option>
			</select>
		);
	}

	return (
		<select className={cn("bg-blue-100 px-2 py-2 rounded-md", className)}>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
}
