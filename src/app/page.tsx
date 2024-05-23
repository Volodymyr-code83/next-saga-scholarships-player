"use client";
// import { useRouter } from "next/navigation"; // Import useRouter from Next.js
// import useAuth from "../hooks/useAuth"; // Import useAuth directly
import { useEffect } from "react";

import PageHeader from "@/components/PageHeader";
import TeamSection from "@/components/TeamSection";
import StoriesSection from "@/components/StoriesSection";
import { setCookie, parseCookies } from "nookies"; 

const DashBoard = () => {
  // const router = useRouter(); // Initialize useRouter
  const cookies = parseCookies(); // Read cookies using nookies
  const token = cookies.token;
  // const isAuthenticated = useAuth();
  
  
    // Check authentication status and handle redirection
    useEffect(() => {
      if (!token) {
          // router.push("/signin"); // Redirect to the sign-in page using Next.js's router
          window.location.href = "/signin";
        }
    }, [token]);

  return (
    <div className="flex w-full flex-col items-center justify-start gap-[50px] bg-bgGrey ">
      <PageHeader />
      {/* <TeamSection />
      <StoriesSection /> */}
    </div>
  );
};

export default DashBoard;
