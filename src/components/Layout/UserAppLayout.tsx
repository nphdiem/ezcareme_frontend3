import React from "react";
import UserSidebar from "components/Sidebar/UserSidebar";
import PageContainer from "components/PageContainer";
import { useLocation } from "@reach/router";
import ROUTES from "constants/routes";

const UserAppLayout = (props: any) => {
  const { pathname } = useLocation();
  let openKey = "";
  if (
    pathname === ROUTES.USER_QA_PENDING ||
    pathname === ROUTES.USER_QA_ANSWERED
  ) {
    openKey = "qa";
  } else if (
    pathname === ROUTES.USER_SESSION_PENDING ||
    pathname === ROUTES.USER_SESSION_HISTORY ||
    pathname === ROUTES.USER_SESSION_CANCELLED
  ) {
    openKey = "session";
  }
  return (
    <PageContainer>
      <div className="flex h-screen">
        <UserSidebar selectedKey={pathname} defaultOpenKey={openKey} />
        <div className="flex-grow">{props.children}</div>
      </div>
    </PageContainer>
  );
};

export default UserAppLayout;
