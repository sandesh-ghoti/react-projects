import React from "react";
import { MenuIcon, CloseIcon } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const handleClose = () => setNav(!nav);
    return (
        <div className="w-screen bg-zinc-200 h-[80px] z-10 drop-shadow-lg flex justify-between items-center px-2 fixed">
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
            <div className="hidden lg:flex float-right pr-4 ">
                <button className="capitalize text-black bg-transparent border-none mr-4 text-xs sm:text-lg">
                    sign in
                </button>
                <button className="capitalize px-2 py-3 text-xs sm:px-8 sm:text-lg">
                    sign up
                </button>
            </div>

            <div className="lg:hidden mr-5" onclick={handleClick}>
                {!nav ? (
                    <MenuIcon className="w-10" />
                ) : (
                    <CloseIcon className="w-10" />
                )}
            </div>
            <ul
                className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}
            >
                <li className="capitalize border-b-2 border-zinc-300 w-full">
                    <Link
                        onclick={handleClose}
                        to="Home"
                        smooth={true}
                        duration={500}
                    >
                        home
                    </Link>
                </li>
                <li className="capitalize border-b-2 border-zinc-300 w-full">
                    <Link
                        onclick={handleClose}
                        to="About"
                        smooth={true}
                        duration={500}
                    >
                        about
                    </Link>
                </li>
                <li className="capitalize border-b-2 border-zinc-300 w-full">
                    <Link
                        onclick={handleClose}
                        to="support"
                        smooth={true}
                        duration={500}
                    >
                        support
                    </Link>
                </li>
                <li className="capitalize border-b-2 border-zinc-300 w-full">
                    <Link
                        onclick={handleClose}
                        to="platforms"
                        smooth={true}
                        duration={500}
                    >
                        platforms
                    </Link>
                </li>
                <li className="capitalize border-b-2 border-zinc-300 w-full">
                    <Link
                        onclick={handleClose}
                        to="pricing"
                        smooth={true}
                        duration={500}
                    >
                        pricing
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
