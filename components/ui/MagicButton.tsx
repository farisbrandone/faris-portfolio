import React from "react";

function MagicButton({
  name,
  title,
  icon,
  position,
  handleClick,
  handleClick2,
  otherClasses,
}: {
  name?: string;
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  handleClick2?: () => void;
  otherClasses?: string;
}) {
  return (
    <button
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10"
      onClick={name === "email" ? handleClick : handleClick2}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-2 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
}

export default MagicButton;
