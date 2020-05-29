import React from "react";
import Header from "components/headerComponent/WebsiteHeader";
import Footer from "components/footerComponent/Footer";
import styled from "styled-components";
import { ReactComponent as Logo } from "components/Logo/Logo.svg";
import { ReactComponent as HomePageCircle } from "components/svg/HomePageCircle.svg";
import LinkButton from "components/LinkButton";
import ROUTES from "constants/routes";
import tw from "tailwind.macro";
import { Form, Field } from "react-final-form";
import isEmail from "validator/lib/isEmail";
import { Input } from "antd";
import classname from "classnames";
import EButton from "components/Button";
const { TextArea } = Input;

const Container = styled.div`
  min-width: 1440px;
`;

const HeroSection = styled.section`
  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const ELogo = styled(Logo)`
  display: inline-block;
`;

const MoreButton = styled(LinkButton)`
  border: solid 1px var(--bittersweet) !important;
  background-color: transparent !important;
`;

const CallButton = styled.div`
  padding: 12px 30px;
  border-radius: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: solid 1px var(--scorpion);
`;

const QAServiceBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const CallServiceBlock = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  bottom: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const ServiceSection = styled.section`
  min-height: 700px;
  position: relative;
`;

const ExpertItem = styled.div`
  position: relative;
  padding-bottom: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const SignUpBlock = styled.div`
  position: relative;
  min-height: 990px;
`;

const SignUpBackground = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 10%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const SignUpBlockLeft = styled.div`
  ${tw`py-20 text-white absolute`}
  background-color: rgba(255, 90, 95, 0.9);
  width: 706px;
  padding-left: 100px;
  padding-right: 100px;
  border-radius: 0 0 10px 0;
  top: 0;
  left: 0;
`;

const FormContainer = styled.div`
  ${tw`mx-auto`}
  max-width: 800px;
`;

export interface FormFields {
  name?: string;
  email: string;
  phone: string;
  content?: string;
}

const SignUpButton = styled(LinkButton)`
  background-color: var(--white) !important;
`;

function onValidate(values: FormFields) {
  const errors: {
    name?: string;
    email?: string;
    phone?: string;
    content?: string;
  } = {};
  if (!values.email) {
    errors.email = "Hãy nhập email";
  } else if (!isEmail(values.email)) {
    errors.email = "Email không hợp lệ";
  }
  if (!values.content) {
    errors.content = "Hãy nhập điều bạn muốn chia sẻ";
  }
  return errors;
}

