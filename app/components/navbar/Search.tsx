'use client';

import { HiCloudArrowUp } from 'react-icons/hi2'


import { User } from "@/src/generated/client";




interface SearchProps {
  currentUser?: User | null
}

const Search: React.FC<SearchProps> = ({
  currentUser
}) => {




  return (
    <div

      className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
      "
    >
      <div
        className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
      >
        <div
          className="
            hidden 
            sm:block 
            text-sm 
            font-semibold 
            px-6
          "
        >

          {currentUser && <span>เลขประจำตัว&nbsp;{currentUser.student_id}</span>}
        </div>
        <div className=" 
            text-lg
            font-semibold 
            px-6 
            border-x-[1px] 
            flex-1 
            text-center
          ">
          {currentUser?.name ? currentUser.name : 'ชาวบ้าน'}
        </div>
        <div className="
            text-lg
            hidden 
            sm:block 
            font-semibold 
            pl-6 
            pr-2 
            flex-row 
            items-center 
            gap-3
          ">
          {currentUser && <span>ชั้น ม.&nbsp;{currentUser.class}</span>}


        </div>
        <div
          className="
              text-base
              hidden 
              sm:block 
              p-2 
              bg-rose-500 
              rounded-full 
              text-white
              mx-2
            "
        >
          <HiCloudArrowUp size={18} />

        </div>


      </div>

    </div>
  );
}

export default Search;