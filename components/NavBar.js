import Link from "next/link";
import { useRouter } from "next/router";

import React from 'react'

const NavBar = () => {
    return (
        <div className="w-full flex justify-center">
            <button className="p-10">
                <Link href="/">
                    QR
                </Link>
            </button>
            <button className="p-10">
                <Link href="/scan">
                    Scan
                </Link>
            </button>

        </div>
    )
}

export default NavBar