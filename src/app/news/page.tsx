"use client";
import BlogCard from "@/components/news/BlogCard";
import BlogDeleteModal from "@/components/news/BlogDeleteModal";
import BlogEditModal from "@/components/news/BlogEditModal";
import { BlogDataType } from "@/types";
import { useState } from "react";

const Page = () => {
  const [blogsData, setBlogsData] = useState<BlogDataType[]>([]);
  const [isOpenedEditModal, setIsOpenedEditModal] = useState(false);
  const [isOpenedDeleteModal, setIsOpenedDeleteModal] = useState(false);
  const [editBlog, setEditBlog] = useState<{
    blog: BlogDataType;
    index: number;
  } | null>(null);

  const handleAdd = () => {
    setEditBlog(null);
    setIsOpenedEditModal(true);
  };

  const handleEdit = (blogData: BlogDataType, index: number) => {
    setEditBlog({
      blog: blogData,
      index,
    });
    setIsOpenedEditModal(true);
  };

  const handleDeleteOpen = (blogData: BlogDataType, index: number) => {
    setEditBlog({
      blog: blogData,
      index,
    });
    setIsOpenedDeleteModal(true);
  };

  const handleClose = () => {
    setEditBlog(null);
    setIsOpenedEditModal(false);
    setIsOpenedDeleteModal(false);
  };

  const handleSubmit = (BlogData: BlogDataType) => {
    const prevBlogsData = structuredClone(blogsData);
    if (editBlog) {
      const blogIndex = prevBlogsData?.findIndex(
        (_, i) => i === editBlog?.index,
      );

      if (blogIndex !== -1) {
        prevBlogsData[blogIndex] = BlogData;
      }
      setBlogsData(prevBlogsData);
      setEditBlog(null);
      setIsOpenedEditModal(false);
    } else {
      setBlogsData([...prevBlogsData, BlogData]);
      setIsOpenedEditModal(false);
    }
  };

  const handleDelete = () => {
    const prevBlogsData = structuredClone(blogsData);
    const filteredBlogsData = prevBlogsData?.filter(
      (_, i) => i !== editBlog?.index,
    );
    setBlogsData(filteredBlogsData);
    setEditBlog(null);
    setIsOpenedDeleteModal(false);
  };

  return (
    <div className="flex h-full w-full flex-col items-start justify-center gap-15">
      <div className="flex w-full flex-row items-center justify-end ">
        <button
          className=" flex items-center justify-center gap-4 rounded-[10px] bg-blue px-4 py-2 text-xs uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blue"
          type="button"
          onClick={handleAdd}
        >
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5641 7.69672C13.6113 7.69672 15.2694 5.94262 15.2694 3.79508C15.2694 1.68033 13.6113 0 11.5641 0C9.53384 0 7.85886 1.70492 7.85886 3.81148C7.86732 5.95082 9.51692 7.69672 11.5641 7.69672ZM11.5641 6.2623C10.3967 6.2623 9.40695 5.18852 9.40695 3.81148C9.40695 2.46721 10.3882 1.43443 11.5641 1.43443C12.7484 1.43443 13.7213 2.45082 13.7213 3.79508C13.7213 5.17213 12.74 6.2623 11.5641 6.2623ZM11.5641 8.64754C10.0837 8.64754 8.7894 8.96721 7.71505 9.4918C8.12956 9.80328 8.49332 10.1803 8.7894 10.6148C9.56768 10.2869 10.4982 10.082 11.5641 10.082C15.2863 10.082 17.3758 12.418 17.3758 13.6721C17.3758 13.8197 17.2996 13.8852 17.0966 13.8852H9.91451C9.90606 14.3934 9.83838 14.8361 9.67765 15.3197H16.8344C18.2979 15.3197 19 14.8689 19 13.9016C19 11.6475 16.0984 8.64754 11.5641 8.64754ZM4.35663 18C6.72529 18 8.72173 16.082 8.72173 13.7705C8.72173 11.459 6.75067 9.54918 4.35663 9.54918C1.97106 9.54918 0 11.459 0 13.7705C0 16.0902 1.97106 18 4.35663 18ZM1.59884 13.7705C1.59038 13.4344 1.82725 13.2131 2.17409 13.2131H3.78139V11.6639C3.78139 11.3279 4.0098 11.0984 4.35663 11.0984C4.71193 11.0984 4.94034 11.3279 4.94034 11.6639V13.2131H6.54764C6.88602 13.2131 7.12289 13.4344 7.12289 13.7705C7.12289 14.1148 6.88602 14.3361 6.54764 14.3361H4.94034V15.8934C4.94034 16.2295 4.71193 16.4508 4.35663 16.4508C4.0098 16.4508 3.78139 16.2295 3.78139 15.8934V14.3361H2.17409C1.83571 14.3361 1.59884 14.1148 1.59884 13.7705Z"
              fill="white"
            />
          </svg>
          Add new blog
        </button>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-10">
        {blogsData?.map((blogData, index) => (
          <BlogCard
            key={index}
            index={index}
            blogData={blogData}
            onEdit={handleEdit}
            onDelete={handleDeleteOpen}
          />
        ))}
      </div>
      {isOpenedEditModal && (
        <BlogEditModal
          isOpen={isOpenedEditModal}
          blog={editBlog ? editBlog?.blog : null}
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      )}

      {isOpenedDeleteModal && (
        <BlogDeleteModal
          isOpen={isOpenedDeleteModal}
          onClose={handleClose}
          onSubmit={handleDelete}
        />
      )}
    </div>
  );
};

export default Page;
