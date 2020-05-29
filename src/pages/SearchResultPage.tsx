import React, { useState } from "react";
import Header from "components/headerComponent/WebsiteHeader";
import Footer from "components/footerComponent/Footer";
import styled from "styled-components";
import tw from "tailwind.macro";
import { ReactComponent as SearchIcon } from "components/icons/Search.svg";
import ExpertCard from "components/ExpertCard";
import { Expert } from "types/schema";
import { Pagination } from "antd";

const PageContainer = styled.div`
  ${tw`flex flex-col`}
  min-width: 1440px;
  min-height: 100vh;
`;

const SearchDivider = styled.div`
  ${tw`mx-5`}
  height: 30px;
  width: 1px;
  flex: none;
  background-color: var(--mercury);
`;

const SearchBtn = styled.button`
  ${tw`ml-5 py-3 px-4 text-white`}
  cursor: pointer;
  outline: 0;
  border-radius: 0 10px 10px 0;
  background-color: var(--bittersweet);
`;

const StyledPagination = styled(Pagination)`
  .ant-pagination-item-active {
    border-color: var(--bittersweet);
  }

  .ant-pagination-item-active a {
    color: var(--bittersweet);
  }

  .ant-pagination-item:focus,
  .ant-pagination-item:hover {
    border-color: var(--bittersweet);
  }

  .ant-pagination-item:focus a,
  .ant-pagination-item:hover a {
    color: var(--bittersweet);
  }
`;

// const ReviewBlock = styled.div`
//   ${tw`border-gray-100`}
//   min-width: 284px;
//   box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.15);
//   border-radius: 20px;
// `;

const experts = [
  {
    id: "1",
    name: "Nguyễn Phương Thảo",
    email: "npthao@gmail.com",
    location: "Hồ Chí Minh",
    callPrice: 100000,
    qaPrice: 50000,
    job: "Nhân viên xã hội",
    expertises: ["Trẻ em", "Gia đình", "Cá nhân"],
    rating: 4,
    accountType: "3months",
    isFavourite: true,
    avatar: "",
  },
  {
    id: "2",
    name: "Hồ Bảo Quốc",
    email: "hbquoc@gmail.com",
    location: "Đà Nẵng",
    callPrice: 150000,
    qaPrice: 50000,
    job: "Chuyên viên tham vấn tâm lý",
    expertises: ["Hôn nhân", "Tình cảm"],
    rating: 3.8,
    accountType: "free",
    isFavourite: false,
    avatar:
      "https://vcdn1-giaitri.vnecdn.net/2020/03/29/991816090-56782878-2.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=FalyTpb6BDBE3vFkujJ-TQ",
  },
];

const SearchResult = () => {
  const [searchText, setSearchText] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  function onSearchTextChange(e: any) {
    setSearchText(e.target.value);
  }

  function onSearchLocationChange(e: any) {
    setSearchLocation(e.target.value);
  }

  function onSearch() {
    console.log("searching...");
  }

  return (
    <PageContainer>
      <Header />
      <div className="flex-grow">
        <section className="py-6 border-b border-t border-gray-100">
          <div className="container">
            <div className="flex items-center border border-gray-100 rounded-10px">
              <span className="text-lg font-semibold ml-4">Tìm kiếm</span>
              <input
                className="ml-4 border-none text-lg flex-grow outline-none"
                type="text"
                placeholder="Tên Chuyên gia hoặc Lĩnh vực chuyên môn"
                onChange={onSearchTextChange}
              />
              <SearchDivider />
              <span className="text-lg font-semibold">Khu vực</span>
              <input
                className="ml-4 border-none text-lg outline-none flex-none"
                type="text"
                placeholder="Tỉnh thành"
                onChange={onSearchLocationChange}
              />
              <SearchBtn onClick={onSearch}>
                <SearchIcon width="20px" />
              </SearchBtn>
            </div>
          </div>
        </section>
        <section className="container flex py-12">
          <div className="flex-grow">
            <div className="text-xl font-semibold mb-8">
              Chuyên gia tham vấn Tâm lý uy tín
            </div>
            {experts.map((e: Expert, index: number) => (
              <ExpertCard
                key={index}
                expert={e}
                className={index !== 0 ? "mt-8" : ""}
              />
            ))}
          </div>
          {/* <ReviewBlock></ReviewBlock> */}
        </section>
        <div className="container mb-10">
          <StyledPagination defaultCurrent={1} defaultPageSize={5} total={21} />
        </div>
      </div>
      <Footer />
    </PageContainer>
  );
};

export default SearchResult;
