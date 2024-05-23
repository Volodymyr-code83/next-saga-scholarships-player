"use client";
import { useState } from "react";
import { StoryDataType } from "@/types";
import StoryCard from "./StoryCard";
import StoryEditModal from "./StoryEditModal";

const storiesDummyData = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnR8ZW58MHx8MHx8fDA%3D",
    heading: "34K+",
    subHeading: "Success Stories",
    detailsLink: "",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0fGVufDB8fDB8fHww",
    heading: "34K+",
    subHeading: "Success Stories",
    detailsLink: "",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwb3J0fGVufDB8fDB8fHww",
    heading: "34K+",
    subHeading: "Success Stories",
    detailsLink: "",
  },
];

const StoriesSection = () => {
  const [isOpenedEditModal, setIsOpenedEditModal] = useState(false);
  const [stories, setStories] = useState<StoryDataType[]>(storiesDummyData);

  const [editStory, setEditStory] = useState<{
    imageUrl: string;
    index: number;
  } | null>(null);

  const handleEdit = (imageUrl: string, index: number) => {
    setEditStory({
      imageUrl,
      index,
    });
    setIsOpenedEditModal(true);
  };

  const handleClose = () => {
    setEditStory(null);
    setIsOpenedEditModal(false);
  };

  const handleSubmit = (image: string) => {
    const prevStoriesData = structuredClone(stories);
    const memberIndex = prevStoriesData?.findIndex(
      (_, i) => i === editStory?.index,
    );

    if (memberIndex !== -1) {
      prevStoriesData[memberIndex] = {
        ...prevStoriesData[memberIndex],
        imageUrl: image,
      };
    }
    setStories(prevStoriesData);
    setEditStory(null);
    setIsOpenedEditModal(false);
  };

  return (
    <div className="flex w-full flex-nowrap items-center justify-start gap-5">
      {stories?.map((story, index) => (
        <StoryCard
          key={index}
          index={index}
          story={story}
          onEdit={handleEdit}
        />
      ))}
      {isOpenedEditModal && (
        <StoryEditModal
          isOpen={isOpenedEditModal}
          imageUrl={editStory?.imageUrl || ""}
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default StoriesSection;
