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
                `w-full lg:w-auto justify-between font-normal hover:bg-emerald-200/60 hover:text-emerald-600 border-none 
                focus-within:ring-offset-0 focus-visible:ring-transparent outline-none text-white font-semibold focus:bg-emerald-200/30 
                transition`,
                isActive ? "bg-emerald-300/30 text-emerald-600 font-semibold" : "bg-transparent"
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