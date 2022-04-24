import Link from "next/link";
import { useRouter } from "next/router";

import React from 'react'

const NavBar = () => {
    return (
        <div className="w-full flex justify-center bg-slate-100">
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
            <button className="p-10">
                <Link href="https://github.com/">
                    Github
                </Link>
            </button>

        </div>
    )
}

export default NavBar