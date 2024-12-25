import React from 'react'
import { BsDatabase } from "react-icons/bs";

function Repo({repo}) {
  return (
    <div className="repo-container w-full border-b-[1px] border-[#D5D7DA] fotn-inter">
        <div className="sub-repo-container flex flex-col py-[24px] px-[16px] gap-y-[12px] hover:bg-[#F5F5F5] cursor-pointer">
            <div className='flex gap-x-[8px] items-center'>
                <div><p className='text-[20px] font-medium'>{repo.name}</p></div>
                <div className='flex justify-center w-[59px] h-[24px] rounded-full border-[1px] border-[#B2DDFF] bg-[#EFF8FF]'><p className='   text-[#175CD3] text-[14px]'>{repo.type}</p></div>
            </div>
            <div className='flex gap-x-[40px] text-[#181D27] max-sm:gap-x-[24px] text-[14px] max-ssm:text-[13px] text-nowrap'>
                <div className='flex items-center justify-center gap-x-[8px]'><span>{repo.technology}</span><span className='h-[8px] w-[8px] bg-[#1570EF] rounded-full'></span></div>
                <div className='flex items-center gap-x-[8px]'><span><BsDatabase /></span><span>{repo.size}</span></div>
                <div><p>{repo.time}</p></div>
            </div>
        </div>
    </div>
  )
}

export default Repo