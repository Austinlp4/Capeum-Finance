'use client';

import {
    Sheet,
    SheetContent,
    SheetTrigger
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useMedia } from 'react-use';
import { usePathname, useRouter } from "next/navigation";
import { NavButton } from "./nav-button";
import { useState } from 'react';
import { Menu } from 'lucide-react';

const routes = [
    {
        href: '/',
        label: 'Dashboard'
    },
    {
        href: '/transactions',
        label: 'Transactions'
    },
    {
        href: '/accounts',
        label: 'Accounts'
    },
    {
        href: '/categories',
        label: 'Categories'
    },
    {
        href: '/settings',
        label: 'Settings'
    }
];

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const router = useRouter();
    const pathname = usePathname();
    const isMobile = useMedia('(max-width: 1024px)', false);

    const onClick = (href: string) => {
        router.push(href);
        setIsOpen(false);
    }

    if (isMobile) {
        return (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                    <Button
                        variant={'outline'}
                        size={'sm'}
                        className={
                            `font-normal bg-amber-300/30 hover:bg-white-200/80 hover:text-amber-800 
                            border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none
                            text-amber-800 focus:bg-amber-200/30 transition`
                        }
                    >
                        <Menu className='size-4' />
                    </Button>
                </SheetTrigger>
                <SheetContent side='left' className='px-2'>
                        <nav className='flex flex-col gap-y-2 pt-6'>
                            {routes.map((route) => (
                                <Button
                                    variant={route.href === pathname ? 'secondary' : 'ghost'}
                                    key={route.href}
                                    onClick={() => onClick(route.href)}
                                    className='w-full justify-start'
                                >
                                    {route.label}
                                </Button>
                            ))}
                        </nav>
                </SheetContent>
            </Sheet>
        )
    }

    return (
        <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
            {routes.map((route) => (
                <NavButton 
                    key={route.href}
                    href={route.href}
                    label={route.label}
                    isActive={pathname === route.href}
                />
            ))}
        </nav>
    )
}