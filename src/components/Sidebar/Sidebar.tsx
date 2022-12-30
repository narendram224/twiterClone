import Image from "next/image"
import SidebarLink from "../SidebarLink/SidebarLink"
import { HomeIcon } from "@heroicons/react/24/solid"
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline"
// import {
//   ClipboardListIcon,
//   DotsHorizontalIcon,
//   DotsCircleHorizontalIcon,
// } from "@heroicons/react/24/outline"

const Sidebar = () => {
  return (
    <aside className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full ">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24 ">
        <Image
          src="https://rb.gy/ogau5a"
          className=""
          width={30}
          height={30}
          alt="profile"
        />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml:24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardDocumentIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={EllipsisHorizontalCircleIcon} />
      </div>
    </aside>
  )
}

export default Sidebar
