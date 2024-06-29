'use client'

import { cn } from "@/lib/utils/core";
import { useEffect, useState } from "react";

interface IProps {
    icon: string
    className? : string
}


export function CustomIcon({icon, className, } : IProps) {
    const [IconComponent, setIconComponent] = useState<React.ComponentType<{className:string}> | null>(null);

    useEffect(() => {
        const importIcon = async () => {
            try {
                const heroIcon = await import(`@heroicons/react/24/outline`);
                const selectedHeroIcon = (heroIcon as any)[`${icon}Icon`];
                 setIconComponent(selectedHeroIcon);

            } catch (error) {
                console.error(`Icon ${icon} not found in ${icon} library`, error);
            }
        };
        importIcon();
    }, [icon]);

    return IconComponent ? <IconComponent className={cn('size-6 text-c-primary-100', className)}/> : null
}