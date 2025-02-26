import React from "react";

interface ButtonProps {
  icon?: React.ReactNode; // Untuk ikon opsional
  className?: string; // Custom class untuk styling tambahan
}

function Button({ icon, className = "" }: ButtonProps) {
  return (
    <button
      className={` w-8 h-8 border py-4 px-2 rounded-lg flex items-center justify-center ${className}`}
    >
      {icon}
    </button>
  );
}

export default Button;
