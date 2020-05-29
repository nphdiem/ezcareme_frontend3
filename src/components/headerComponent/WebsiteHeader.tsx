import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Link, useLocation } from "@reach/router";
import ROUTES from "constants/routes";
import { ReactComponent as Logo } from "components/Logo/Logo.svg";
import classnames from "classnames";

const HamburgerBtn = styled.button`
  ${tw`px-3 py-2 border border-black rounded flex flex-col block lg:hidden`}
  > div {
    width: 20px;
    height: 2px;
    background-color: var(--black);

    &:nth-child(1),
    &:nth-child(2) {
      margin-bottom: 4px;
    }
  }
`;

const ELogo = styled(Logo)`
  display: inline-block;
`;

const MobileNav = styled.nav`
  ${tw`absolute left-0 right-0 z-10 bg-white px-10 pt-5 pb-6`}
  top: 83px;
`;

const NavLink = styled(Link)`
  ${tw`hover:text-pink-100`}
`;

const Header = styled.header`
  height: 86px;
`;

export interface HeaderNavBarProps {
  type?: "user" | "expert";
}

const HeaderNavbar = ({ type = "user" }: HeaderNavBarProps) => {
  let { pathname } = useLocation();

  return (
    <Header className="container flex items-center justify-between">
      <Link className="inline-flex items-center" to="/">
        <span className="text-pink-100">
          <ELogo width="63px" height="60px" />
        </span>{" "}
        <div className="text-40px text-pink-100 font-semibold ml-4">
          ezcareme
        </div>
      </Link>
      {/* <HamburgerBtn onClick={() => setIsCollapsed(!isCollapsed)}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerBtn> */}
      <nav className="flex items-center h-full">
        <ul className="flex h-full items-stretch font-semibold">
          <li
            className={classnames(`flex text-base h-full px-5`, {
              "text-pink-100": pathname === ROUTES.USER_LANDING,
              "border-b-2 border-pink-100": pathname === ROUTES.USER_LANDING,
            })}
          >
            <NavLink className="self-center" to="/">
              Trang chủ
            </NavLink>
          </li>
          <li
            className={classnames(`flex text-base h-full px-5`, {
              "text-pink-100": pathname === ROUTES.USER_LOGIN,
              "border-b-2 border-pink-100": pathname === ROUTES.USER_LOGIN,
            })}
          >
            <NavLink className="self-center" to={ROUTES.USER_LOGIN}>
              Dành cho khách hàng
            </NavLink>
          </li>
          <li
            className={classnames(`flex text-base h-full px-5`, {
              "text-pink-100": pathname === ROUTES.EXPERT_LOGIN,
              "border-b-2 border-pink-100": pathname === ROUTES.EXPERT_LOGIN,
            })}
          >
            <NavLink className="self-center" to={ROUTES.EXPERT_LOGIN}>
              Dành cho chuyên gia
            </NavLink>
          </li>
        </ul>
        {/* <div className="flex items-center ml-10">
            <LoginButton
              className="px-2 py-1"
              type="secondary"
              to={type === "user" ? ROUTES.USER_LOGIN : ROUTES.EXPERT_LOGIN}
            >
              <span className="text-lg">Đăng nhập</span>
            </LoginButton>
            <LoginButton
              type="primary"
              className="ml-5 sm:ml-8"
              to={type === "user" ? ROUTES.USER_SIGNUP : ROUTES.EXPERT_SIGNUP}
            >
              <span className="text-lg">Đăng ký</span>
            </LoginButton>
          </div> */}
      </nav>
      {/* <MobileNav className={isCollapsed ? "block" : "hidden"}>
        <ul>
          <li
            className={classnames(`text-base`, {
              "text-pink-100": pathname === ROUTES.USER_LANDING,
            })}
          >
            <NavLink to={ROUTES.USER_LANDING} className="hover:text-pink-100">
              Trang chủ
            </NavLink>
          </li>
          <li className="text-base mt-5">
            <NavLink to="/">Gói dịch vụ</NavLink>
          </li>
          <li className="text-base mt-5">
            <NavLink to="/">Thông tin chung</NavLink>
          </li>
        </ul>
        <div className="flex items-center mt-5">
          <LoginButton
            className="px-2 py-1"
            type="secondary"
            to={type === "user" ? ROUTES.USER_LOGIN : ROUTES.EXPERT_LOGIN}
          >
            <span className="text-lg">Đăng nhập</span>
          </LoginButton>
          <LoginButton
            type="primary"
            className="ml-5"
            to={type === "user" ? ROUTES.USER_SIGNUP : ROUTES.EXPERT_SIGNUP}
          >
            <span className="text-lg">Đăng ký</span>
          </LoginButton>
        </div>
      </MobileNav> */}
    </Header>
  );
};
export default HeaderNavbar;
