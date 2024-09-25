import React from "react";
import { Button, Image } from "@nextui-org/react";

function About() {
  return (
    <div className="w-full h-[500px] flex items-center flex-col justify-center">
      <h1 className="tracking-tighter text-4xl font-bold mb-12">About me.</h1>

      <div className="flex items-center justify-center gap-16">
        <div className="w-[50%] flex items-center justify-end">
          <Image
            width={400}
            height={390}
            isBlurred
            className="ml-8"
            alt="NextUI hero Image with delay"
            src="https://images.unsplash.com/photo-1482961674540-0b0e8363a005?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <div className="w-[50%]">
          <div className="w-[440px]">
            <h1 className="tracking-tighter leading-tight text-2xl font-bold mb-4">
              Full Stack Web Developer ( MERN Stack & Next.js )
            </h1>

            <p className="text-md">
              I use the MERN Stack and Next.js to create websites and apps that
              are easy to use and visually appealing. I aim to build
              user-friendly & modern web applications. <br />
              <br /> I have a good understanding of HTML, CSS, JavaScript, and
              React. I'm currently learning more about backend development,
              databases, and other tools to improve my skills and become a
              well-rounded developer. <br />
              <br /> I enjoy creating different kinds of projects, working with
              teams, and exploring new technologies. learn from every experience, and build useful websites
              and apps that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
