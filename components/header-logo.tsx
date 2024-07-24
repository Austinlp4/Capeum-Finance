import Link from 'next/link';
import Image from 'next/image';

export const HeaderLogo = () => {
    return (
        <Link href="/">
            <Image
                src="/logo-latest-small.png"
                alt="Logo"
                width={60}
                height={60}
                className='shadow-lg rounded-full'
            />
        </Link>
    )
};