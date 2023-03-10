import { SparklesIcon } from "@heroicons/react/24/outline"
import React from "react"
import AddFeed from "../AddFeed/AddFeed"

const Feed = () => {
  return (
    <div className="text-white flex-1 border-l border-r max-w-2xl  border-gray-700 sm:ml-[73px] xl:ml-[370px] ">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-20 bg-black border-b border-gray-700 ">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto ">
          <SparklesIcon className="h-5 text-white " />
        </div>
      </div>
      <AddFeed />
    </div>
  )
}

export default Feed
