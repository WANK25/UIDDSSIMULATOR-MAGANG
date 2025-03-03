import React from "react";

interface ButtonProps {
  icon?: React.ReactNode; // Untuk ikon opsional
  className?: string; // Custom class untuk styling tambahan
  text?: string;
}

function ButtonTextIcon({ icon, text, className = "" }: ButtonProps) {
  return (
    <button
      className={` h-8 border-none  px-2 rounded-lg flex gap-2 items-center justify-center ${className}`}
    >
      {icon}
      <p className=" text-white ">{text}</p>
    </button>
  );
}

export default ButtonTextIcon;
