import React from "react";

export default function Btn({
  label,
  color,
  handleClick,
  classCSS,
}: {
  label: string;
  color: string;
  handleClick: () => void;
  classCSS?: string;
}) {
  return (
    <button
      type="submit"
      onClick={handleClick}
      className={`bg-${color}-800 py-2 px-5 rounded border border-${color}-800 text-white ${classCSS}`}
    >
      {label}
    </button>
  );
}
