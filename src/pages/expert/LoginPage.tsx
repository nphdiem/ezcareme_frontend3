import React from "react";
import { Form, Field } from "react-final-form";
import Header from "components/headerComponent/WebsiteHeader";
import Footer from "components/footerComponent/Footer";
import styled from "styled-components";
import tw from "tailwind.macro";
import classname from "classnames";
import { Input } from "antd";
import { Link } from "@reach/router";
import EButton from "components/Button";
import ROUTES from "constants/routes";

export interface LoginFormValues {
  email: string;
  password: string;
}

const Container = styled.div`
  ${tw`mx-auto flex flex-wrap`}
  max-width: 1000px;
`;

function onValidate(values: LoginFormValues) {
  const errors: { email?: string; password?: string } = {};
  if (!values.email) {
    errors.email = "Hãy nhập email";
  }
  if (!values.password) {
    errors.password = "Hãy nhập password";
  }
  return errors;
}

const LoginPage = () => {
  function onSubmit(values: LoginFormValues) {
    console.log(values);
    console.log("submitting ...");
  }

  return (
    <div className="flex flex-col h-screen">
      <Header type="expert" />
      <section className="flex-grow py-10 md:py-24 border-t border-b border-gray-100">
        <Container>
          <div className="w-full md:w-1/2 px-4 md:px-6 lg:px-10 pb-6">
            <h1 className="font-semibold text-40px text-pink-100">Đăng nhập</h1>
            <div className="mt-10 text-xl">
              Chúc các{" "}
              <span className="font-bold text-pink-100">Chuyên gia</span> có một
              ngày <span className="text-pink-100">hạnh phúc</span>!
            </div>
            <div className="text-xl leading-10 mt-10">
              Tham vấn tâm lý trực tuyến nhanh chóng hơn, hiệu quả hơn cùng{" "}
              <span className="text-pink-100">“ezcarme”</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-6 lg:px-10">
            <Form
              onSubmit={onSubmit}
              initialValues={{ email: "", password: "" }}
              validate={onValidate}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="email">
                    {({ input, meta }) => (
                      <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="text-lg mb-1">
                          Email của bạn
                        </label>
                        <Input
                          {...input}
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Email"
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
                  <Field name="password">
                    {({ input, meta }) => (
                      <div className="flex flex-col">
                        <label htmlFor="password" className="text-lg mb-1">
                          Mật khẩu
                        </label>
                        <Input
                          {...input}
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Mật khẩu"
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
                  <div className="flex justify-end pt-2 pb-4 text-base">
                    <Link to="/">Quên mật khẩu?</Link>
                  </div>
                  <EButton
                    type="primary"
                    htmlType="submit"
                    className="w-full"
                    onClick={handleSubmit}
                  >
                    <span className="text-lg">Đăng nhập</span>
                  </EButton>
                </form>
              )}
            />
            <hr className="mb-4 mt-6 h-px bg-gray-100" />
            <div className="text-lg flex justify-center items-center">
              <span>Chưa có tài khoản chuyên gia ?</span>
              <Link
                to={ROUTES.EXPERT_SIGNUP}
                className="text-pink-100 ml-5 font-semibold"
              >
                Đăng ký
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default LoginPage;
