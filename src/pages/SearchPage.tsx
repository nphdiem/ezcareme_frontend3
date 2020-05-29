import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Link } from "@reach/router";
import Header from "components/headerComponent/WebsiteHeader";
import Footer from "components/footerComponent/Footer";

const PageContainer = styled.div`
  ${tw`flex flex-col`}
  min-width: 1440px;
  min-height: 100vh;
`;

const SearchPage = () => {
  return (
    <PageContainer>
      <Header />
      <div className="flex-grow">Content</div>
      <Footer />
    </PageContainer>
  );
};

export default SearchPage;
