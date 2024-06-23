"use client";

import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <nav className="flex h-full items-center justify-between">
      <Link href="/" className="flex items-center text-2xl font-bold">
        Next
      </Link>
      <div className="hidden items-center gap-12 lg:flex 2xl:gap-16">
        <ul className="flex space-x-12 text-center font-medium text-sm leading-loose text-muted-foreground md:text-left">
          <li>
            <Link
              href="/about"
              className="transition-all duration-200 hover:text-white "
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="transition-all duration-200 hover:text-white "
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="transition-all duration-200 hover:text-white "
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="transition-all duration-200 hover:text-white "
            >
              Blogs
            </Link>
          </li>
        </ul>
      </div>

      <Sheet open={isModalOpen} onOpenChange={setIsModalOpen}>
        <SheetTrigger className="lg:hidden">
          <span className="sr-only">Open Menu</span>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col items-center space-y-10 py-10">
            <div className="space-y-4 text-center text-sm leading-loose text-muted-foreground">
              <Link
                href="/about"
                className="block font-semibold hover:underline hover:underline-offset-4"
                onClick={() => setIsModalOpen(false)}
              >
                About
              </Link>
              <Link
                href="/features"
                className="block font-semibold hover:underline hover:underline-offset-4"
                onClick={() => setIsModalOpen(false)}
              >
                Features
              </Link>

              <Link
                href="/pricing"
                className={buttonVariants()}
                onClick={() => setIsModalOpen(false)}
              >
                Pricing
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
