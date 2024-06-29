import { cn } from "@/lib/utils/core";
import { CustomIcon } from "@/src/app/ui/CustomIcon";

interface IProps {
  icon?: string;
  iconPosition?: string;
  className?: string;
  placeholder?: string;
  readOnly?: boolean;
  onClick?: () => void;
}

const variants = {
	base: "w-full c-input  bg-blue-100 p-2 rounded-md",
};

export function CustomInput({ className, placeholder, icon, iconPosition = "right", ...props }: IProps) {
  return (
    <div className='relative w-full'>

      {icon && (
        <div className={cn("absolute inset-y-0 flex items-center pointer-events-none", iconPosition == "right" ? "right-[8px]" : "left-[8px]")}>
          <CustomIcon icon={icon} className='text-gray-400' />
        </div>
      )}
	  
      <input placeholder={placeholder} {...props} type='text' className={cn(variants.base, className)} />
    </div>
  );
}
