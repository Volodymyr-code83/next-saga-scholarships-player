"use client";

import { useState } from "react";
import Image from "next/image";
import ServiceDescImageModal from "@/components/services/ServiceDescImageModal";
import ServiceDescTextEditModal from "@/components/services/ServiceDescTextEditModal";
import SatisfactionRating from '../../components/Satisfaction/SatisfactionRating';

interface PageDataType {
  imageUrl: string;
  text: string;
}

const Page = () => {
    const [pageData, setPageData] = useState<PageDataType>({
        imageUrl: "",
        text: "",
      });
      const [isOpenedEditImageModal, setIsOpenedEditImageModal] = useState(false);
      const [isOpenedEditTextModal, setIsOpenedEditTextModal] = useState(false);
    
      const handleClose = () => {
        setIsOpenedEditImageModal(false);
        setIsOpenedEditTextModal(false);
      };
    
      const handleEditImage = () => {
        setIsOpenedEditImageModal(true);
      };
    
      const handleEditText = () => {
        setIsOpenedEditTextModal(true);
      };
    
      const handleSubmitImage = (image: string) => {
        setPageData({
          ...pageData,
          imageUrl: image,
        });
        setIsOpenedEditImageModal(false);
      };
    
      const handleSubmitText = (text: string) => {
        setPageData({
          ...pageData,
          text,
        });
        setIsOpenedEditTextModal(false);
      };

  return (
    <>
      <div>
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-start justify-start gap-[30px]">
            <p>Upload other picture or videos that can be used for promotional purposes</p>
            <div className="mx-auto flex w-full max-w-screen-xl items-start justify-center gap-[20px]">
                
                <button 
                className="relative mx-auto flex h-full max-h-[588px] min-h-[400px] w-full max-w-[892px] items-center justify-center  rounded-[20px] bg-white"
                type="button"
                onClick={() => handleEditImage()}
                >
                {pageData?.imageUrl && (
                    <Image
                    src={pageData?.imageUrl}
                    width={892}
                    height={588}
                    alt=""
                    className="h-full max-h-[588px] w-full max-w-[892px] rounded-[20px] bg-cover bg-center"
                    />
                )}
                <p className="absolute text-lg font-medium leading-6 pb-[5px]">Image 1</p>
                <div className="px-[10px] py-[10px] bg-blue rounded-[5px] mt-[80px]">
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
                </div>
                </button>
        
                <button 
                className="relative mx-auto flex h-full max-h-[588px] min-h-[400px] w-full max-w-[892px] items-center justify-center  rounded-[20px] bg-white"
                type="button"
                onClick={() => handleEditImage()}
                >
                {pageData?.imageUrl && (
                    <Image
                    src={pageData?.imageUrl}
                    width={892}
                    height={588}
                    alt=""
                    className="h-full max-h-[588px] w-full max-w-[892px] rounded-[20px] bg-cover bg-center"
                    />
                )}
                <p className="absolute text-lg font-medium leading-6 pb-[5px]">Image 2</p>
                <div className="px-[10px] py-[10px] bg-blue rounded-[5px] mt-[80px]">
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
                </div>  
                </button>

                <button 
                className="relative mx-auto flex h-full max-h-[588px] min-h-[400px] w-full max-w-[892px] items-center justify-center  rounded-[20px] bg-white"
                type="button"
                onClick={() => handleEditImage()}
                >
                {pageData?.imageUrl && (
                    <Image
                    src={pageData?.imageUrl}
                    width={892}
                    height={588}
                    alt=""
                    className="h-full max-h-[588px] w-full max-w-[892px] rounded-[20px] bg-cover bg-center"
                    />
                )}
                <p className="absolute text-lg font-medium leading-6 pb-[5px]">Image 3</p>
                <div className="px-[10px] py-[10px] bg-blue rounded-[5px] mt-[80px]">
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
                </div>  
                </button>
                
            </div>
            <div className="relative flex w-full items-center justify-end gap-5">
          <button
            className=" rounded bg-blue px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blue"
            type="button"
            onClick={() => handleEditImage()}
          >
            Edit
          </button>
          <button
            className=" rounded bg-red px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-red"
            type="button"
            onClick={() =>
              setPageData({
                ...pageData,
                imageUrl: "",
              })
            }
          >
            Delete
          </button>
        </div>
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">How satisfied are you with our services?</h1>
            <div className="px-[20px] bg-white rounded-[10px]">
                {/* <SatisfactionRating rating={process} /> */}
            </div>
        </div>

        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Would you recommend our services to others?. Why or not?</h1>
            <div className="w-full">
                <textarea
                    className="block w-full h-48 px-4 py-3 rounded-lg shadow-sm bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
                    placeholder="Let's hear what you have to say..."
                    rows={6}
                />
          </div>
        </div>

        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Would you recommend our services to others?. Why or not?</h1>
            <div className="w-full">
                <textarea
                    className="block w-full h-48 px-4 py-3 rounded-lg shadow-sm bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
                    placeholder="Let's hear what you have to say..."
                    rows={6}
                />
          </div>
        </div>

        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">What do you like the most about our services?</h1>
            <textarea
                    className="block w-full h-48 px-4 py-3 rounded-lg shadow-sm bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
                    placeholder="Let's hear what you have to say..."
                    rows={6}
                />
        </div>

        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">What do you like the most about our services?</h1>
            <textarea
                    className="block w-full h-48 px-4 py-3 rounded-lg shadow-sm bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
                    placeholder="Let's hear what you have to say..."
                    rows={6}
                />
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Page;
