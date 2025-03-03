import React from "react";

export default function Btn({
  label,
  handleClick,
  classCSS,
}: {
  label: string;
  handleClick: () => void;
  classCSS?: string;
}) {
  return (
    <button
      type="submit"
      onClick={handleClick}
      className={`py-2 px-5 rounded border ${classCSS}`}
    >
      {label}
    </button>
  );
}
