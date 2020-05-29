import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import LinkButton from "components/LinkButton";
import Header from "components/headerComponent/WebsiteHeader";
import Footer from "components/footerComponent/Footer";
import ROUTES from "constants/routes";

const HeroImage = styled.div`
  position: relative;
  height: calc(100vh - 86px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const HeroImageOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--black);
  opacity: 0.3;
`;

const Divider = styled.hr`
  height: 2px;
  width: 173px;
  background-color: var(--bittersweet);
  margin: 13px auto 22px;
`;

const ImageWrapper = styled.div`
  width: 194px;
  height: 194px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

const Feature = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 568px) {
    flex-direction: column;
    align-items: flex-start;
  }
  li:last-child {
    &:after {
      display: none;
    }
    @media screen and (max-width: 568px) {
      &:after {
        display: block;
      }
    }
  }
`;

const FeatureItem = styled.li`
  position: relative;
  padding: 10px 40px;
  font-weight: 600;
  &:after {
    content: "";
    position: absolute;
    right: -7px;
    top: 15px;
    width: 14px;
    height: 14px;
    background-color: rgba(108, 98, 98, 0.5);
    border-radius: 999px;

    @media screen and (max-width: 568px) {
      left: 0;
      right: auto;
    }
  }
`;

const PriceSection = styled.section`
  ${tw`mx-auto flex items-center justify-between flex-wrap relative`}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Dot = styled.div`
  border-radius: 999px;
  width: 14px;
  height: 14px;
  flex: none;
  background-color: ${(props) => (props.color ? props.color : "var(--white)")};
`;

const ReviewBlock = styled.div`
  ${tw`rounded bg-pink-100 rounded-lg`}
  min-height: 270px;
`;

const Avatar = styled.div`
  ${tw`rounded-full flex-none bg-white`}
  width: 140px;
  height: 140px;
`;

const Table = styled.div`
  ${tw`mt-20 border-2 border-pink-100 rounded-lg mx-auto`}
  max-width: 814px;
`;

const RequirementItem = styled.li`
  ${tw`relative px-10 text-lg font-light`}
  margin-bottom: 16px;
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    top: 10px;
    width: 10px;
    height: 10px;
    background-color: var(--bittersweet);
    border-radius: 999px;
  }
  :last-child {
    margin-bottom: 0px;
  }
`;

const MoreButton = styled(LinkButton)`
  border-color: var(--white) !important;
  color: var(--white) !important;
  background-color: transparent !important;

  &:hover {
    background-color: var(--white) !important;
    color: var(--black) !important;
  }
