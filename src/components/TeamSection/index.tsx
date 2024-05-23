"use client";
import { useState } from "react";
import { TeamMemberDataType } from "@/types";
import MemberCard from "./MemberCard";
import MemberEditModal from "./MemberEditModal";

const dummyTeamData = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const TeamSection = () => {
  const [teamData, setTeamData] = useState<TeamMemberDataType[]>(dummyTeamData);
  const [isOpenedEditModal, setIsOpenedEditModal] = useState(false);
  const [editMember, setEditMember] = useState<{
    imageUrl: string;
    index: number;
  } | null>(null);

  const handleEdit = (imageUrl: string, index: number) => {
    setEditMember({
      imageUrl,
      index,
    });
    setIsOpenedEditModal(true);
  };

  const handleClose = () => {
    setEditMember(null);
    setIsOpenedEditModal(false);
  };

  const handleSubmit = (image: string) => {
    const prevTeamData = structuredClone(teamData);
    const memberIndex = prevTeamData?.findIndex(
      (_, i) => i === editMember?.index,
    );

    if (memberIndex !== -1) {
      prevTeamData[memberIndex] = {
        ...prevTeamData[memberIndex],
        imageUrl: image,
      };
    }
    setTeamData(prevTeamData);
    setEditMember(null);
    setIsOpenedEditModal(false);
  };

  return (
    <div className="m-w-[1412px] flex w-full flex-wrap items-start justify-between gap-10 rounded-[10px] bg-white px-[138px] py-[50px] ">
      {teamData?.map((member, index) => (
        <MemberCard
          key={index}
          index={index}
          member={member}
          onEdit={handleEdit}
        />
      ))}

      {isOpenedEditModal && (
        <MemberEditModal
          isOpen={isOpenedEditModal}
          imageUrl={editMember?.imageUrl || ""}
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default TeamSection;
