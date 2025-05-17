"use client";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradiantBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "lottie-react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Link from "next/link";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("farisbrandone@yahoo.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        `row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex ${
          id === 6 && "p-2"
        }   flex-col space-y-2`,
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-48`}>
        <div className="w-full h-full absolute ">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover, object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl w-full" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            `group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-6`
          )}
        >
          <div
            className={`font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10`}
          >
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex flex-col items-center gap-1 lg:gap-3 mt-2  ">
              <div className="flex flex-row flex-wrap justify-around w-full">
                {["React.js", "Angular", "Next.js", "TypeScript"].map(
                  (item) => (
                    <span
                      key={item}
                      className="p-1 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-row flex-wrap justify-around w-full">
                {["Node.js", "Goland", "Java", "Spring"].map((item) => (
                  <span
                    key={item}
                    className="py-1 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-row flex-wrap justify-around  w-full ">
                {["Docker", "Kubernete", "Docker Swarm"].map((item) => (
                  <span
                    key={item}
                    className="p-1 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-row justify-around  w-full">
                {["Posgresql", "MongoDb", "MySQL"].map((item) => (
                  <span
                    key={item}
                    className="p-1 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative ">
              <div
                className={`absolute bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                {
                  <Lottie
                    loop={copied}
                    autoplay={copied}
                    animationData={animationData}
                    rendererSettings={{
                      preserveAspectRatio: "xMidYMid slice",
                    }}
                    height={200}
                    width={400}
                  />
                }
              </div>
              <div className="flex items-center justify-between gap-1 w-full">
                <MagicButton
                  title={copied ? "Email copied" : "Copy my email"}
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="!bg-[#161a31]"
                  handleClick={handleCopy}
                />
                <Link
                  className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none  md:w-60 md:mt-10"
                  href="/FARIS-CV.pdf"
                  download={true}
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span
                    className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-2 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
                  >
                    {" "}
                    Download my resume
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
