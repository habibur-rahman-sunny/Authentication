"use client"
import { signOut, useSession } from '@/app/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const { data } = useSession()
    // console.log(user);
    const accountUser = data?.user
    console.log(accountUser);
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="relative flex h-16 items-center justify-between px-6">
                    {/* Left */}
                    <p className="font-bold">ACME</p>
                    {/* Center */}
                    <ul className="absolute left-1/2 flex -translate-x-1/2 items-center gap-4">
                        <li><Link href="/home">Home</Link></li>
                        <li><Link href="/feature">Features</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                    </ul>
                    {/* Right */}
                    <div>
                        {
                            accountUser ?
                            <Link href="/auth/signin">
                                <button
                                    onClick={() => signOut()}
                                >sign out</button>
                            </Link>
                            : <Link href="/auth/signin"><Button >sign in</Button></Link>
                        }
                    </div>
                </header>
            </nav>
        </div>
    );
}
export default Navbar;