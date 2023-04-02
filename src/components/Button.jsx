import React from "react";

function Button({ styles }) {
  return (
    <button
      type="button"
      className={`bg-blue-gradient rounded-[10px] py-4 px-6 font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  );
}

export default Button;
