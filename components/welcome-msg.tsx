'use client';

import { useUser } from '@clerk/nextjs';

export const WelcomeMsg = () => {
    const { user, isLoaded } = useUser();

    return (
        <div className='space-y-2 mb-4'>
            <h2 className='text-2xl lg:text-4xl text-amber-800'>
                Welcome Back{isLoaded && user?.firstName ? `, ${user.firstName}` : ''} <span className='animate-wiggle'>✋</span>
            </h2>
            <p className='text-sm lg:text-base text-amber-600'>
                This is your Personal Financial Dashboard
            </p>
        </div>
    )
}