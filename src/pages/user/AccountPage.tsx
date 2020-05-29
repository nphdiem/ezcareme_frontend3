import React, { useState } from "react";
import AppHeader from "components/headerComponent/AppHeader";
import styled from "styled-components";
import tw from "tailwind.macro";
import { ReactComponent as ChervonDown } from "components/icons/ChervonDown.svg";

const Label = styled.div`
  ${tw`flex-none text-black`}
  width: 200px;
`;

const ChangePasswordButton = styled.button`
  ${tw`text-pink-100 text-sm flex items-center`}
  cursor: pointer;
  &:hover,
  &:focus {
    outline: 0;
    filter: brightness(0.8);
  }
`;

const account = {
  email: "leminhquyen@gmail.com",
  name: "quyenlm",
};

const AccountPage = () => {
  const [formVisibled, setFormVisibled] = useState(false);

  return (
    <>
      <AppHeader
        rightBlock={
          <h1 className="text-2xl font-semibold">Thông tin người dùng</h1>
        }
      />
      <div className="px-5 py-10">
        <div className="flex items-center text-lg">
          <Label>Email</Label>
          <div>{account.email}</div>
        </div>
        <div className="flex items-center text-lg mt-5">
          <Label>Tên tài khoản</Label>
          <div>{account.name}</div>
        </div>
        {formVisibled ? (
          <div className="mt-5">Form here</div>
        ) : (
          <div className="mt-5">
            <ChangePasswordButton onClick={() => setFormVisibled(true)}>
              <span className="mr-4">Đổi mật khẩu</span>
              <ChervonDown width="10px" />
            </ChangePasswordButton>
          </div>
        )}
      </div>
    </>
  );
};

export default AccountPage;
