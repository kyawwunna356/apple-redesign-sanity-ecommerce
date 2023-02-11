import React from "react";

interface ButtonProps {
  title: string | React.ReactNode;
  loading?: boolean;
  width?: string;
  onClick?: () => void;
}

function Button({ title, loading, width, onClick}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`ease w-${width} rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 px-4 py-2 text-center text-base font-semibold text-white transition duration-300 hover:from-purple-600 hover:to-pink-600 lg:px-6 lg:py-3 lg:text-[18px]`}
    >
      {loading ? "loading..." : title}
    </button>
  );
}

export default Button;
