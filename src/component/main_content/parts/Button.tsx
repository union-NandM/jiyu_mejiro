import React, { ReactNode } from "react";

type Props = {
  clickFunc: () => void;
  children?: ReactNode;
  additionalStyle?: string;
  size?: "large" | "small" | "grid";
};
const btnSize = {
  large: "w-40 h-20 text-xl",
  small: "w-32 h-16 text-lg",
  grid: "w-full h-20 text-xl",
};
const Button = ({
  clickFunc,
  children,
  additionalStyle = "",
  size = "large",
}: Props) => {
  return (
    <button
      onClick={clickFunc}
      className={`
        block
        ${btnSize[size]}
        text-center
        mx-auto
        cursor-pointer
        border
        rounded
        border-blue-400
        select-none
        no-tap-highlighting
        ${additionalStyle}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
