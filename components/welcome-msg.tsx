'use client';

import { useUser } from '@clerk/nextjs';

export const WelcomeMsg = () => {
    const { user, isLoaded } = useUser();

    return (
        <div className='space-y-2 mb-4 bg-white/20 backdrop-blur-xl w-fit p-8 py-8 rounded-md drop-shadow-lg'>
            <h2 className='text-2xl lg:text-4xl text-emerald-800 font-bold'>
                Stay ahead of your finances
                {/* <span className='animate-wiggle'>✋</span> */}
            </h2>
            <p className='text-base lg:text-lg text-emerald-700'>
                Your Personal Financial Dashboard
            </p>
        </div>
    )
}