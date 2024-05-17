import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type NavButtonProps = {
    href: string;
    label: string;
    isActive: boolean;
}

export const NavButton = ({ 
    href, 
    label, 
    isActive 
}: NavButtonProps) => {
    return (
        <Button
            asChild
            size={'sm'}
            variant={'outline'}
            className={cn(
                `w-full lg:w-auto justify-between font-normal hover:bg-amber-200/60 hover:text-amber-600 border-none 
                focus-within:ring-offset-0 focus-visible:ring-transparent outline-none text-amber-800 focus:bg-amber-200/30 
                transition`,
                isActive ? "bg-amber-300/30 text-amber-600 font-semibold" : "bg-transparent"
            )}
        >
            <Link
                href={href}
            >
                {label}
            </Link>
        </Button>
    )
}