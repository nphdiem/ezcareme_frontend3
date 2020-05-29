import React from "react";
import AppHeader from "components/headerComponent/AppHeader";
import PageContainer from "components/PageContainer";

const UserProfilePage = () => {
  return (
    <PageContainer>
      <div className="flex-grow flex">
        <div className="flex-grow">
          <AppHeader
            rightBlock={
              <h1 className="text-2xl font-semibold">Thông tin cá nhân</h1>
            }
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default UserProfilePage;
