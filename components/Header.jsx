import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Header = () => {
    return (
        <div className="navbar bg-secondary">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">DD Shop</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Kezdőlap</a></li>
                    <li><a>Rólunk</a></li>
                    <li><a>Áraink</a></li>
                    <li><a>Referenciák</a></li>
                    <li><a>Kapcsolat </a></li>
                </ul>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="justify-between" href="/login"><Button>Bejelentkezés</Button> </Link>
                        </li>
                        <li><a>Regisztráció</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;