import React from "react";

interface ButtonProps {
  icon?: React.ReactNode; // Untuk ikon opsional
  className?: string; // Custom class untuk styling tambahan
  text?: string;
}

function ButtonTextIcon({ icon, text, className = "" }: ButtonProps) {
  return (
    <button
      className={` h-8 border-none py-4 px-2 rounded-lg flex gap-2 items-center justify-center ${className}`}
    >
      {icon}
      <p className="text-[14px] text-white font-semibold">{text}</p>
    </button>
  );
}

export default ButtonTextIcon;