`;

function homePage() {
  return (
    <>
      <Header type="expert" />
      <section>
        <HeroImage style={{ backgroundImage: `url("/img/online-care.png")` }}>
          <HeroImageOverlay />
          <div className="container mx-auto relative flex flex-col justify-center h-full">
            <div className="p-5 md:pt-10 md:pb-12">
              <h2 className="text-4xl sm:text-40px md:text-5xl text-white md:w-2/3 font-bold mb-5 md:mb-12">
                Trở thành chuyên gia tâm lý và hỗ trợ nhiều khách hàng hơn cùng{" "}
                <span className="text-pink-100">“ezcareme”</span>
              </h2>
              <LinkButton type="primary" to={ROUTES.EXPERT_SIGNUP}>
                <span className="text-xl md:text-2xl p-0 md:py-2 md:px-6">
                  ĐĂNG KÝ NGAY
                </span>
              </LinkButton>
            </div>
          </div>
        </HeroImage>
      </section>

      <section className="container mx-auto">
        <h4 className="text-center mt-10 text-2xl">
          Lợi ích khi trở thành chuyên gia
          <br />
          <span className="text-pink-100">&nbsp;“ezcareme”</span>
          <Divider />
        </h4>
        <div className="flex flex-wrap items-stretch">
          <div className="md:w-1/3 flex flex-col items-center justify-center pb-10">
            <ImageWrapper>
              <img
                width="140px"
                src="/img/max-logo-heart.png"
                alt="Dễ dàng chăm sóc"
              />
            </ImageWrapper>
            <div className="px-5 md:px-20 md:border-r-2 md:border-pink-100">
              <div className="text-xl font-semibold pb-3 text-center">
                Dễ dàng chăm sóc
              </div>
              <div>
                Bạn sẽ có cơ hội kết nối và chăm sóc cho nhiều khách hàng trên
                toàn cầu nhờ các tính năng công nghệ hiện đại trên nền tảng{" "}
                <span className="text-pink-100">“ezcareme”</span>.
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex flex-col items-center justify-center pb-10">
            <ImageWrapper>
              <img
                width="194px"
                className="d-block mx-auto"
                src="/img/oclock.png"
                alt="Làm việc linh hoạt"
              />
            </ImageWrapper>
            <div className="px-5 md:px-20 md:border-r-2 md:border-pink-100">
              <div className="text-xl font-semibold pb-3 text-center">
                Làm việc linh hoạt
              </div>
              <div>
                Bạn có toàn quyền tạo ra nguồn thu nhập cho mình trên nền tảng
                <span className="text-pink-100">“ezcareme”</span>. Kiểm soát chi
                phí tham vấn và đặt lịch làm việc dễ dàng hơn bao giờ hết.
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex flex-col items-center justify-center pb-10">
            <ImageWrapper>
              <img
                width="158.17px"
                className="d-block mx-auto"
                src="/img/increase.png"
                alt="Tăng cường hiệu suất"
              />
            </ImageWrapper>
            <div className="px-5 md:px-20">
              <div className="text-xl font-semibold pb-3 text-center">
                Tăng cường hiệu suất
              </div>
              <div>
                Bạn chỉ cần tập trung vào công việc của mình mà không cần bận
                tâm đến việc tìm kiếm khách hàng, xử lý thanh toán và vận hành.{" "}
                <span className="text-pink-100">“ezcareme”</span> sẽ giúp bạn
                tối ưu mọi thứ!
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pink-200">
        <div className="container pt-12 pb-20">
          <div className="text-center text-3xl">Tính năng chính</div>
          <Divider />
          <p className="text-center text-xl">
            Những tính năng của{" "}
            <span className="text-pink-100">“ezcareme” </span>
            sẽ giúp cho công việc tham vấn và trị liệu của bạn thuận lợi hơn,
            hiệu quả hơn.
          </p>
          <p className="text-center text-xl">
            Tận dụng nguồn tài nguyên này để hỗ trợ nhiều khách hàng hơn nữa!
          </p>
          <div className="flex justify-center mt-12 mb-20">
            <Feature>
              <FeatureItem>Đặt lịch trực tuyến</FeatureItem>
              <FeatureItem>Đặt lịch trực tuyến</FeatureItem>
              <FeatureItem>Tham vấn đàm thoại</FeatureItem>
              <FeatureItem>Tham vấn qua video</FeatureItem>
            </Feature>
          </div>
          <img
            className="d-block"
            width="100%"
            src="/img/communicate-1.png"
            alt="features"
          />
        </div>
      </section>

      <PriceSection
        style={{ backgroundImage: `url("./img/background-hand.png")` }}
      >
        <div className="absolute top-0 right-0 left-0 bottom-0 opacity-75 bg-black"></div>
        <div className="container flex items-center flex-wrap py-10 relative">
          <div className="w-full md:w-1/2 px-10 text-white">
            <div className="text-2xl font-semibold mb-3 pb-4 border-b-2 border-white">
              Chi phí dịch vụ
            </div>
            <div className="my-10 text-white text-xl">
              Chọn gói dịch vụ phù hợp với nhu cầu của bạn. Tuỳ chọn điều chỉnh
              thời gian đăng ký tài khoản và cước phí tham vấn. Tiết kiệm và
              hiệu quả!
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10 text-lg text-white">
            <ul>
              <li className="mb-6 flex items-center">
                <Dot />
                <span className="ml-5">Chi phí phù hợp. Dễ dàng sử dụng.</span>
              </li>
              <li className="mb-6 flex items-center">
                <Dot />
                <span className="ml-5">
                  Tuỳ chọn thời gian đăng ký tài khoản và sử dụng dịch vụ.
                </span>
              </li>
              <li className="mb-6 flex items-center">
                <Dot />
                <span className="ml-5">
                  Tự điều chỉnh và đề xuất chi phí tham vấn (chi phí/phút).
                </span>
              </li>
              <li className="flex items-center">
                <Dot />
                <span className="ml-5">
                  Tự điều chỉnh và đề xuất chi phí tham vấn (chi phí/phút).
                </span>
              </li>
            </ul>
          </div>
          <div className="px-10 mt-8 md:mt-0">
            <MoreButton to="/" type="secondary">
              <span className="text-xl">Tìm hiếu thêm</span>
            </MoreButton>
          </div>
        </div>
      </PriceSection>

      <section className="relative">
        <div className="container pt-10 pb-24 relative">
          <h4 className="text-2xl font-semibold text-center">Đội ngũ cố vấn</h4>
          <Divider />
          <p className="text-center text-xl w-9/12 mx-auto pt-5 pb-10 font-light">
            Đội ngũ Cố vấn của “ezcareme”là những chuyên gia đầu ngành giàu kinh
            nghiệm trong lĩnh vực Tham vấn - Trị liệu Tâm lý; Sức khỏe tâm thần.
            Khám phá xem họ nói gì về{" "}
            <span className="text-pink-100 font-normal">“ezcareme”</span>
          </p>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 pt-20 relative mb-6 lg:mb-0">
              <div className="absolute top-0 right-0 left-0 flex justify-center">
                <Avatar />
              </div>
              <ReviewBlock />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 pt-20 relative mb-6 lg:mb-0">
              <div className="absolute top-0 right-0 left-0 flex justify-center">
                <Avatar />
              </div>
              <ReviewBlock />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 pt-20 relative mb-6 lg:mb-0">
              <div className="absolute top-0 right-0 left-0 flex justify-center">
                <Avatar />
              </div>
              <ReviewBlock />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 pt-20 relative mb-6 lg:mb-0">
              <div className="absolute top-0 right-0 left-0 flex justify-center">
                <Avatar />
              </div>
              <ReviewBlock />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h4 className="text-2xl font-semibold text-center">
            Yêu cầu đề trở thành chuyên gia
            <br />
            <span className="text-pink-100">&nbsp;“ezcareme”</span>
          </h4>
          <Divider />
          <Table>
            <div className="flex items-stretch">
              <div className="flex items-center justify-center text-white font-semibold text-2xl bg-pink-100 w-1/4 flex-none border-b-2 border-white text-center">
                Kiến thức
              </div>
              <div className="px-5 py-8 border-b-2 border-pink-100">
                <ul>
                  <RequirementItem>
                    Kiến thức chuyên môn trong các lĩnh vực: Tâm lý học; Công
                    tác xã hội; Sức khoẻ tâm thần.
                  </RequirementItem>
                  <RequirementItem>
                    Bằng cấp học Đại học/Chứng chỉ trong các lĩnh vực chuyên môn
                    Tham vấn - Trị liệu đã được công nhận.
                  </RequirementItem>
                  <RequirementItem>
                    Hoàn thành xuất sắc bài kiểm tra của{" "}
                    <span className="text-pink-100">&nbsp;“ezcareme”</span>
                  </RequirementItem>
                </ul>
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="flex items-center justify-center text-white font-semibold text-2xl bg-pink-100 w-1/4 flex-none border-b-2 border-white text-center">
                Kỹ năng
              </div>
              <div className="px-5 py-8 border-b-2 border-pink-100">
                <ul>
                  <RequirementItem>
                    Có kỹ năng làm việc với nhiều nhóm khách hàng: người trưởng
                    thành, thanh niên, trẻ em, người cao tuổi,...
                  </RequirementItem>
                  <RequirementItem>
                    Kỹ năng giao tiếp và tư duy phản biện tốt.
                  </RequirementItem>
                  <RequirementItem>
                    Kỹ năng xây dựng kế hoạch và giải quyết vấn đề.
                  </RequirementItem>
                  <RequirementItem>
                    Kỹ năng sử dụng nền tảng công nghệ và internet.
                  </RequirementItem>
                </ul>
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="flex items-center justify-center text-white font-semibold text-2xl bg-pink-100 w-1/4 flex-none text-center">
                Thái độ
              </div>
              <div className="px-5 py-8">
                <ul>
                  <RequirementItem>
                    Vui vẻ, nhiệt tình và thấu cảm với khách hàng.
                  </RequirementItem>
                  <RequirementItem>
                    Chuyên nghiệp trong công việc. Tôn trọng quyền riêng tư của
                    khách hàng.
                  </RequirementItem>
                  <RequirementItem>
                    Luôn đồng hành và hỗ trợ khách hàng giải quyết vấn đề.
                  </RequirementItem>
                </ul>
              </div>
            </div>
          </Table>
          <div className="text-center pt-20 pb-12 pb- w-5/6 mx-auto text-lg font-light">
            <span className="font-semibold">*Lưu ý:</span> <em>Chuyên gia</em>{" "}
            <span>không đóng vai trò là nhân viên của</span>{" "}
            <span className="text-pink-100 font-normal">“ezcareme”</span>{" "}
            <span>. Các chuyên gia trên nền tảng công nghệ</span>{" "}
            <span className="text-pink-100 font-normal">“ezcareme”</span>{" "}
            <span>là những</span>{" "}
            <em>nhà tham vấn - trị liệu tâm lý; sức khoẻ tinh thần</em>{" "}
            <em className="font-semibold">độc lập</em>{" "}
            <span>và có quan hệ như một</span>{" "}
            <em className="font-semibold">đối tác</em> <span>với</span>{" "}
            <span className="text-pink-100 font-normal">“ezcareme”</span>
          </div>
        </div>
      </section>

      <section className="bg-pink-200 py-10">
        <div className="container">
          <h4 className="text-2xl font-semibold text-center">
            Đăng ký trở thành chuyên gia{" "}
            <span className="text-pink-100">&nbsp;“ezcareme”</span>
          </h4>
          <Divider />
          <div className="text-center text-xl pt-3 font-light">
            Cùng tham gia vào mạng lưới chuyên gia toàn cầu trên nền tảng Tham
            vấn - Trị liệu Tâm lý trực tuyến{" "}
            <span className="text-pink-100">&nbsp;“ezcareme”</span>.
          </div>
          <div className="text-center text-xl pt-3 font-light">
            Hãy tạo <span className="font-semibold">“phòng tham vấn ảo”</span>{" "}
            của riêng mình trên nền tảng{" "}
            <span className="text-pink-100">&nbsp;“ezcareme”</span> ngay bây giờ
            và bắt đầu hỗ trợ cho nhiều khách hàng hơn!
          </div>
          <div className="mt-16 flex items-center justify-center">
            <LinkButton
              type="secondary"
              className="sm:w-44"
              to={ROUTES.EXPERT_LOGIN}
            >
              <span className="text-base sm:text-xl">Đăng nhập</span>
            </LinkButton>
            <LinkButton
              type="primary"
              className="sm:w-44 ml-5 sm:ml-8"
              to={ROUTES.EXPERT_SIGNUP}
            >
              <span className="text-base sm:text-xl">Đăng ký</span>
            </LinkButton>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default homePage;
