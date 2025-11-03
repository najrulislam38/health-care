"use client";

import { Stethoscope } from "lucide-react";
import Container from "./Container";
import Link from "next/link";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import LogoutButton from "./LogoutButton";
import { UseUser } from "@/providers/UserProvider";

export default function PublicNavbar() {
  const { user } = UseUser();
  const role = user?.role || "GUEST";

  const navLinks = [
    { label: "Home", href: "/" },
    // { label: "Features", href: "/features" },
    { label: "Consultation", href: "/consultation" },
    { label: "Doctors", href: "/doctors" },
    { label: "Health Plans", href: "/health-plans" },
    { label: "Diagnostics", href: "/diagnostics" },
    { label: "NGOs", href: "/ngos" },
    { label: "Contact", href: "/contact" },
  ];

  if (role === "ADMIN") {
    navLinks.push({ href: "/admin/dashboard", label: "Admin Dashboard" });
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-4">
      <Container>
        <div className="flex items-center justify-between gap-4">
          {/*  */}
          <div className="w-full flex justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-bold text-normal md:text-xl">
              <Stethoscope size={32} className="text-primary" />
              <span>JS Health Care</span>
            </div>
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6 font-medium ">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              {role !== "GUEST" ? (
                <LogoutButton />
              ) : (
                <Link href="/login">
                  <Button>Login</Button>
                </Link>
              )}
            </div>
          </div>
          {/* mobile sidebar */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <div className="max-w-none *:w-full">
                <ul className="flex-col items-start gap-0 md:gap-2">
                  {navLinks.map((link, index) => (
                    <li key={index} className="w-full">
                      <Link
                        href={link.href}
                        className="py-1.5"
                        // active={link.active}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </Container>
    </header>
  );
}
