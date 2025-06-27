"use client";
import Image from "next/image";
import Logo from "@/assets/images/Logo.svg";
import Link from "next/link";
import { ToggleTheme } from "../ui/ToggleTheme";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type NavbarLink = {
  label: string 
  href: string;
};

export interface BaseNavbarProps {
  links: NavbarLink[];
  actionButton?: NavbarLink;
  extraComponent?: React.ReactNode;
}

export function Navbar({
  links,
  actionButton,
  extraComponent,
}: BaseNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        className="py-4 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn" }}
      >
        <div className="container fixed z-50">
          <div className="rounded-md backdrop-blur-lg shadow-sm dark:bg-transparent dark:shadow-white/15">
            {/* Topo da Navbar */}
            <div className="flex justify-between items-center p-4">
              <Link href={"/"}>
                <Image
                  src={Logo}
                  alt="Logo"
                  className="w-auto h-8 md:h-10 dark:invert"
                />
              </Link>

              {/* Menu Desktop */}
              <nav className="hidden gap-6 items-center md:flex">
                {links.map((link) => (
                  <Link
                    key={`${link.label}`}
                    href={link.href}
                    className="border-b border-b-transparent hover:border-b-black dark:hover:border-b-white transition duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
                <ToggleTheme />
                {extraComponent}
                {actionButton && (
                  <Link href={actionButton.href}>
                    <Button variant={"outline"} className="cursor-pointer">{actionButton.label}</Button>
                  </Link>
                )}
              </nav>

              {/* Botões Mobile */}
              <div className="flex justify-end gap-3 md:hidden">
                <AnimatePresence mode="wait">
                  {!isOpen ? (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setIsOpen(true)}
                    >
                      <Menu />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0.2, rotate: -90 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      onClick={() => setIsOpen(false)}
                    >
                      <X />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Dropdown Mobile */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 60,
                  }}
                >
                  <div className="flex flex-col items-center gap-4 p-6">
                    <ToggleTheme />
                    {links.map((link) => (
                      <Link
                        key={`${link.label}`}
                        href={link.href}
                        className="py-2 font-semibold"
                      >
                        {link.label}
                      </Link>
                    ))}
                    {extraComponent}
                    {actionButton && (
                      <Link href={actionButton.href}>
                        <Button variant={"outline"}>
                          {actionButton.label}
                        </Button>
                      </Link>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>
      <div className="pb-12 lg:pb-0"></div>
    </>
  );
}
