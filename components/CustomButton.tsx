"use client";

import { CustomButtonProps } from "@/types";

function CustomButton({
  title,
  containerStyle,
  handleClick,
  btnType,
}: CustomButtonProps) {
  return (
    <button
      className={`custom-btn ${containerStyle}`}
      type={btnType || "button"}
      disabled={false}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomButton;