const HomePage = () => {
  function onSubmit(value: any) {}
  return (
    <Container>
      <Header />
      <HeroSection style={{ backgroundImage: `url("/img/homePageHero.png")` }}>
        <div className="container flex">
          <div className="w-1/2 ml-auto py-20">
            <h1 className=" text-pink-100 text-4xl">
              <span>
                Chăm sóc sức khoẻ tinh thần dễ dàng và nhanh chóng hơn với
              </span>{" "}
              <span>
                <ELogo width="46px" height="40px" />
              </span>{" "}
              <span>ezcareme</span>
            </h1>
            <LinkButton
              type="primary"
              to={ROUTES.USER_SIGNUP}
              className="mt-10 ml-auto"
            >
              <span className="text-xl">ĐĂNG KÝ NGAY</span>
            </LinkButton>
          </div>
        </div>
      </HeroSection>
      <div className="bg-pink-200">
        <div className="container py-10">
          <div className="text-2xl text-center mb-8">
            <span className="text-pink-100">
              <ELogo width="45px" height="39px" />
            </span>{" "}
            <span className="text-pink-100">ezcareme</span>{" "}
            <span>hỗ trợ cộng đồng vượt qua mùa dịch</span>{" "}
            <span className="text-pink-100">COVID 19</span>{" "}
          </div>
          <div className="text-lg mb-10">
            Nhập mã khuyến mãi: <span className="text-pink-100">COVID19</span>{" "}
            để được miễn phí tính năng{" "}
            <span className="text-pink-100">Hỏi - Đáp EZ</span> với Chuyên gia
            Tham vấn tâm lý. (Áp dụng đến hết ngày 30/06/2020)
          </div>
          <p className="text-lg mb-10">
            Nếu bạn thực hiện thanh toán (không nhập mã khuyến mãi), bạn đã góp
            phần chung tay hỗ trợ cho cộng đồng đang gặp khó khăn trong mùa dịch
            bệnh. Cùng đồng hành và hỗ trợ lẫn nhau giúp chúng ta mạnh mẽ hơn!
          </p>
          <div className="flex justify-center">
            <MoreButton
              type="secondary"
              to={ROUTES.USER_SIGNUP}
              className="border border-pink-100"
            >
              <span className="text-lg text-pink-100">Tìm hiểu thêm</span>
            </MoreButton>
          </div>
        </div>
      </div>
      <ServiceSection>
        <QAServiceBlock
          style={{ backgroundImage: `url("/img/homePage/ezAsk.png")` }}
        ></QAServiceBlock>
        <div className="container">
          <div className="w-1/2 pr-20 py-16">
            <strong className="text-pink-100 text-2xl">
              Bạn hỏi - Chuyên gia đáp
            </strong>
            <p className="text-xl my-10">
              Phải chăng những áp lực của cuộc sống đang làm bạn mệt mỏi? Chẳng
              có ai sẵn sàng lắng nghe những tâm tư, tình cảm của bạn? Bạn không
              biết phải chia sẻ cảm xúc của mình ở đâu?
            </p>
            <p className="text-xl mb-10">
              Hãy chia sẻ với các chuyên gia tâm lý{" "}
              <span className="text-pink-100">ezcareme</span> ngay bây giờ để
              cảm thấy hạnh phúc hơn!
            </p>
            <div className="flex justify-center">
              <LinkButton
                type="primary"
                to={ROUTES.USER_SIGNUP}
                className="mt-10 ml-auto"
              >
                <span className="text-xl">Hỏi - Đáp EZ</span>
              </LinkButton>
            </div>
          </div>
        </div>
      </ServiceSection>
      <ServiceSection>
        <CallServiceBlock
          style={{ backgroundImage: `url("/img/homePage/ezCall.png")` }}
        ></CallServiceBlock>
        <div className="container">
          <div className="w-1/2 pl-20 py-16 ml-auto">
            <strong className="text-pink-100 text-2xl">
              Đặt hẹn tham vấn online với Chuyên gia nhanh chóng và tiện lợi
            </strong>
            <p className="text-xl my-10">
              Chăm sóc sức khoẻ tinh thần của bạn hiệu quả và dễ dàng hơn cùng{" "}
              <span className="text-pink-100">ezcareme</span>.
            </p>
            <p className="text-xl mb-10">
              Trò chuyện trực tuyến với các Chuyên gia tham vấn Tâm lý, Nhân
              viên xã hội và Bác sĩ tâm thần ngay tại nơi bạn cảm thấy thoải mái
              nhất mà không cần phải đi đến văn phòng tham vấn.
            </p>
            <div className="flex justify-center">
              <CallButton>
                <span className="text-gray-200 text-xl">Sắp ra mắt</span>
              </CallButton>
            </div>
          </div>
        </div>
      </ServiceSection>
      <section className="container py-20">
        <div className="mb-20 text-center">
          <span className="text-3xl font-semibold mr-3">
            Mạng lưới chuyên gia
          </span>
          <span className="text-pink-100">
            <ELogo width="45px" height="39px" />
          </span>{" "}
          <span className="text-pink-100 text-2xl">ezcareme</span>
        </div>
        <div className="grid grid-cols-6 gap-8">
          <ExpertItem
            style={{ backgroundImage: `url("/img/homePage/expert.png")` }}
          />
          <ExpertItem
            style={{ backgroundImage: `url("/img/homePage/expert.png")` }}
          />
          <ExpertItem
            style={{ backgroundImage: `url("/img/homePage/expert.png")` }}
          />
          <ExpertItem
            style={{ backgroundImage: `url("/img/homePage/expert.png")` }}
          />
          <ExpertItem
            style={{ backgroundImage: `url("/img/homePage/expert.png")` }}
          />
          <ExpertItem
            style={{ backgroundImage: `url("/img/homePage/expert.png")` }}
          />
        </div>
      </section>
      <section>
        <div className="my-20 text-center">
          <span className="text-3xl font-semibold mr-3">
            Trở thành chuyên gia
          </span>
          <span className="text-pink-100">
            <ELogo width="45px" height="39px" />
          </span>{" "}
          <span className="text-pink-100 text-2xl">ezcareme</span>
        </div>
        <SignUpBlock>
          <div className="absolute top-0 right-0 p-5 z-10 text-white">
            <span>
              <ELogo width="45px" height="39px" />
            </span>{" "}
            <span className="text-2xl">ezcareme</span>
          </div>
          <SignUpBackground
            style={{ backgroundImage: `url("/img/homePage/signup.jpg")` }}
          />
          <SignUpBlockLeft>
            <div className="text-3xl mb-10">
              Cung cấp dịch vụ tham vấn tâm lý chất lượng cao dựa trên kế hoạch
              làm việc của bạn.
            </div>
            <p className="mb-10 text-xl">
              Bạn là Chuyên gia tham vấn Tâm lý, Nhân viên xã hội hay Bác sĩ tâm
              thần? Đồng hành cùng ezcareme và bắt đầu chăm sóc sức khoẻ tinh
              thần cho nhiều khách hàng hơn.
            </p>
            <div className="flex justify-center">
              <SignUpButton
                type="primary"
                to={ROUTES.EXPERT_SIGNUP}
                className="mt-10 ml-auto"
              >
                <span className="text-lg text-pink-100">ĐĂNG KÝ NGAY</span>
              </SignUpButton>
            </div>
          </SignUpBlockLeft>
        </SignUpBlock>
      </section>
      <section className="border-b border-gray-100 pb-20 relative">
        <div className="absolute top-0 left-0">
          <HomePageCircle />
        </div>
        <div className="container">
          <div className="my-20 text-center">
            <span className="text-3xl font-semibold mr-3">Liên hệ với</span>
            <span className="text-pink-100">
              <ELogo width="45px" height="39px" />
            </span>{" "}
            <span className="text-pink-100 text-2xl">ezcareme</span>
          </div>
          <FormContainer>
            <Form
              onSubmit={onSubmit}
              initialValues={{
                email: "",
                name: "",
                phone: "",
                content: "",
              }}
              validate={onValidate}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-6">
                    <Field name="name">
                      {({ input, meta }) => (
                        <div className="flex flex-col mb-4">
                          <label
                            htmlFor="name"
                            className="text-lg mb-1 font-semibold"
                          >
                            Họ và tên của bạn
                          </label>
                          <Input
                            {...input}
                            type="text"
                            id="name"
                            name="name"
                            placeholder=""
                            className={classname(
                              "text-base p-2 border border-black rounded",
                              {
                                "border-red-600": meta.error && meta.touched,
                              }
                            )}
                          />
                          {meta.error && meta.touched && (
                            <span className="text-red-600 mt-1">
                              {meta.error}
                            </span>
                          )}
                        </div>
                      )}
                    </Field>
                    <Field name="phone">
                      {({ input, meta }) => (
                        <div className="flex flex-col mb-4">
                          <label
                            htmlFor="phone"
                            className="text-lg mb-1 font-semibold"
                          >
                            Số điện thoại
                          </label>
                          <Input
                            {...input}
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder=""
                            className={classname(
                              "text-base p-2 border border-black rounded",
                              {
                                "border-red-600": meta.error && meta.touched,
                              }
                            )}
                          />
                          {meta.error && meta.touched && (
                            <span className="text-red-600 mt-1">
                              {meta.error}
                            </span>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                  <Field name="email">
                    {({ input, meta }) => (
                      <div className="flex flex-col mb-4">
                        <label
                          htmlFor="email"
                          className="text-lg mb-1 font-semibold"
                        >
                          Email của bạn
                        </label>
                        <Input
                          {...input}
                          type="text"
                          id="email"
                          name="email"
                          placeholder=""
                          className={classname(
                            "text-base p-2 border border-black rounded",
                            {
                              "border-red-600": meta.error && meta.touched,
                            }
                          )}
                        />
                        {meta.error && meta.touched && (
                          <span className="text-red-600 mt-1">
                            {meta.error}
                          </span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="content">
                    {({ input, meta }) => (
                      <div className="flex flex-col mb-4">
                        <label
                          htmlFor="content"
                          className="text-lg mb-1 font-semibold"
                        >
                          Bạn muốn chia sẻ điều gì với chúng tôi ?
                        </label>
                        <TextArea
                          {...input}
                          rows={4}
                          id="content"
                          name="content"
                          placeholder=""
                          className={classname(
                            "text-base p-2 border border-black rounded",
                            {
                              "border-red-600": meta.error && meta.touched,
                            }
                          )}
                        />
                        {meta.error && meta.touched && (
                          <span className="text-red-600 mt-1">
                            {meta.error}
                          </span>
                        )}
                      </div>
                    )}
                  </Field>
                  <div className="flex justify-center">
                    <EButton
                      type="primary"
                      htmlType="submit"
                      className="mt-12"
                      onClick={handleSubmit}
                    >
                      <span className="text-lg px-5">Gửi ngay</span>
                    </EButton>
                  </div>
                </form>
              )}
            />
          </FormContainer>
        </div>
      </section>
      <Footer />
    </Container>
  );
};

export default HomePage;
