import React from "react";
import UserLoginPage from "pages/user/LoginPage";
import UserSignUpPage from "pages/user/SignUpPage";
import ExpertLoginPage from "pages/expert/LoginPage";
import ExpertSignUpPage from "pages/expert/SignUpPage";
import SearchPage from "pages/SearchPage";
import SearchResultPage from "pages/SearchResultPage";
import HomePage from "pages/user/HomePage";
import ExpertProfilePage from "pages/ExpertProfilePage";
import ExpertBookingPage from "pages/ExpertBookingPage";
import UserQAPage from "pages/user/QAPage";
import UserProfilePage from "pages/user/ProfilePage";
import UserAccountPage from "pages/user/AccountPage";
import UserQAPendingPage from "pages/user/QAPendingPage";
import UserQAAnsweredPage from "pages/user/QAAnsweredPage";
import UserFavouritePage from "pages/user/FavouritePage";
import UserSessionPendingPage from "pages/user/SessionPendingPage";
import UserSessionHistoryPage from "pages/user/SessionHistoryPage";
import UserSessionCancelledPage from "pages/user/SessionCancelledPage";
import PageNotFound from "pages/PageNotFound";
import ROUTES from "constants/routes";
import { Router } from "@reach/router";
import UserAppLayput from "components/Layout/UserAppLayout";

function App() {
  return (
    <div>
      <Router>
        <HomePage path={ROUTES.USER_LANDING} />
        <ExpertLoginPage path={ROUTES.EXPERT_LOGIN} />
        <ExpertSignUpPage path={ROUTES.EXPERT_SIGNUP} />
        <UserLoginPage path={ROUTES.USER_LOGIN} />
        <UserSignUpPage path={ROUTES.USER_SIGNUP} />
        <SearchPage path={ROUTES.SEARCH} />
        <SearchResultPage path={ROUTES.SEARCH_RESULT} />
        <ExpertProfilePage path={ROUTES.EXPERT_PROFILE} />
        <ExpertBookingPage path={ROUTES.EXPERT_BOOKING} />
        <UserQAPage path={ROUTES.USER_QA} />
        <UserAppLayput path="/user">
          <UserProfilePage path={"/"} default />
          <UserAccountPage path={"/account"} />
          <UserQAPendingPage path={"/qa-pending"} />
          <UserQAAnsweredPage path={"/qa-answered"} />
          <UserFavouritePage path={"/favourite"} />
          <UserSessionPendingPage path={"/session-pending"} />
          <UserSessionHistoryPage path={"/session-history"} />
          <UserSessionCancelledPage path={"/session-cancelled"} />
        </UserAppLayput>
        <PageNotFound default />
      </Router>
    </div>
  );
}

export default App;
