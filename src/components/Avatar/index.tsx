import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { ReactComponent as User } from "components/icons/User.svg";

const AvatarFr = styled.div<{ width?: string }>`
  ${tw`flex items-center justify-center rounded-full`}
  width: ${(props) => props.width || "110px"};
  height: ${(props) => props.width || "110px"};
  flex: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export interface AvatarProps {
  url?: string;
  width?: string;
}

const Avatar = ({ url = "", width = "110px" }: AvatarProps) => {
  return (
    <>
      {url ? (
        <AvatarFr
          width={width}
          style={{
            backgroundImage: `url(${url})`,
          }}
        />
      ) : (
        <AvatarFr width={width} className="text-gray-300 bg-gray-100">
          <User width="40%" />
        </AvatarFr>
      )}
    </>
  );
};

export default Avatar;
