import React from "react";
import PageContainer from "components/PageContainer";
import AppHeader from "components/headerComponent/AppHeader";

const SessionPendingPage = () => {
  return (
    <PageContainer>
      <div className="flex-grow flex">
        <div className="flex-grow">
          <AppHeader
            rightBlock={
              <h1 className="text-2xl font-semibold">Cuộc hẹn đang chờ</h1>
            }
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default SessionPendingPage;
