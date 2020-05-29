import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Notification from "components/Notification";

export interface AppHeaderProps {
  rightBlock?: React.ReactNode;
  leftBlock?: React.ReactNode;
}

const Header = styled.div`
  ${tw`flex items-center justify-between border-b border-gray-100 p-5`}
  height: 86px;
`;

const AppHeader = ({ rightBlock, leftBlock }: AppHeaderProps) => {
  return (
    <Header>
      <div>{rightBlock}</div>
      <div className="flex items-center">
        {leftBlock}
        <Notification />
      </div>
    </Header>
  );
};

export default AppHeader;
