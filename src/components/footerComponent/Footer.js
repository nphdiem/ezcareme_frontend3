import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Link } from "@reach/router";
import { ReactComponent as Logo } from "components/Logo/Logo.svg";

const NavLink = styled(Link)`
  ${tw`hover:text-pink-100`}
`;

const NavItem = styled.li`
  ${tw`mb-5 text-base`}
`;

const WarningBlock = styled.div`
  ${tw`border border-pink-100 border-dashed py-2 px-5 text-base`}
  max-width: 603px;
`;

const ELogo = styled(Logo)`
  display: inline-block;
`;

function Footer() {
  return (
    <footer className="container pt-10 pb-6">
      <nav className="flex items-start flex-wrap justify-between">
        <Link className="inline-flex items-center mb-10" to="/">
          <span className="text-pink-100">
            <ELogo width="63px" height="60px" />
          </span>{" "}
          <div className="text-40px text-pink-100 font-semibold ml-4">
            ezcareme
          </div>
        </Link>
        <div className="flex flex-wrap">
          <div className="px-5 pb-5">
            <ul>
              <NavItem>
                <NavLink to="/">Trang chủ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Dành cho Khách hàng</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Dành cho Chuyên gia</NavLink>
              </NavItem>
            </ul>
          </div>
          <div className="px-5 pb-5">
            <ul>
              <NavItem>
                <NavLink to="/">Tìm Chuyên gia</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">Hỗ trợ khách hàng</NavLink>
              </NavItem>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex justify-end">
        <WarningBlock>
          Trong trường hợp bạn đang gặp sự cố nguy cấp, vui lòng không sử dụng
          nền tảng này.{" "}
          <span className="text-pink-100 font-semibold">Gọi Cấp Cứu (115)</span>{" "}
          hoặc liên lạc các{" "}
          <span className="text-pink-100 font-semibold">Nguồn Hỗ Trợ</span>{" "}
          ngay!
        </WarningBlock>
      </div>
    </footer>
  );
}

export default Footer;
