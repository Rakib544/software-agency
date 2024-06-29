"use client";

import { Button } from "@/components/ui/button";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "framer-motion";
import { FigmaIcon, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useId, useRef, useState } from "react";
import Footer from "./footer";

function XIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  );
}

function NavigationRow({ children }: { children: any }) {
  return (
    <div className="even:mt-px sm:bg-[#131419]">
      <div className="container grid grid-cols-1 sm:grid-cols-2">
        {children}
      </div>
    </div>
  );
}

function NavigationItem({ href, children }: { href: string; children?: any }) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-[#131419] px-6 py-4 md:py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-[#131419] opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  );
}

function Navigation() {
  return (
    <nav className="mt-px font-display text-xl md:text-4xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/work">Our Work</NavigationItem>
        <NavigationItem href="/about">About Us</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/process">Our Process</NavigationItem>
        <NavigationItem href="/blog">Blog</NavigationItem>
      </NavigationRow>
    </nav>
  );
}

function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
}: {
  panelId: string;
  invert?: boolean;
  icon: any;
  expanded: any;
  onToggle: () => void;
  toggleRef: any;
}) {
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Home" className="flex items-center h-6">
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
        <div className="flex items-center gap-x-8">
          <Button>Contact us</Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded.toString()}
            aria-controls={panelId}
            className="group -m-2.5 rounded-full p-2.5 transition hover:bg-white/10"
            aria-label="Toggle navigation"
          >
            <Icon className="h-6 w-6 fill-white group-hover:fill-neutral-200" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function RootLayoutInner({
  children,
}: {
  children?: React.ReactNode | React.ReactNode[];
}) {
  let panelId = useId();
  let [expanded, setExpanded] = useState(false);
  let openRef = useRef();
  let closeRef = useRef();
  let shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function onClick(event: any) {
      if (event.target.closest("a")?.href === window.location.href) {
        setExpanded(false);
      }
    }

    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);
  return (
    <MotionConfig
      transition={
        shouldReduceMotion ? { duration: 0 } : { type: "spring", bounce: 0 }
      }
    >
      <AnimatePresence initial={false}>
        <header>
          <div
            className="absolute left-0 right-0 top-0 z-40 pt-14"
            aria-hidden={expanded ? "true" : undefined}
            inert={expanded ? true : undefined}
          >
            <Header
              panelId={panelId}
              icon={MenuIcon}
              toggleRef={openRef}
              expanded={expanded}
              onToggle={() => {
                setExpanded((expanded) => !expanded);
                // window.setTimeout(() =>
                //   // closeRef.current?.focus({ preventScroll: true })
                // );
              }}
            />
          </div>

          <motion.div
            layout
            id={panelId}
            animate={{ height: expanded ? "auto" : "0rem" }}
            className="relative z-50 overflow-hidden bg-[#131419]"
            aria-hidden={expanded ? undefined : "true"}
            inert={expanded ? undefined : false}
          >
            <motion.div layout transition={{ duration: 2 }}>
              <div className="bg-[#131419] pb-16 pt-14">
                <Header
                  invert
                  panelId={panelId}
                  icon={XIcon}
                  toggleRef={closeRef}
                  expanded={expanded}
                  onToggle={() => {
                    setExpanded((expanded) => !expanded);
                    // window.setTimeout(() =>
                    // openRef.current?.focus({ preventScroll: true })
                    // );
                  }}
                />
              </div>
              <Navigation />
              <div className="relative bg-[#131419] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[#131419]">
                <div className="container">
                  <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                    <div className="sm:border-l sm:border-transparent sm:pl-16">
                      <h2 className="font-display text-base font-semibold text-white mb-6">
                        Follow us
                      </h2>
                      <ul className="flex gap-x-8 mx-auto md:mx-0 order-2 md:order-1">
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
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </header>

        <motion.div
          layout
          // style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="relative flex flex-auto overflow-hidden pt-14"
        >
          <motion.div
            layout
            className="relative isolate flex w-full flex-col pt-9"
          >
            <main className="w-full flex-auto">{children}</main>
            <Footer />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}
