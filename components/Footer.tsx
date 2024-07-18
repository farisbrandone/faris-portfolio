"use client";

import { socialMedia } from "@/data";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import { IoCopyOutline } from "react-icons/io5";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("farisbrandone@yahoo.com");
    setCopied(true);
  };

  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-100"
        />
      </div>
      <div className="flex items-center flex-col lg:flex-row gap-2 lg:gap-1">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to accept me{" "}
          <span className="text-purple">to work with you</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how can help you achieve
          yours goals.
        </p>
        <MagicButton
          title={copied ? "Email copied" : "Copy my email"}
          icon={<IoCopyOutline />}
          position="left"
          otherClasses="!bg-[#161a31]"
          handleClick={handleCopy}
        />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Faris KOUETESSA
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <Link
              href={profile.link}
              key={profile.id}
              className="w-10 h-10 flex cursor-pointer justify-center items-center backdrop-filter backdrop-blur-xl saturate-100 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={profile.img}
                alt={profile.id.toString()}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
