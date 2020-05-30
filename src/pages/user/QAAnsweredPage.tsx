import React from "react";
import PageContainer from "components/PageContainer";
import AppHeader from "components/headerComponent/AppHeader";

const QAAnsweredPage = () => {
  return (
    <PageContainer>
      <div className="flex-grow flex">
        <div className="flex-grow">
          <AppHeader
            rightBlock={
              <h1 className="text-2xl font-semibold">Câu hỏi đã giải đáp</h1>
            }
          />
          HELLO
        </div>
      </div>
    </PageContainer>
  );
};

export default QAAnsweredPage;
