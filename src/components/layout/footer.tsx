import { FigmaIcon, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container py-16">
      <hr className="md:hidden pt-16" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16">
        <ul className="flex gap-x-8 mx-auto md:mx-0 order-2 md:order-1">
          <li>
            <Link href="/" className="flex items-center h-5">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="pointer-events-none"
              >
                <title>Narative</title>
                <path
                  d="M17.594 20.2864H0V23H17.594V20.2864Z"
                  fill="#fff"
                ></path>
                <path
                  d="M0.00390625 7.95557V18.9508L5.39074 15.1721V11.7278L0.00390625 7.95557Z"
                  fill="#fff"
                ></path>
                <path
                  d="M17.5841 10.9314L17.582 0.00219727L12.1738 3.73826V7.12713L17.5841 10.9314Z"
                  fill="#fff"
                ></path>
                <path
                  d="M17.583 18.9615V12.2924L0.00390625 0.00219727V6.61379L17.583 18.9615Z"
                  fill="#fff"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Twitter className="h-5 text-muted-foreground hover:text-white transition duration-200" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FigmaIcon className="h-5 text-muted-foreground hover:text-white transition duration-200" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Instagram className="h-5 text-muted-foreground hover:text-white transition duration-200" />
            </Link>
          </li>
        </ul>
        <ul className="flex gap-x-8 md:ml-auto order-1 md:order-2 flex-col md:flex-row text-center md:text-left gap-y-6">
          <li>
            <Link
              href=""
              className="font-medium text-muted-foreground hover:text-white transition duration-200 "
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="font-medium text-muted-foreground hover:text-white transition duration-200"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="font-medium text-muted-foreground hover:text-white transition duration-200"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="font-medium text-muted-foreground hover:text-white transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <p className="col-span-12 md:hidden text-center text-muted-foreground text-sm mt-8">
        &copy;{new Date().getFullYear()} Narative Studio Co.
      </p>
    </footer>
  );
}
