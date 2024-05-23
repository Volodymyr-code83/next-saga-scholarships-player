"use client";
import PlayerCard from "@/components/players/PlayerCard";
import PlayerDeleteModal from "@/components/players/PlayerDeleteModal";
import PlayerEditModal from "@/components/players/PlayerEditModal";
import { PlayerDataType } from "@/types";
import { useState, ChangeEvent } from "react";

const Page = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [players, setPlayers] = useState<PlayerDataType[]>([]);
  const [editPlayerData, setEditPlayerData] = useState<{
    player: PlayerDataType;
    index: number;
  } | null>(null);
  const [isOpenedEditModal, setIsOpenedEditModal] = useState(false);
  const [isOpenedDeleteModal, setIsOpenedDeleteModal] = useState(false);

  const handleAdd = () => {
    setEditPlayerData(null);
    setIsOpenedEditModal(true);
  };

  const handleEdit = (playerData: PlayerDataType, index: number) => {
    setEditPlayerData({
      player: playerData,
      index,
    });
    setIsOpenedEditModal(true);
  };

  const handleDeleteOpen = (playerData: PlayerDataType, index: number) => {
    setEditPlayerData({
      player: playerData,
      index,
    });
    setIsOpenedDeleteModal(true);
  };

  const handleClose = () => {
    setEditPlayerData(null);
    setIsOpenedEditModal(false);
    setIsOpenedDeleteModal(false);
  };

  const handleSubmit = (playerData: PlayerDataType) => {
    const prevPlayersData = structuredClone(players);
    if (editPlayerData) {
      const memberIndex = prevPlayersData?.findIndex(
        (_, i) => i === editPlayerData?.index,
      );

      if (memberIndex !== -1) {
        prevPlayersData[memberIndex] = playerData;
      }
      setPlayers(prevPlayersData);
      setEditPlayerData(null);
      setIsOpenedEditModal(false);
    } else {
      setPlayers([...prevPlayersData, playerData]);
      setIsOpenedEditModal(false);
    }
  };

  const handleDelete = () => {
    const prevPlayersData = structuredClone(players);
    const filteredPlayersData = prevPlayersData?.filter(
      (_, i) => i !== editPlayerData?.index,
    );
    setPlayers(filteredPlayersData);
    setEditPlayerData(null);
    setIsOpenedDeleteModal(false);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-11 px-8">
      <div className="flex w-full flex-row items-center justify-between gap-10">
        <div className="relative w-full max-w-[600px]">
          <span className="absolute left-4.5 top-4">
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.18537 15.3707C12.1537 15.3707 15.3707 12.1537 15.3707 8.18537C15.3707 4.217 12.1537 1 8.18537 1C4.217 1 1 4.217 1 8.18537C1 12.1537 4.217 15.3707 8.18537 15.3707Z"
                stroke="#888888"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.1831 13.5562L16.0002 16.3659"
                stroke="#888888"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <input
            className="w-full rounded-[10px]  border border-[#C8B8B8] bg-white py-3 pl-11.5 pr-4.5 text-black focus:border-black focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-black "
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search by name"
          />
        </div>
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
          Add new player
        </button>
      </div>
      <div className="flex h-full w-full items-start justify-start gap-20">
        {players?.map((player, index) => (
          <PlayerCard
            key={`${player?.name}-${index}`}
            index={index}
            playerData={player}
            onDelete={handleDeleteOpen}
            onEdit={handleEdit}
          />
        ))}
      </div>

      {isOpenedEditModal && (
        <PlayerEditModal
          isOpen={isOpenedEditModal}
          player={editPlayerData ? editPlayerData?.player : null}
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      )}

      {isOpenedDeleteModal && (
        <PlayerDeleteModal
          isOpen={isOpenedDeleteModal}
          onClose={handleClose}
          onSubmit={handleDelete}
        />
      )}
    </div>
  );
};

export default Page;
