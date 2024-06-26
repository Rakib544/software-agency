"use client";

import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <nav className="flex h-16 items-center justify-between">
      <Link href="/" className="flex items-center h-6">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 114 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="pointer-events-none"
        >
          <title>Narative</title>
          <path
            d="M38.3144 9.97041C38.3144 8.64128 37.9459 8.14924 36.9618 8.14924C36.1247 8.14924 35.1151 8.61785 34.4058 9.18443V16.9612L35.8585 17.1592V18.6354H30.1074V17.1592L31.6091 16.9612V8.22805L30.1074 7.90855V6.1811H33.9415L34.2546 7.64443C35.3856 6.56024 36.6423 5.87012 38.144 5.87012C39.9886 5.87012 41.0962 6.90531 41.0962 9.06515V16.9612L42.5979 17.1592V18.6354H38.3144V9.97041Z"
            fill="#fff"
            className="hidden md:block"
          ></path>
          <path
            d="M62.4092 17.1592V18.6353H56.083V17.1592L57.574 16.9611V8.22797L56.083 7.90846V6.18101H59.8532L60.2472 8.14915C61.1099 6.82002 62.1642 5.9105 63.7192 5.9105C63.8861 5.90692 64.0524 5.9314 64.2112 5.98292L63.8363 8.92235C63.5322 8.79655 63.2044 8.7384 62.8757 8.75195C61.9562 8.72377 61.0628 9.05984 60.3899 9.68703V16.9291L62.4092 17.1592Z"
            fill="#fff"
            className="hidden md:block"
          ></path>
          <path
            d="M76.7297 6.18109H78.1078V3.05421L80.5552 2.51318V6.18109H82.9919V8.07042H80.5552V15.6576C80.5552 16.5671 80.9002 16.9867 81.6372 16.9867C82.0822 16.9804 82.5196 16.871 82.9152 16.6672L83.3583 18.3414C82.7683 18.6843 81.9056 18.9548 80.6766 18.9548C78.9726 18.9548 78.1057 18.1433 78.1057 16.0261V8.07042H76.7275L76.7297 6.18109Z"
            fill="#fff"
            className="hidden md:block"
          ></path>
          <path
            d="M90.4832 17.1486V18.6247H84.7002V17.1486L86.2019 16.9505V8.21739L84.7002 7.89788V6.17044H89.0071V16.9505L90.4832 17.1486ZM85.7077 1.74851C85.7077 1.28471 85.8919 0.839907 86.2199 0.511953C86.5479 0.183999 86.9926 -0.000244141 87.4564 -0.000244141C87.9202 -0.000244141 88.365 0.183999 88.693 0.511953C89.021 0.839907 89.2052 1.28471 89.2052 1.74851C89.2052 2.2123 89.021 2.6571 88.693 2.98506C88.365 3.31301 87.9202 3.49726 87.4564 3.49726C86.9926 3.49726 86.5479 3.31301 86.2199 2.98506C85.8919 2.6571 85.7077 2.2123 85.7077 1.74851V1.74851Z"
            fill="#fff"
            className="hidden md:block"
          ></path>
          <path
            d="M98.3362 7.87882V6.1748H103.063V7.89799L101.93 8.09396L98.3362 18.6354H95.6779L92.0845 8.07053L91.0195 7.89799V6.18119H96.2764V7.88521L95.0453 8.08331L96.7493 13.5958C97.0269 14.5402 97.2404 15.5024 97.3883 16.4756H97.4139C97.5695 15.4929 97.7872 14.5211 98.0656 13.566L99.6845 8.05136L98.3362 7.87882Z"
            fill="#fff"
            className="hidden md:block"
          ></path>
          <path
            d="M75.7094 17.1104C74.6018 17.1338 74.3803 16.9378 74.3803 15.9538V9.77456C74.3803 6.94375 73.0022 5.85957 70.3439 5.85957C68.6101 5.84819 66.9095 6.33543 65.4448 7.26326L66.2585 9.01201C67.3896 8.44542 68.4972 8.07692 69.7539 8.07692C71.23 8.07692 71.5751 8.8629 71.5751 10.2432V16.1007C71.3105 16.4001 70.9843 16.6387 70.6188 16.8001C70.2533 16.9615 69.8573 17.0419 69.4578 17.0358C68.3928 17.0358 67.8816 16.4948 67.8816 15.0165C67.8816 13.2997 68.6037 12.7992 70.4951 12.7566V11.2038C66.6355 11.2507 65.0508 12.4179 65.0508 15.1891C65.0508 17.8239 66.5035 18.955 68.6718 18.955C70.2225 18.955 71.0851 18.2904 71.7987 17.5534C72.0437 18.5609 72.8318 18.955 73.9159 18.955C74.599 18.9518 75.2723 18.7922 75.8841 18.4885L75.7094 17.1104Z"
            fill="#fff"
            className="hidden md:block"
          ></path>
          <path
            d="M54.4965 17.1104C53.3889 17.1338 53.1674 16.9378 53.1674 15.9538V9.77456C53.1674 6.94375 51.7893 5.85957 49.1204 5.85957C47.3865 5.84819 45.686 6.33543 44.2213 7.26326L45.035 9.01201C46.1767 8.44542 47.2864 8.07054 48.541 8.07054C50.0171 8.07054 50.3622 8.85651 50.3622 10.2368V16.1007C50.0976 16.4001 49.7714 16.6387 49.4059 16.8001C49.0405 16.9615 48.6444 17.0419 48.2449 17.0358C47.1799 17.0358 46.6708 16.4948 46.6708 15.0165C46.6708 13.2997 47.3929 12.7992 49.2822 12.7566V11.2038C45.4226 11.2507 43.8379 12.4179 43.8379 15.1891C43.8379 17.8239 45.2906 18.955 47.4589 18.955C49.0096 18.955 49.8723 18.2904 50.5858 17.5534C50.8308 18.5609 51.6189 18.955 52.7031 18.955C53.3861 18.9518 54.0594 18.7922 54.6712 18.4885L54.4965 17.1104Z"
            fill="#fff"
            className="hidden md:block"
          ></path>
          <path
            d="M107.673 13.0226H113.607V11.915C113.607 7.44198 111.884 5.85938 108.808 5.85938C105.632 5.85938 103.639 7.7551 103.639 12.3836C103.639 17.0697 105.534 18.9548 109.079 18.9548C110.974 18.9548 112.255 18.4627 113.484 17.4787L112.678 16.0026C111.694 16.6181 110.881 17.0101 109.483 17.0101C107.566 17.0101 106.812 16.158 106.642 13.9684C106.592 13.4488 106.57 12.9269 106.576 12.4049C106.576 11.996 106.576 11.619 106.604 11.3122V11.2995C106.751 8.46865 107.415 7.55913 108.793 7.55913C110.419 7.55913 110.787 8.54321 110.787 11.2995H107.673V13.0226Z"
            fill="#fff"
            className="hidden md:block"
          ></path>
          <path d="M17.594 20.2864H0V23H17.594V20.2864Z" fill="#fff"></path>
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
              href="/blogs"
              className="transition-all duration-200 hover:text-white "
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="transition-all duration-200 hover:text-white "
            >
              Contact
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
