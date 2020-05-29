import React from "react";
import classnames from "classnames";
import { ButtonGlobalStyles } from "./Styled";

export interface ButtonProps {
  type: "secondary" | "primary";
  onClick: () => void;
  children: any;
  htmlType?: "submit" | "button" | "reset";
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  block?: boolean;
  color?: string;
}

const EButton = ({
  type = "primary",
  children,
  onClick,
  className = "",
  loading = false,
  disabled = false,
  block = false,
  color = "",
  htmlType = "button"
}: ButtonProps) => {
  return (
    <button
      className={classnames(`btn btn--${type}`, {
        "btn--block": block,
        "btn--loading": loading,
        [`bg-${color}`]: color,
        [className]: className
      })}
      disabled={disabled}
      onClick={onClick}
      type={htmlType}
    >
      <ButtonGlobalStyles />
      {children}
    </button>
  );
};

export default EButton;
