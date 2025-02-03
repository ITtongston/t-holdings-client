import React, { useState } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faTimes,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "/about" },
  {
    name: "Our Businesses",
    href: "#",
    dropdown: [
      { name: "Tongston Holdings", href: "/t-holdings" },
      { name: "Tongston Institute", href: "/t-institute" },
      { name: "Tongston College", href: "/t-college" },
      { name: "Tongston Ventures", href: "https://t-ventures.tongston.com" },
      { name: "Tongston Media", href: "https://t-hub.tongston.com/media" },
    ],
  },
  { name: "Tongston World", href: "https://t-world.tongston.com" },
  { name: "TworldK12", href: "http://tworldk12.zohosites.com" },
  { name: "Tees25", href: "https://tees25.tongston.com" },
  {
    name: "Innovations",
    href: "#",
    dropdown: [
      { name: "Events", href: "/events" },
      { name: " Insights", href: "/insights" },
    ],
  },
  { name: "Careers ", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background-light p-4  top-0 sticky z-50 h-20">
      <div className="flex items-center justify-between max-w-screen-xl ">
        <div className="text-black text-2xl font-semibold">
          <Link href="/">
            <Image
              src="/assets/images/logos/tlogo.png"
              onClick={() => setMobileMenuOpen(false)}
              alt="Tongston Logo"
              className="h-14 w-auto"
              height={200}
              width={200}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              {link.dropdown ? (
                <Menu as="div" className="relative">
                  <Menu.Button className="text-black font-heading font-bold text-xs flex items-center space-x-2 cursor-pointer">
                    <span>{link.name}</span>
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </Menu.Button>
                  <Transition
                    as={React.Fragment}
                    enter="transition transform ease-out duration-700"
                    enterFrom="opacity-0 scale-90 rotate-180"
                    enterTo="opacity-100 scale-100 rotate-0"
                    leave="transition transform ease-in-out duration-700"
                    leaveFrom="opacity-100 scale-100 rotate-0"
                    leaveTo="opacity-0 scale-90 rotate-180"
                  >
                    <Menu.Items className="absolute left-0 right-0 top-8 bg-background-light text-black font-heading font-bold text-xs p-2 shadow-md gap-y-2 max-h-[400px]  justify-center items-start  flex flex-col w-52">
                      {link.dropdown.map((dropdownItem, i) => (
                        <Menu.Item key={i}>
                          {({ active }) => (
                            <Link
                              href={dropdownItem.href}
                              className="hover:bg-gray-200 p-2  w-full transform ease-in-out duration-700  "
                            >
                              <div
                                className={` ${
                                  active
                                    ? "text-red-700"
                                    : "text-black font-bold text-sm "
                                } py-1 text-xs font-bold font-heading `}
                              >
                                {dropdownItem.name}
                              </div>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Link href={link.href}>
                  <div className="text-black hover:text-red-700 text-xs font-heading font-bold">
                    {link.name}
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <FontAwesomeIcon
            icon={mobileMenuOpen ? faTimes : faBars} // Switch between hamburger and X
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black text-3xl mr-4 cursor-pointer"
          />
          {mobileMenuOpen && (
            <div className="absolute top-20 right-0 bg-background-light  w-full max-h-screen overflow-y-auto p-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    {link.dropdown ? (
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex justify-between text-black py-2  w-full border-b border-b-background-footer_black p-2 border-opacity-20">
                              <span>{link.name}</span>
                              <FontAwesomeIcon
                                icon={faChevronDown}
                                className={` mt-1  ml-auto ${
                                  open ? "rotate-180" : ""
                                } transition-transform`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="pl-4 space-y-2">
                              {link.dropdown.map((dropdownItem, i) => (
                                <Link
                                  key={i}
                                  href={dropdownItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <div className="text-black py-2">
                                    {dropdownItem.name}
                                  </div>
                                </Link>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="text-black py-2 w-full border-b border-b-background-footer_black p-2 border-opacity-20  flex justify-between">
                          {link.name}
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="text-base text-black"
                          />
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
