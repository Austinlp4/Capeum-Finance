import Link from 'next/link';
import Image from 'next/image';

export const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className='items-center hidden lg:flex'>
                <Image
                    src="/capeum-logo-sm.png"
                    alt="Logo"
                    width={28}
                    height={28}
                />
                <p className='font-semibold text-amber-600 text-2xl ml-2.5'>
                    Capeum
                </p>
            </div>
        </Link>
    )
};