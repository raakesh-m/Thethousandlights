"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/assets/logoblack.svg";
import { Link as ScrollLink } from "react-scroll";

const menuItems = [
  {
    name: "Home",
    href: "home", // Provide the ID of the section to scroll to
  },
  {
    name: "About us",
    href: "about",
  },
  {
    name: "Services",
    href: "services",
  },
  {
    name: "Inquiry",
    href: "inquiry",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed py-2 w-full bg-[#FDF7E4] z-30">
      <div className="mx-auto flex max-w-full items-center px-4 py-2 sm:px-6 lg:px-8">
        <div className="lg:inline-flex items-center fixed ml-2 hidden space-x-2">
          <ScrollLink
            to="slider"
            smooth={true}
            duration={500}
            className=" cursor-pointer"
            onClick={closeMenu}
          >
            <Image src={logo} alt="The Thousand Lights" />
          </ScrollLink>
        </div>
        <div className="hidden mx-auto lg:block">
          <ul className="inline-flex space-x-16">
            {menuItems.map((item) => (
              <li key={item.name}>
                <ScrollLink
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="font-judson text-lg px-6 py-4 cursor-pointer text-black hover:border-b-4 border-[#503c16]"
                  onClick={closeMenu}
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden flex items-center w-full ">
          <Menu
            onClick={toggleMenu}
            className="h-6 w-6 text-black fixed cursor-pointer"
          />
          <ScrollLink
            to="slider"
            smooth={true}
            duration={500}
            className=" cursor-pointer flex items-center justify-center mx-auto w-10"
            onClick={closeMenu}
          >
            <Image src={logo} alt="The Thousand Lights" />
          </ScrollLink>
        </div>

        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right w-2/3  transform  transition lg:hidden">
            <div className="divide-y-2 divide-gray-50  bg-[#B79666] shadow-lg h-screen ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <ScrollLink
                      to="slider"
                      smooth={true}
                      duration={500}
                      className=" cursor-pointer"
                      onClick={closeMenu}
                    >
                      <Image
                        src={logo}
                        alt="The Thousand Lights"
                        className="w-10"
                      />
                    </ScrollLink>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6 text-black" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <ScrollLink
                        key={item.name}
                        to={item.href}
                        smooth={true}
                        duration={500}
                        className="-m-3 flex items-center cursor-pointer rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        onClick={closeMenu}
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </ScrollLink>
                    ))}
                  </nav>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Button text
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
