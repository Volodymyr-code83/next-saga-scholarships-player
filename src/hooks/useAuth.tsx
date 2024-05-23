// useAuth.tsx
"use client";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";


const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const  token  = localStorage.getItem("token");

    if (!token) {
      // Redirect to sign-in page if token is not available
      router.push("/signin")
    } else {
      // User is authenticated
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated;
};

export default useAuth;
