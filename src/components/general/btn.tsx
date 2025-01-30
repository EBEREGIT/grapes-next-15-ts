import React from "react";

export default function Btn({
  label,
  color,
  handleClick,
}: {
  label: string;
  color: string;
  handleClick: () => void;
}) {
  return (
    <button
      type="submit"
      onClick={handleClick}
      className={`bg-${color}-800 py-2 px-5 rounded border border-${color}-800`}
    >
      {label}
    </button>
  );
}
