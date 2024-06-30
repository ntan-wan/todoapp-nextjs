import { cn } from "@/src/app/_lib/utils/core"

interface IProps {
    children: React.ReactNode,
    className?: string
};
export function CustomCard({ children , className}: IProps) {
    return (
        <div className={cn("bg-c-cream p-4 rounded-md", className)}>
            {children}
        </div>
    )
}