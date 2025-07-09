import { useEffect } from "react";
import $ from "jquery";
import Link from "next/link";

export default function Nav() {

    useEffect(() => {
        $(document).ready(() => {
            $("#toggleButton").click(() => {
                $("#nav-links").toggle(200);
            })
        });
    }, []);

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
                    <Link href={"/"}>
                        <h5 className="logo">Learning Impact Zambia (LIZ)</h5>
                    </Link>
                </div>
                
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-gray-600 hover:border-white" id="toggleButton">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>

                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto nav-links" id="nav-links">
                    <div className="text-sm lg:flex-grow">
                        <ul>
                            <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 mr-4">
                            Docs
                            </Link>
                            <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 mr-4">
                                Examples
                            </Link>
                            <Link href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600">
                                Blog
                            </Link>
                        </ul>
                    </div>

                    <div>
                        <Link href={"#about-us"} className="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-800 border-gray-600 hover:border-transparent hover:text-gray-100 hover:bg-gray-600 transition mt-4 lg:mt-0">About Us</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}