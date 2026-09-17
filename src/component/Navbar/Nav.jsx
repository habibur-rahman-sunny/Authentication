import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="relative flex h-16 items-center justify-between px-6">
                    {/* Left */}
                    <p className="font-bold">ACME</p>
                    {/* Center */}
                    <ul className="absolute left-1/2 flex -translate-x-1/2 items-center gap-4">
                        <li><Link href="/feature">Features</Link></li>
                        <li><Link href="#">Pricing</Link></li>
                    </ul>
                    {/* Right */}
                    <Link href='/auth/signin' ><Button>Sign In</Button></Link>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;