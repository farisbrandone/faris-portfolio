import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

function Hero() {
  return (
    <div className="pb-10 pt-10">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-40 left-full h-[80vh] w-[50vw] "
          fill="blue"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="flex items-center justify-center md:absolute md:top-[230px] md:left-[190px] "></div>
      <div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]" />
        </div>
      </div>
      <div className="flex justify-center relative my-5 sm:my-8 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <Image
            src="/mon_image.jpeg"
            width={200}
            height={200}
            alt="image profil"
            className="bg-slate-100 z-50 rounded-full"
          />
          {/*<h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic web magic with next js
          </h2>*/}
          <TextGenerateEffect
            className="text-center text-[20px]  sm:[text-25px] lg:text-[30px] xl:text-[40px]"
            words=" Hi, I'm Faris KOUETESSA, a Fullstack Developer based in
            Cameroon"
          />
          <p className="text-center md:tracking-wider mb-2 sm:mb-3 text-[14px] md:text-lg lg:text-2xl">
            My passion is coding, and I don&apos;t count the hours when I&apos;m
            working because I&apos;m having fun.
          </p>
          <a href="#about">
            <MagicButton
              title="Show my works"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
