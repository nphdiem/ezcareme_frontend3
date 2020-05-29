import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { ReactComponent as Bell } from "components/icons/Bell.svg";
import { Popover, Badge } from "antd";

const text = <span>Title</span>;
const content = <div>Notifications go here</div>;

const Wrapper = styled.button`
  ${tw`flex-none flex items-center justify-center relative`}
  width: 30px;
  height: 30px;
  &:focus {
    outline: 0;
  }
`;

const Notification = () => {
  return (
    <Popover
      placement="bottomRight"
      title={text}
      content={content}
      trigger="click"
    >
      <Badge count={5} offset={[-5, 5]} overflowCount={20}>
        <Wrapper>
          <Bell width="24px" />
        </Wrapper>
      </Badge>
    </Popover>
  );
};

export default Notification;
