import React, { useState } from "react";
import Sidebar, { MenuItemProps } from "components/Sidebar";
import ROUTES from "constants/routes";
import { navigate } from "@reach/router";

export interface UserSidebarProps {
  selectedKey?: string;
  defaultOpenKey?: string;
}

const userSidebarMenu: MenuItemProps[] = [
  {
    key: ROUTES.USER_ACCOUNT,
    name: "Thông tin tài khoản",
  },
  {
    key: ROUTES.USER_PROFILE,
    name: "Thông tin cá nhân",
  },
  {
    key: "qa",
    name: "Thông tin Hỏi - Đáp EZ",
    submenu: [
      {
        key: ROUTES.USER_QA_PENDING,
        name: "Câu hỏi đang chờ",
      },
      {
        key: ROUTES.USER_QA_ANSWERED,
        name: "Câu hỏi đã giải đáp",
      },
    ],
  },
  {
    key: "session",
    name: "Thông tin cuộc hẹn",
    submenu: [
      {
        key: ROUTES.USER_SESSION_PENDING,
        name: "Cuộc hẹn đang chờ",
      },
      {
        key: ROUTES.USER_SESSION_HISTORY,
        name: "Lịch sử cuộc hẹn",
      },
      {
        key: ROUTES.USER_SESSION_CANCELLED,
        name: "Cuộc hẹn đã huỷ",
      },
    ],
  },
  {
    key: ROUTES.USER_FAVOURITE_EXPERTS,
    name: "Chuyên gia yêu thích",
  },
];

const UserSidebar = ({ selectedKey, defaultOpenKey }: UserSidebarProps) => {
  const [isOnMobile] = useState(false);
  const [collapsed] = useState(false);
  const [selectedItem] = useState(selectedKey);
  const [defaultOpenItem] = useState(defaultOpenKey);
  const [menu] = useState<MenuItemProps[]>(userSidebarMenu);

  return (
    <Sidebar
      isOnMobile={isOnMobile}
      collapsed={collapsed}
      selectedItem={selectedItem}
      defaultOpenItem={defaultOpenItem}
      onItemClick={(key) => navigate(key)}
      menu={menu}
    />
  );
};

export default UserSidebar;
