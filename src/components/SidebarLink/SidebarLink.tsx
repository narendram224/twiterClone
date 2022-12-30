import { FC, ReactNode, SVGProps } from "react"

interface ISidebarLink {
  text: string
  Icon: any
  active?: boolean
}

const SidebarLink: FC<ISidebarLink> = ({ text, Icon, active }) => {
  return (
    <div
      className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation`}
    >
      <Icon className="h-7 text-white" />
      <span>{text}</span>
    </div>
  )
}
SidebarLink.defaultProps = {
  active: false,
}

export default SidebarLink
