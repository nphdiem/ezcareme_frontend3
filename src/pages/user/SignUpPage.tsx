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
import isEmail from "validator/lib/isEmail";
import ROUTES from "constants/routes";

export interface RegisterFormValues {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

const Container = styled.div`
  ${tw`mx-auto flex flex-wrap`}
  max-width: 1000px;
`;

function onValidate(values: RegisterFormValues) {
  const errors: {
    name?: string;
    email?: string;
    password?: string;
    passwordConfirm?: string;
  } = {};
  if (!values.email) {
    errors.email = "Hãy nhập email";
  } else if (!isEmail(values.email)) {
    errors.email = "Email không hợp lệ";
  }
  if (!values.name) {
    errors.name = "Hãy nhập họ và tên";
  }
  if (!values.password) {
    errors.password = "Hãy nhập mật khẩu";
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Hãy nhập lại mật khẩu";
  } else if (values.password && values.passwordConfirm !== values.password) {
    errors.passwordConfirm = "Mật khẩu xác nhận không chính xác";
  }
  return errors;
}

function SignUpPage() {
  function onSubmit(values: RegisterFormValues) {
    console.log(values);
    console.log("submitting ...");
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <section className="flex-grow py-10 md:py-24 border-t border-b border-gray-100">
        <Container>
          <div className="w-full md:w-1/2 px-4 md:px-6 lg:px-10 pb-6">
            <h1 className="font-semibold text-40px text-pink-100">Đăng ký</h1>
            <div className="mt-10 text-xl">
              <span className="font-bold text-pink-100">"ezcareme"</span> xin
              chào !
            </div>
            <div className="text-xl leading-10 mt-10">
              Tạo tài khoản nhanh chóng và bắt đầu tìm chuyên gia tham vấn phù
              hợp với bạn!
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-6 lg:px-10">
            <Form
              onSubmit={onSubmit}
              initialValues={{
                name: "",
                email: "",
                password: "",
                passwordConfirm: "",
              }}
              validate={onValidate}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="name">
                    {({ input, meta }) => (
                      <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="text-lg mb-1">
                          Họ và tên của bạn
                        </label>
                        <Input
                          {...input}
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Họ và tên"
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
                      <div className="flex flex-col mb-4">
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
                  <Field name="passwordConfirm">
                    {({ input, meta }) => (
                      <div className="flex flex-col">
                        <label
                          htmlFor="passwordConfirm"
                          className="text-lg mb-1"
                        >
                          Xác nhận mật khẩu
                        </label>
                        <Input
                          {...input}
                          type="password"
                          id="passwordConfirm"
                          name="passwordConfirm"
                          placeholder="Xác nhận mật khẩu"
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
                  <div className="py-4">
                    Bằng cách nhấp vào Đăng ký, bạn đồng ý với{" "}
                    <span className="font-semibold">Điều khoản sử dụng</span>,{" "}
                    <span className="font-semibold">Chính sách bảo mật</span> và{" "}
                    <span className="font-semibold">Chính sách Cookie</span> của
                    <span className="font-semibold text-pink-100">
                      “ezcareme”
                    </span>
                    .
                  </div>
                  <EButton
                    type="primary"
                    htmlType="submit"
                    className="w-full"
                    onClick={handleSubmit}
                  >
                    <span className="text-lg">Đăng ký</span>
                  </EButton>
                </form>
              )}
            />
            <hr className="mb-4 mt-6 h-px bg-gray-100" />
            <div className="text-lg flex justify-center items-center">
              <span>Đã có tài khoản ?</span>
              <Link
                to={ROUTES.USER_LOGIN}
                className="text-pink-100 ml-5 font-semibold"
              >
                Đăng nhập
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default SignUpPage;
