"use client";
import { useState } from "react";
import Image from "next/image";
import ContactUpEditModal from "@/components/contactUs/ContactUpEditModal";

const Page = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isOpenedEditModal, setIsOpenedEditModal] = useState(false);

  const handleClose = () => {
    setIsOpenedEditModal(false);
  };

  const handleSubmit = (image: string) => {
    setImageUrl(image);
    setIsOpenedEditModal(false);
  };

  return (
    <div className="flex w-full items-start justify-center p-10">
      <div className="flex h-auto w-full max-w-[1085px] flex-col items-center justify-center  gap-11">
        <div className="flex max-h-[904px] min-h-[904px] w-full max-w-[1085px] items-center justify-center overflow-hidden rounded-[20px] bg-white">
          {imageUrl && (
            <Image
              src={imageUrl}
              width={1085}
              height={904}
              alt="User"
              className="mx-h-[904px] h-full  min-h-[904px] w-full max-w-[1085px] rounded-[20px] bg-cover bg-center"
            />
          )}
        </div>
        <div className="flex w-full items-center justify-end gap-5">
          <button
            className=" rounded bg-blue px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blue"
            type="button"
            onClick={() => setIsOpenedEditModal(true)}
          >
            Edit
          </button>
          <button
            className=" rounded bg-red px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-red"
            type="button"
            onClick={() => setImageUrl("")}
          >
            Delete
          </button>
        </div>
      </div>
      {isOpenedEditModal && (
        <ContactUpEditModal
          isOpen={isOpenedEditModal}
          onClose={handleClose}
          imageUrl={imageUrl}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Page;
