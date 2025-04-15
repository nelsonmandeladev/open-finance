declare interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconType;
  size?: number;
}

declare type SidebarItemType = {
  icon: IconType;
  label: string;
  isActive?: boolean;
  link: string;
};
