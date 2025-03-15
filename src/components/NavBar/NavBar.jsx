"use client";

import logo from "../../assets/logo/logo_blue.png";
import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
} from "keep-react";
import Image from "next/image";
import Link from "next/link";
import { MdCall } from "react-icons/md";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItemDesktop = (
        <ul className="flex flex-col justify-start items-start md:flex-row md:justify-center md:items-center space-x-8 lg:space-x-10">
            <li
                className={`hover:border-b-2 border-primary cursor-pointer uppercase ${isScrolled ? "text-[var(--color-primary)]" : "text-white"
                    }`}
            >
                <Link href="/">Home</Link>
            </li>
            <li
                className={`hover:border-b-2 border-primary cursor-pointer uppercase ${isScrolled ? "text-[var(--color-primary)]" : "text-white"
                    }`}
            >
                <Link href="/about">About Us</Link>
            </li>
            <li
                className={`hover:border-b-2 border-primary cursor-pointer uppercase ${isScrolled ? "text-[var(--color-primary)]" : "text-white"
                    }`}
            >
                <Link href="/services">Services</Link>
            </li>
            <li
                className={`hover:border-b-2 border-primary cursor-pointer uppercase ${isScrolled ? "text-[var(--color-primary)]" : "text-white"
                    }`}
            >
                <Link href="/career">Career</Link>
            </li>
            <li
                className={`hover:border-b-2 border-primary cursor-pointer uppercase ${isScrolled ? "text-[var(--color-primary)]" : "text-white"
                    }`}
            >
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );

    const navItemMobile = (
        <ul className="flex flex-col justify-start items-start flex-grow-0 space-x-0 w-full">
            <li
                className={`pb-3 border-b-[1px] border-black w-full uppercase bg-white text-[var(--color-primary)]`}
            >
                <Link href="/">Home</Link>
            </li>
            <li
                className={`py-3 border-b-[1px] border-black w-full uppercase bg-white text-[var(--color-primary)]`}
            >
                <Link href="/about">About Us</Link>
            </li>
            <li
                className={`py-3 border-b-[1px] border-black w-full uppercase bg-white text-[var(--color-primary)]`}
            >
                <Link href="/services">Services</Link>
            </li>
            <li
                className={`py-3 border-b-[1px] border-black w-full uppercase bg-white text-[var(--color-primary)]`}
            >
                <Link href="/career">Career</Link>
            </li>
            <li
                className={`py-3 border-b-[1px] border-black w-full uppercase bg-white text-[var(--color-primary)]`}
            >
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );

    return (

        <Navbar
            className={`fixed z-50 border-none w-full px-5  transition-colors duration-300 font-semibold ${isScrolled
                ? "bg-white text-[var(--color-primary)] shadow-xl"
                : "bg-transparent text-white shadow-xl"
                }`}
        >
            <NavbarContainer className="flex items-center justify-between w-full mx-auto">
                <NavbarBrand>
                    <Image
                        src={logo}
                        width={150}
                        height={150}
                        alt="Logo"
                        loading="lazy"
                        className="h-auto rounded-full"
                    />
                </NavbarBrand>

                {/* Desktop Menu */}
                <NavbarList className="hidden lg:flex space-x-6 text-base">
                    {navItemDesktop}
                </NavbarList>

                <button className="flex-row justify-start items-center hidden lg:flex">
                    {/* <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary)] transform translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-0"></span> */}
                    <MdCall className="w-6 h-6 mr-2 relative z-10" />
                    <span className="relative z-10 flex flex-col items-start justify-start">
                        <span>call us now :</span>
                        <span>+880 15336 33913</span>
                    </span>
                </button>


                {/* Mobile Menu Button */}
                <NavbarCollapseBtn />

                {/* Mobile Menu */}
                <NavbarCollapse className="lg:hidden sm:w-full">
                    <NavbarList className="flex flex-col justify-start items-start space-y-3 w-full text-base mt-3">
                        {navItemMobile}
                    </NavbarList>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>

    );
};

export default NavBar;
