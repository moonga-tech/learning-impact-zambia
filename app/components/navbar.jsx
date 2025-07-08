import Link from "next/link";
import GreenButton from "./button"

export default function Nav() {
    return (
        <>
            <nav className="flex justify-between">
                <div className="flex gap-10 py-2 div-links">
                    <Link href={"/"}>
                        <h5 className="logo">Learning Impact Zambia (LIZ)</h5>
                    </Link>
                </div>
                
                <div className="links flex gap-10 flex-end">
                    <ul className="flex gap-5 py-2">
                        <Link href={"/"}>
                            <li>Home</li>
                        </Link>
                        <Link href={"#our-vision"}>
                            <li>Our Vision</li>
                        </Link>
                        <Link href={"#our-mission"}>
                            <li>Our Mission</li>
                        </Link>
                    </ul>

                    <Link href={"#about-us"}>
                        <GreenButton />
                    </Link>
                </div>
            </nav>
        </>
    )
}