import React from "react";
import classnames from "classnames";
import { ButtonGlobalStyles } from "../Button/Styled";
import { Link } from "@reach/router";

export interface LinkButtonProps {
  type: "secondary" | "primary";
  to: string;
  children: any;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  block?: boolean;
  color?: string;
}

const LinkButton = ({
  type = "primary",
  children,
  className = "",
  loading = false,
  disabled = false,
  block = false,
  color = "",
  to = "",
}: LinkButtonProps) => {
  return (
    <Link to={to}>
      <div
        className={classnames(`btn btn--${type}`, {
          "btn--block": block,
          "btn--loading": loading,
          "btn--disabled": disabled,
          [`bg-${color}`]: color,
          [className]: className,
        })}
      >
        <ButtonGlobalStyles />
        {children}
      </div>
    </Link>
  );
};

export default LinkButton;
