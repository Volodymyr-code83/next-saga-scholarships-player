"use client";
import { useState } from "react";
import Image from "next/image";
import { AboutPageDataType } from "@/types";
import ImageEditModal from "../../components/about/ImageEditModal";
import TextEditModal from "../../components/about/TextEditModal";

const dummyData = {
  imageUrl:
    "https://images.unsplash.com/photo-1714837291207-4985c06c9a60?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  text: `Saga Scholarships is led by an experienced team who have all been through this process and graduated as student-athletes. 
  Since being founded in 2020, we have helped many students navigate through the process of becoming student-athletes by 
  sharing our expertise.`,
};

const AboutUs = () => {
  const [pageData, setPageData] = useState<AboutPageDataType>(dummyData);
  const [isOpenedEditImageModal, setIsOpenedEditImageModal] = useState(false);
  const [isOpenedEditTextModal, setIsOpenedEditTextModal] = useState(false);

  const handleEditImage = () => {
    setIsOpenedEditImageModal(true);
  };

  const handleEditText = () => {
    setIsOpenedEditTextModal(true);
  };

  const handleClose = () => {
    setIsOpenedEditImageModal(false);
    setIsOpenedEditTextModal(false);
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
    <div className="flex w-full flex-col items-start justify-start gap-15">
      <div className="relative flex w-full flex-col items-start justify-start gap-[30px]">
        <div className="relative flex  h-full max-h-[516px] min-h-[516px] w-full max-w-[1510px] items-center justify-center rounded-[10px] bg-white">
          {pageData?.imageUrl && (
            <Image
              src={pageData?.imageUrl}
              width={1510}
              height={516}
              alt=""
              className="h-auto max-h-[516px]  w-full max-w-[1510px] rounded-[10px] bg-cover bg-center "
            />
          )}
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
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-[30px]">
        <div className="ju  flex w-full items-start rounded-[10px] bg-white p-10 text-2xl text-textBlack">
          {pageData?.text}
        </div>
        <div className="mt-7 flex w-full items-center justify-end gap-5">
          <button
            className=" rounded bg-blue px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blue"
            type="button"
            onClick={() => handleEditText()}
          >
            Edit
          </button>
          <button
            className=" rounded bg-red px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-red"
            type="button"
            onClick={() =>
              setPageData({
                ...pageData,
                text: "",
              })
            }
          >
            Delete
          </button>
        </div>
      </div>
      {isOpenedEditImageModal && (
        <ImageEditModal
          isOpen={isOpenedEditImageModal}
          onClose={handleClose}
          imageUrl={pageData?.imageUrl}
          onSubmit={handleSubmitImage}
        />
      )}
      {isOpenedEditTextModal && (
        <TextEditModal
          isOpen={isOpenedEditTextModal}
          onClose={handleClose}
          text={pageData?.text}
          onSubmit={handleSubmitText}
        />
      )}
    </div>
  );
};

export default AboutUs;
