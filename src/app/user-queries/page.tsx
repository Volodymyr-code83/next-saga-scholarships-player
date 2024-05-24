"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
// import { useRouter } from "next/navigation";

// import aa from "../assets/pdf/pdf1.pdf"
interface NotificationProps {
    message: string;
    progress: number;
    success: boolean;
  }

const Page = () => {
    // const router = useRouter();
    const [isSaving, setIsSaving] = useState(false);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("Saving data...");
    const [success, setSuccess] = useState(false);
    const cookies = parseCookies(); // Read cookies using nookies
    const token = cookies.token;
    // const isAuthenticated = useAuth();
     // Initialize useRouter
    
      // Check authentication status and handle redirection
      

  const handleDownloadPDF1 = () => {
    // Implement download logic for PDF 1
    // For example, you can use anchor tag to initiate download
    const anchor = document.createElement("a");
    anchor.href = "../assets/pdf/pdf1.pdf"; // Replace with actual PDF URL
    anchor.download = "pdf1.pdf";
    anchor.click();
  };

  const handleDownloadPDF2 = () => {
    // Implement download logic for PDF 2
    // For example, you can use anchor tag to initiate download
    const anchor = document.createElement("a");
    anchor.href = "../../assets/pdf/pdf2.pdf"; // Replace with actual PDF URL
    anchor.download = "pdf2.pdf";
    anchor.click();
  };

  const handleDownloadPDF3 = () => {
    // Implement download logic for PDF 2
    // For example, you can use anchor tag to initiate download
    const anchor = document.createElement("a");
    anchor.href = "../../assets/pdf/pdf3.pdf"; // Replace with actual PDF URL
    anchor.download = "pdf3.pdf";
    anchor.click();
  };

  const handleDownloadPDF4 = () => {
    // Implement download logic for PDF 2
    // For example, you can use anchor tag to initiate download
    const anchor = document.createElement("a");
    anchor.href = "../../assets/pdf/pdf4.pdf"; // Replace with actual PDF URL
    anchor.download = "pdf4.pdf";
    anchor.click();
  };

  const handleDownloadPDF5 = () => {
    // Implement download logic for PDF 2
    // For example, you can use anchor tag to initiate download
    const anchor = document.createElement("a");
    anchor.href = "../../assets/pdf/pdf5.pdf"; // Replace with actual PDF URL
    anchor.download = "pdf5.pdf";
    anchor.click();
  };

  const handleDownloadPDF6 = () => {
    // Implement download logic for PDF 2
    // For example, you can use anchor tag to initiate download
    const anchor = document.createElement("a");
    anchor.href = "../../assets/pdf/pdf6.pdf"; // Replace with actual PDF URL
    anchor.download = "pdf6.pdf";
    anchor.click();
  };

  useEffect(() => {
    if (!token) {
        // router.push("/signin"); // Redirect to the sign-in page using Next.js's router
        window.location.href = "/signin";
      }
  }, [token]);

  return (
    <>
  <div className="mx-auto w-full max-w-screen-xl mb-5">
    <h2 className="text-lg font-medium leading-6 pb-2.5">
      This page contains a PDF explaining how to fill in your forms. Giving you step-by-step process to every section.
    </h2>
    <p>Click here to download PDF files.</p>
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        <button
          className="relative flex w-full items-center justify-center rounded-2xl bg-white overflow-hidden"
          type="button"
          onClick={() => handleDownloadPDF1()}
        >
          <p className="absolute text-lg font-medium leading-6 pb-1.5">File 1</p>
          <div className="px-2.5 py-2.5 bg-blue-500 rounded-lg mt-20">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.0835 8.33337C7.77385 8.33337 8.3335 7.77373 8.3335 7.08337C8.3335 6.39302 7.77385 5.83337 7.0835 5.83337C6.39314 5.83337 5.8335 6.39302 5.8335 7.08337C5.8335 7.77373 6.39314 8.33337 7.0835 8.33337Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.4998 12.5L13.3332 8.33337L4.1665 17.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>

        <button
          className="relative flex w-full items-center justify-center rounded-2xl bg-white overflow-hidden"
          type="button"
          onClick={() => handleDownloadPDF2()}
        >
          <p className="absolute text-lg font-medium leading-6 pb-1.5">File 2</p>
          <div className="px-2.5 py-2.5 bg-blue-500 rounded-lg mt-20">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.0835 8.33337C7.77385 8.33337 8.3335 7.77373 8.3335 7.08337C8.3335 6.39302 7.77385 5.83337 7.0835 5.83337C6.39314 5.83337 5.8335 6.39302 5.8335 7.08337C5.8335 7.77373 6.39314 8.33337 7.0835 8.33337Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.4998 12.5L13.3332 8.33337L4.1665 17.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>

        <button
          className="relative flex w-full items-center justify-center rounded-2xl bg-white overflow-hidden"
          type="button"
          onClick={() => handleDownloadPDF3()}
        >
          <p className="absolute text-lg font-medium leading-6 pb-1.5">File 3</p>
          <div className="px-2.5 py-2.5 bg-blue-500 rounded-lg mt-20">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.0835 8.33337C7.77385 8.33337 8.3335 7.77373 8.3335 7.08337C8.3335 6.39302 7.77385 5.83337 7.0835 5.83337C6.39314 5.83337 5.8335 6.39302 5.8335 7.08337C5.8335 7.77373 6.39314 8.33337 7.0835 8.33337Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.4998 12.5L13.3332 8.33337L4.1665 17.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>

        <button
          className="relative flex w-full items-center justify-center rounded-2xl bg-white overflow-hidden"
          type="button"
          onClick={() => handleDownloadPDF4()}
        >
          <p className="absolute text-lg font-medium leading-6 pb-1.5">File 4</p>
          <div className="px-2.5 py-2.5 bg-blue-500 rounded-lg mt-20">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.0835 8.33337C7.77385 8.33337 8.3335 7.77373 8.3335 7.08337C8.3335 6.39302 7.77385 5.83337 7.0835 5.83337C6.39314 5.83337 5.8335 6.39302 5.8335 7.08337C5.8335 7.77373 6.39314 8.33337 7.0835 8.33337Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.4998 12.5L13.3332 8.33337L4.1665 17.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>

        <button
          className="relative flex w-full items-center justify-center rounded-2xl bg-white overflow-hidden"
          type="button"
          onClick={() => handleDownloadPDF5()}
        >
          <p className="absolute text-lg font-medium leading-6 pb-1.5">File 5</p>
          <div className="px-2.5 py-2.5 bg-blue-500 rounded-lg mt-20">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.0835 8.33337C7.77385 8.33337 8.3335 7.77373 8.3335 7.08337C8.3335 6.39302 7.77385 5.83337 7.0835 5.83337C6.39314 5.83337 5.8335 6.39302 5.8335 7.08337C5.8335 7.77373 6.39314 8.33337 7.0835 8.33337Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.4998 12.5L13.3332 8.33337L4.1665 17.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>

        <button
          className="relative flex w-full items-center justify-center rounded-2xl bg-white overflow-hidden"
          type="button"
          onClick={() => handleDownloadPDF6()}
        >
          <p className="absolute text-lg font-medium leading-6 pb-1.5">File 6</p>
          <div className="px-2.5 py-2.5 bg-blue-500 rounded-lg mt-20">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.0835 8.33337C7.77385 8.33337 8.3335 7.77373 8.3335 7.08337C8.3335 6.39302 7.77385 5.83337 7.0835 5.83337C6.39314 5.83337 5.8335 6.39302 5.8335 7.08337C5.8335 7.77373 6.39314 8.33337 7.0835 8.33337Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.4998 12.5L13.3332 8.33337L4.1665 17.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>

      </div>
    </div>
  </div>
</>

  );
};

export default Page;
