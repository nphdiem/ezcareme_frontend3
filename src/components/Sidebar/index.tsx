import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { ReactComponent as Logo } from "components/Logo/Logo.svg";
import { ReactComponent as SignOut } from "components/icons/SignOut.svg";
import { Menu } from "antd";
import Avatar from "components/Avatar";
const { SubMenu } = Menu;

const Container = styled.div`
  ${tw`flex-none bg-white py-5 pr-5 border-r border-gray-100 flex flex-col justify-between`}
  width: 250px;
`;

const StyledMenu = styled(Menu)`
  ${tw`py-10`}
  border: none !important;

  &.ant-menu {
    background: transparent;
  }
  .ant-menu-item,
  .ant-menu-submenu-title {
    width: 100%;
    color: #797979;
    border-radius: 0 10px 10px 0;
  }
  .ant-menu-submenu > .ant-menu {
    ${tw`text-white`}
    background-color: transparent;
  }
  .ant-menu-item-selected {
    color: var(--white);
    background-color: var(--bittersweet) !important;
    &:after {
      display: none;
    }
  }
  .ant-menu-submenu-title:hover,
  .ant-menu-item:hover {
    background-color: transparent;
    color: var(--black);
    &.ant-menu-item-selected {
      color: var(--white);
      background-color: var(--bittersweet);
    }
  }
  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow {
    &:before,
    &:after {
      background: #797979 !important;
    }
  }
  .ant-menu-submenu-selected {
    color: var(--white);
  }
`;

export interface MenuItemProps {
  key: string;
  icon?: React.ReactNode;
  name: string;
  submenu?: Omit<MenuItemProps, "submenu">[];
}

export interface SidebarProps {
  isOnMobile?: boolean;
  collapsed?: boolean;
  selectedItem?: string;
  defaultOpenItem?: string;
  onItemClick: (itemKey: string) => void;
  menu: MenuItemProps[];
}

const Sidebar = ({
  isOnMobile = false,
  collapsed = false,
  selectedItem,
  defaultOpenItem,
  onItemClick,
  menu,
}: SidebarProps) => {
  return (
    <Container>
      <div>
        <div className="flex items-center justify-center px-5 text-pink-100">
          <Logo width="45px" />
          <div className="text-3xl ml-2">ezcareme</div>
        </div>
        <div className="pt-10 flex justify-center">
          <Avatar width="175px" />
        </div>
        <StyledMenu
          defaultSelectedKeys={selectedItem ? [selectedItem] : []}
          defaultOpenKeys={defaultOpenItem ? [defaultOpenItem] : []}
          mode="inline"
          inlineCollapsed={collapsed}
          onClick={({ item, key }) => onItemClick(key)}
        >
          {menu.map((item) => {
            if (item.submenu) {
              return (
                <SubMenu
                  key={item.key}
                  title={
                    <span>
                      <span>{item.name}</span>
                    </span>
                  }
                >
                  {item.submenu.map((sItem) => (
                    <Menu.Item key={sItem.key}>{sItem.name}</Menu.Item>
                  ))}
                </SubMenu>
              );
            }
            return (
              <Menu.Item key={item.key}>
                <span>{item.name}</span>
              </Menu.Item>
            );
          })}
        </StyledMenu>
      </div>
      <div className="px-6">
        <button className="focus:outline-none inline-flex items-center hover:text-black">
          <SignOut width="20px" />
          <span className="ml-4">Đăng xuất</span>
        </button>
      </div>
    </Container>
  );
};

export default Sidebar;
