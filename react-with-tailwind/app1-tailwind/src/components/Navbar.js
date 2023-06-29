import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    };
    return (
        <div className="w-screen bg-zinc-200 h-[80px] z-10 drop-shadow-lg sticky top-0">
            <div className="flex justify-between items-center px-2 w-full h-full">
                <div className="flex items-center">
                    <h1 className="uppercase font-bold text-black text-3xl sm:text-4xl mr-4">
                        Brand.
                    </h1>
                    <ul className="hidden lg:flex list-none">
                        <li className="capitalize">home</li>
                        <li className="capitalize">about</li>
                        <li className="capitalize">support</li>
                        <li className="capitalize">platforms</li>
                        <li className="capitalize">pricing</li>
                    </ul>
                </div>
                <div className="hidden lg:flex  pr-4 ">
                    <button className="capitalize text-black bg-transparent border-none mr-4 text-xs sm:text-lg">
                        sign in
                    </button>
                    <button className="capitalize px-2 py-3 text-xs sm:px-8 sm:text-lg">
                        sign up
                    </button>
                </div>
                <div className="lg:hidden" onClick={handleClick}>
                    {!nav ? (
                        <MenuIcon className="w-5" />
                    ) : (
                        <XIcon className="w-5" />
                    )}
                </div>
            </div>

            <ul
                className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}
            >
                <li className="border-b-2 border-zinc-300 w-full">Home</li>
                <li className="border-b-2 border-zinc-300 w-full">About</li>
                <li className="border-b-2 border-zinc-300 w-full">Support</li>
                <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
                <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
                <div>
                    <button className="bg-transparent text-indigo-600 w-full py-3 mb-3 hover:text-black hover:border-black">
                        Sign In
                    </button>
                    <button className="w-full py-3">Sign Up</button>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
