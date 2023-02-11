import Image from "next/image";
import React from "react";
import Button from "./Button";

function Landing() {
  return (
    <section className="sticky top-0 mx-auto flex h-screen md:h-[70vh] lg:h-screen items-center justify-between px-10 lg:w-[1330px] lg:px-16">
      <div>
        <h1 className="mb-5 space-y-4 text-5xl md:text-5xl lg:text-7xl">
          <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent ">
            Powered
          </span>
          <span className="block">By Intellect</span>
          <span className="block">Driven By Values</span>
        </h1>
        <Button title="Buy now" />
        <a href="#" className="link ml-6 text-base lg:text-lg">
          Learn More
        </a>
      </div>

      <div className="relative hidden lg:block lg:h-[650px] lg:w-[550px] ">
        <Image
          src="/assets/iphone-nobg.png"
          alt="iphone-image"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default Landing;
