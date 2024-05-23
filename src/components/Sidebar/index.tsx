"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Logo from "./logo.svg";

const LinksItems = [
  {
    name: "Homepage",
    to: "/",
    icon: (
      <svg
        width="21"
        height="22"
        viewBox="0 0 21 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.65722 19.7714V16.7047C7.6572 15.9246 8.29312 15.2908 9.08101 15.2856H11.9671C12.7587 15.2856 13.4005 15.9209 13.4005 16.7047V19.7809C13.4003 20.4432 13.9343 20.9845 14.603 21H16.5271C18.4451 21 20 19.4607 20 17.5618V8.83784C19.9898 8.09083 19.6355 7.38935 19.038 6.93303L12.4577 1.6853C11.3049 0.771566 9.6662 0.771566 8.51342 1.6853L1.96203 6.94256C1.36226 7.39702 1.00739 8.09967 1 8.84736V17.5618C1 19.4607 2.55488 21 4.47291 21H6.39696C7.08235 21 7.63797 20.4499 7.63797 19.7714"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  // {
  //   name: "About us",
  //   to: "/about-us",
  //   icon: (
  //     <svg
  //       width="21"
  //       height="21"
  //       viewBox="0 0 21 21"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         fill-rule="evenodd"
  //         clip-rule="evenodd"
  //         d="M1 10.25C1 3.313 3.313 1 10.25 1C17.187 1 19.5 3.313 19.5 10.25C19.5 17.187 17.187 19.5 10.25 19.5C3.313 19.5 1 17.187 1 10.25Z"
  //         stroke="currentColor"
  //         stroke-width="1.5"
  //         stroke-linecap="round"
  //         stroke-linejoin="round"
  //       />
  //       <path
  //         d="M10.25 6.35449V10.2495"
  //         stroke="currentColor"
  //         stroke-width="1.5"
  //         stroke-linecap="round"
  //         stroke-linejoin="round"
  //       />
  //       <path
  //         d="M10.2456 13.75H10.2546"
  //         stroke="currentColor"
  //         stroke-width="1.5"
  //         stroke-linecap="round"
  //         stroke-linejoin="round"
  //       />
  //     </svg>
  //   ),
  // },
  // {
  //   name: "Players",
  //   to: "/players",
  //   icon: (
  //     <svg
  //       width="19"
  //       height="19"
  //       viewBox="0 0 19 19"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g clip-path="url(#clip0_0_2619)">
  //         <path
  //           d="M13.4582 16.625V15.0417C13.4582 14.2018 13.1245 13.3964 12.5307 12.8025C11.9368 12.2086 11.1314 11.875 10.2915 11.875H3.95817C3.11832 11.875 2.31286 12.2086 1.719 12.8025C1.12513 13.3964 0.791504 14.2018 0.791504 15.0417V16.625"
  //           stroke="currentColor"
  //           stroke-width="2"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //         />
  //         <path
  //           d="M7.12516 8.70833C8.87406 8.70833 10.2918 7.29057 10.2918 5.54167C10.2918 3.79276 8.87406 2.375 7.12516 2.375C5.37626 2.375 3.9585 3.79276 3.9585 5.54167C3.9585 7.29057 5.37626 8.70833 7.12516 8.70833Z"
  //           stroke="currentColor"
  //           stroke-width="2"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //         />
  //         <path
  //           d="M18.2085 16.6246V15.0413C18.208 14.3397 17.9744 13.6581 17.5446 13.1035C17.1147 12.549 16.5128 12.1529 15.8335 11.9775"
  //           stroke="currentColor"
  //           stroke-width="2"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //         />
  //         <path
  //           d="M12.6665 2.47754C13.3477 2.65194 13.9514 3.04809 14.3826 3.60353C14.8137 4.15898 15.0477 4.84211 15.0477 5.54525C15.0477 6.24838 14.8137 6.93152 14.3826 7.48696C13.9514 8.0424 13.3477 8.43855 12.6665 8.61296"
  //           stroke="currentColor"
  //           stroke-width="2"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //         />
  //       </g>
  //       <defs>
  //         <clipPath id="clip0_0_2619">
  //           <rect width="19" height="19" fill="currentColor" />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  // },
  // {
  //   name: "News",
  //   to: "/news",
  //   icon: (
  //     <svg
  //       width="18"
  //       height="18"
  //       viewBox="0 0 18 18"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g clip-path="url(#clip0_0_7326)">
  //         <path
  //           d="M9 14.25L14.25 9L16.5 11.25L11.25 16.5L9 14.25Z"
  //           stroke="currentColor"
  //           stroke-width="2"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //         />
  //         <path
  //           d="M13.5 9.75L12.375 4.125L1.5 1.5L4.125 12.375L9.75 13.5L13.5 9.75Z"
  //           stroke="currentColor"
  //           stroke-width="2"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //         />
  //         <path
  //           d="M1.5 1.5L7.1895 7.1895"
  //           stroke="currentColor"
  //           stroke-width="2"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //         />
  //         <path
  //           d="M8.25 9.75C9.07843 9.75 9.75 9.07843 9.75 8.25C9.75 7.42157 9.07843 6.75 8.25 6.75C7.42157 6.75 6.75 7.42157 6.75 8.25C6.75 9.07843 7.42157 9.75 8.25 9.75Z"
  //           stroke="currentColor"
  //           stroke-width="2"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //         />
  //       </g>
  //       <defs>
  //         <clipPath id="clip0_0_7326">
  //           <rect width="18" height="18" fill="white" />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  // },
];

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <Image width={176} height={32} src={Logo} alt="Logo" priority />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
             Player dashboard
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {LinksItems?.map((linkItem, index) => (
                <li key={index}>
                  <Link
                    key={index}
                    href={linkItem?.to}
                    className={`relative flex items-center gap-2.5 rounded-[10px] px-4 py-2 font-medium duration-300 ease-in-out hover:bg-white hover:text-[#000000] dark:bg-meta-4 dark:hover:bg-meta-4 ${
                      pathname === linkItem?.to
                        ? "bg-white text-textBlack"
                        : " bg-black text-white"
                    }`}
                  >
                    <span className="h-[18.5px] w-[18.5px]">
                      {linkItem?.icon}
                    </span>
                    {linkItem?.name}
                  </Link>
                </li>
              ))}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`relative flex items-center gap-2.5 rounded-[10px] px-4 py-2 font-medium duration-300 ease-in-out hover:bg-white hover:text-[#000000] dark:bg-meta-4 dark:hover:bg-meta-4 ${
                          pathname.includes("service")
                            ? "bg-white text-textBlack"
                            : " bg-black text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.0835 8.33337C7.77385 8.33337 8.3335 7.77373 8.3335 7.08337C8.3335 6.39302 7.77385 5.83337 7.0835 5.83337C6.39314 5.83337 5.8335 6.39302 5.8335 7.08337C5.8335 7.77373 6.39314 8.33337 7.0835 8.33337Z"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.4998 12.5L13.3332 8.33337L4.1665 17.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        To-do
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/service-description"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/service-description" &&
                                "text-white"
                              }`}
                            >
                              Phase 1
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/service-information"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/service-information" &&
                                "text-white"
                              }`}
                            >
                              Phase 2
                            </Link>
                          </li>
                          {/* <li>
                            <Link
                              href="/service-phase3"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/service-phase3" &&
                                "text-white"
                              }`}
                            >
                              Phase 3
                            </Link>
                          </li> */}
                          <li>
                            <Link
                              href="/service-volun"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/service-volun" &&
                                "text-white"
                              }`}
                            >
                              Volunteer task
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              <li>
                <Link
                  href="/user-queries"
                  className={`relative mt-1.5 flex items-center gap-2.5 rounded-[10px] px-4 py-2 font-medium duration-300 ease-in-out hover:bg-white hover:text-[#000000] dark:bg-meta-4 dark:hover:bg-meta-4 ${
                    pathname === "/user-queries"
                      ? "bg-white text-textBlack"
                      : " bg-black text-white"
                  }`}
                >
                  <span className="h-[18.5px] w-[18.5px]">
                    <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1 10.25C1 3.313 3.313 1 10.25 1C17.187 1 19.5 3.313 19.5 10.25C19.5 17.187 17.187 19.5 10.25 19.5C3.313 19.5 1 17.187 1 10.25Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.25 6.35449V10.2495"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.2456 13.75H10.2546"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                  </span>
                  Information
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/contact-us"
                  className={`relative mt-1.5 flex items-center gap-2.5 rounded-[10px] px-4 py-2 font-medium duration-300 ease-in-out hover:bg-white hover:text-[#000000] dark:bg-meta-4 dark:hover:bg-meta-4 ${
                    pathname === "/contact-us"
                      ? "bg-white text-textBlack"
                      : " bg-black text-white"
                  }`}
                >
                  <span className="h-[18.5px] w-[18.5px]">
                    <svg
                      width="19"
                      height="17"
                      viewBox="0 0 19 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.42122 17C5.91016 17 6.27043 16.7744 6.8623 16.2829L9.80451 13.8498H14.9684C17.5503 13.8498 19 12.4479 19 10.055V3.79479C19 1.4019 17.5503 0 14.9684 0H4.0316C1.45824 0 0 1.4019 0 3.79479V10.055C0 12.4559 1.50113 13.8498 3.97156 13.8498H4.32325V15.8237C4.32325 16.5408 4.72641 17 5.42122 17ZM5.85011 15.1953V12.8991C5.85011 12.4237 5.62709 12.2384 5.14673 12.2384H4.09165C2.47901 12.2384 1.707 11.473 1.707 10.0066V3.84313C1.707 2.37678 2.47901 1.61137 4.09165 1.61137H14.9169C16.521 1.61137 17.293 2.37678 17.293 3.84313V10.0066C17.293 11.473 16.521 12.2384 14.9169 12.2384H9.71016C9.18691 12.2384 8.92957 12.319 8.5693 12.6735L5.85011 15.1953ZM7.4456 8.7981C9.44424 10.6754 11.9576 11.8597 13.4501 10.4578C13.5102 10.4014 13.553 10.345 13.6045 10.2886C13.9734 9.88578 14.0935 9.34597 13.5874 8.99147C13.1756 8.71754 12.7553 8.43554 12.0862 8.00047C11.5801 7.66209 11.2628 7.75071 10.8767 8.10521L10.5422 8.41943C10.4479 8.50806 10.2763 8.49194 10.1648 8.42749C9.86456 8.25829 9.36704 7.88768 8.89526 7.44455C8.43205 7.00142 8.01174 6.51801 7.84018 6.25213C7.78871 6.16351 7.74582 6.01848 7.85734 5.90569L8.19187 5.57536C8.5693 5.19668 8.65508 4.92275 8.29481 4.43934L7.25689 3.05355C6.90519 2.58626 6.38194 2.66682 5.80722 3.06967C5.75576 3.1019 5.73002 3.13412 5.69571 3.15829C4.19458 4.56825 5.46411 6.93697 7.4456 8.7981Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Contact us
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
