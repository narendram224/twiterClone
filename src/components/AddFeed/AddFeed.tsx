import { XMarkIcon } from "@heroicons/react/24/outline"
import React, { useRef, useState } from "react"

const AddFeed = () => {
  const inputRef = useRef<any>("")
  const [selectedImage, setSelectedImage] = useState<string | null>("")
  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-sroll`}
    >
      <img
        src="data:image/jpeg;base64,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"
        alt="profile"
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full devide-y devide-gray-700 ">
        <div>
          <textarea
            ref={inputRef}
            name="feed"
            placeholder="what's happpeding ?"
            rows={2}
            className="outline-none bg-transparent  text-[#d9d9d9] placeholder-gray-500 tracking-wide w-full min-h-[50px]  "
          />
        </div>
        {selectedImage ? (
          <div className="relative">
            <div
              className="absolute w-18 h-18 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <XMarkIcon className="text-white h-5" />
            </div>
            <img
              src={selectedImage}
              alt=" "
              className="rounded-2xl max-h-80 object-contain"
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default AddFeed
