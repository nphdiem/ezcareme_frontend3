import React from "react";
import styled from "styled-components";
import Header from "components/headerComponent/WebsiteHeader";
import Footer from "components/footerComponent/Footer";
import tw from "tailwind.macro";

const Container = styled.div`
  ${tw`flex flex-col`}
  min-width: 1440px;
  min-height: 100vh;
`;

const QAPage = () => {
  return (
    <Container>
      <Header />
      <div className="flex-grow">QA</div>
      <Footer />
    </Container>
  );
};

export default QAPage;
