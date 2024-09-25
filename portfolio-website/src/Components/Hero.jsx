import { Button, Image } from "@nextui-org/react";
import React from "react";

function Hero() {
  return (
    <div className="w-full h-[500px] flex items-center justify-center p-4 flex-wrap">
      <div className="mr-6">
        <h1 className="tracking-tighter leading-tight text-6xl font-bold">
          👋 Hey there,
        </h1>
        <h1 className="tracking-tighter leading-tight text-6xl font-bold">
          It's Qitmeer Raza.
        </h1>
        <p className="text-xl ">
          A Full Stack Web Developer. I work with MERN Stack  <br /> & Next.js to
          build websites and apps that look good <br /> and work well.
        </p>
        <div className="flex gap-4 mt-4 ">
          <Button
            className="text-lg px-8 py-8"
            variant="ghost"
            radius="full"
            color="primary"
          >
            View Projects <i class="ri-arrow-right-line"></i>
          </Button>
          <Button
            className="text-lg px-8 py-8"
            variant="shadow"
            radius="full"
            color="primary"
          >
            Download Resume
          </Button>
        </div>
      </div>
      <div>
        <Image
          width={420}
          height={320}
          className="ml-8"
          // shadow="lg"
          isBlurred
          alt="NextUI hero Image with delay"
          src="https://images.unsplash.com/photo-1482961674540-0b0e8363a005?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
}

export default Hero;
