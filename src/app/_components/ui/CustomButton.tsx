import {cn} from "@/src/app/_lib/utils/core";
import {CustomIcon} from "@/ui/CustomIcon";

interface IProps {
	className?: string;
	label?: string;
	icon?: string;
	iconPosition?: string;
	variant?: string;
	loading?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type?: string;
}

export function CustomButton(props: IProps) {
	const {className, icon, onClick, label, loading = false, variant = "primary", iconPosition = "right", ...otherProps} = props;

	const variants = {
		base: "p-2 rounded-md flex items-center justify-center gap-2 transition-colors",
		primary: "bg-c-primary-100 text-white hover:bg-purple-300",
		secondary: "bg-c-secondary-100 text-c-secondary-300",
		tertiary: "bg-c-tertiary-100 text-c-tertiary-300",
		danger: "bg-c-danger-100 text-c-danger-300",
		warning: "bg-red-100 text-c-warning-300",
	};

	const conditionStyles = {
		"pointer-events-none opacity-50": loading,
	};

	const renderView = () => {
		return (
			<>
				{loading && (
					<svg className='animate-spin  h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
						<circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
						<path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
					</svg>
				)}
				{icon && iconPosition == "left" && <CustomIcon icon={icon} className='text-white' />}
				{label && <span>{label}</span>}
				{icon && iconPosition == "right" && <CustomIcon icon={icon} className='text-white' />}
			</>
		);
	};

	return (
		<button onClick={onClick} className={cn(variants.base, variants[variant as keyof typeof variants], conditionStyles, className)}>
			<div className='flex items-center justify-center gap-3'>{renderView()}</div>
		</button>
	);
}
