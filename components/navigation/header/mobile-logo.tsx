import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/public/logo.svg";

export const MobileLogo = () => {
    return (
        <div className='md:hidden'>
            <Link href="/" className="h-16 flex ">
                <Image
                    src={Logo}
                    height={64}
                    width={180}
                    priority
                    alt=""
                    className="px-3 "
                />
            </Link>
        </div>
    )
}
