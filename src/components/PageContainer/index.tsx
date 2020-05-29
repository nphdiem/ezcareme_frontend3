import styled from "styled-components";
import tw from "tailwind.macro";

const PageContainer = styled.div`
  ${tw`flex flex-col`}
  min-width: 1440px;
  min-height: 100vh;
`;

export default PageContainer;
