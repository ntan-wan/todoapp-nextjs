import { cn } from "@/lib/utils/core";
import { CustomIcon } from "@/src/app/ui/CustomIcon"

interface IProps {
    className?: string
	label?: string
	icon?: string
	iconPosition?: string
	variant?: string
}

const variants = {
	base: "p-2 rounded-md flex items-center justify-center gap-2 transition-colors",
	primary: "bg-c-primary-100 text-white hover:bg-purple-300",
	secondary: "bg-c-secondary-100 text-c-secondary-300",
	tertiary: "bg-c-tertiary-100 text-c-tertiary-300",
	danger: "bg-c-danger-100 text-c-danger-300",
	warning: "bg-red-100 text-c-warning-300",
}

export function CustomButton({className, icon, label, variant = 'primary', iconPosition = 'right'}: IProps) {
    return (
			<button className={cn(variants.base, variants[variant as keyof typeof variants] ,className)}>

				<div className='flex items-center gap-3'>
					{icon && iconPosition == "left" && <CustomIcon icon={icon} className="text-white"/>}
					{label && <span>{label}</span>}
					{icon && iconPosition == "right" && <CustomIcon icon={icon} className="text-white"/>}
				</div>

			</button>
	);
}