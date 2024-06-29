import { CustomIcon } from '@/src/app/ui/CustomIcon';

export function Task() {
    return (
        <div className="bg-c-brown rounded-md p-4 flex items-center justify-between">

            <div>
                <p className='text-2xl font-semibold'>Learn Javascript</p>
                <small className="mt-2 block text-gray-500 text-base">Master the language powering the modern web</small>
                <p className='mt-4 text-lg font-semibold'>Start date: 07-07-2023</p>
            </div>

            <div className='flex flex-col gap-4'>
                <CustomIcon iconName="CheckCircle"/>
                <CustomIcon iconName="PencilSquare"/>
                <CustomIcon iconName="Trash"/>
            </div>

        </div>
    )
}