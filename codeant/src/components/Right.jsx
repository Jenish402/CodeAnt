import React, { useEffect, useState } from "react";
import { LuRefreshCw } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Repo from "./Repo";
import ReposetoryData from "./ReposetoryData.js";

function Right() {
  const [searchData, setSearchData] = useState("");
  const [Reposetories, setReposetories] = useState([]);
  const [filteredRepo, setfilteredRepo] = useState([]);

  useEffect(() => {
    const data = ReposetoryData();
    setReposetories(data);
    setfilteredRepo(data);
  }, []);

  // Updated search functionality to work on every keystroke
  useEffect(() => {
    const filterRepo = Reposetories.filter((repo) =>
      repo.name.toLowerCase().includes(searchData.toLowerCase())
    );
    setfilteredRepo(filterRepo);
  }, [searchData, Reposetories]); // Dependencies added to re-run when search input or repositories change

  const handleSearchChange = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <>
      <div className="right-container flex w-full h-screen p-[24px] bg-[#FAFAFA] max-sm:p-0 font-inter">
        <div className="sub-right-container flex flex-col w-full border border-[#E9EAEB] rounded-[12px] shadow-custom bg-white max-sm:rounded-none">
          <div className="flex flex-col gap-y-[20px] mx-[24px] mt-[15px] h-[156px]">
            <div className="flex justify-between items-center max-bs:flex-row max-bs:items-center max-sm:gap-y-[12px] max-sbs:flex-col max-sbs:items-start ">
              <div className="flex flex-col gap-y-[4px]">
                <p className="text-[30px] font-semibold">Repositories</p>
                <p className="text-[#414651]">33 total repositories</p>
              </div>
              <div className="flex gap-[12px]">
                <button className="flex gap-x-[12px] items-center border border-black/50 rounded-[6px] px-[10px] py-[14px] h-[40px] w-[139]">
                  <span>
                    <LuRefreshCw />
                  </span>
                  <span className="text-nowrap max-sbs:text-[14px]">Refresh All</span>
                </button>
                <button className="flex gap-x-[12px] items-center bg-[#1570EF] px-[10px] py-[14px] rounded-[6px] text-white h-[40px] w-[158]">
                  <span>
                    <FaPlus />
                  </span>
                  <span className="text-nowrap max-sbs:text-[14px]">Add Repository</span>
                </button>
              </div>
            </div>
            <div className="relative mb-[20px]">
              <input
                value={searchData}
                onChange={handleSearchChange}
                type="text"
                placeholder="Search Repositories"
                className="w-[336px] border outline-none h-[44px] pl-[50px] py-[14px] rounded-[12px] shadow-custom max-sm:w-[100%]"
              />
              <IoIosSearch className="absolute top-1/4 text-[24px] left-[10px]" />
            </div>
          </div>
          <hr className="max-sm:mt-[50px]" />
          <div className="flex flex-col overflow-y-scroll">
            {filteredRepo.map((repo, index) => (
              <Repo key={index} repo={repo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Right;