import Link from "next/link";

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
                <Link href="https://github.com/darkMatterChimpanzee/gitQR">
                    SourceCode
                </Link>
            </button>

        </div>
    )
}

export default NavBar