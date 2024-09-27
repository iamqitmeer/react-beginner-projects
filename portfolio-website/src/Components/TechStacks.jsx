import React from "react";
import { Button, Image, Tooltip } from "@nextui-org/react";

function TechStacks() {
  return (
    <div className="w-full h-[700px] flex items-center flex-col justify-center border-b">
      <h1 className="tracking-tighter text-4xl font-bold mb-12 mt-[140px]">
        Tech Stacks.
      </h1>

      <div className="flex items-center flex-wrap justify-center w-[1100px] gap-16">
        <Tooltip showArrow={true} color="primary" content="HTML">
          <div className="hover:bg-blue-50 border-1 hover:border-blue-500 p-8 rounded-2xl cursor-pointer transition-all">
            <i className="ri-html5-fill text-8xl"></i>
          </div>
        </Tooltip>
        <Tooltip showArrow={true} color="primary" content="CSS">
          <div className="hover:bg-blue-50 border-1 hover:border-blue-500 transition-all  p-8 rounded-2xl cursor-pointer">
            <i className="ri-css3-fill text-8xl"></i>
          </div>
        </Tooltip>
        <Tooltip showArrow={true} color="primary" content="Tailwind">
          <div className="hover:bg-blue-50 border-1 hover:border-blue-500 transition-all  p-8 rounded-2xl cursor-pointer">
            <i className="ri-tailwind-css-fill text-8xl"></i>
          </div>
        </Tooltip>
        <Tooltip showArrow={true} color="primary" content="JavaScript">
          <div className="hover:bg-blue-50 border-1 hover:border-blue-500 transition-all  p-8 rounded-2xl cursor-pointer">
            <i className="ri-javascript-fill text-8xl"></i>
          </div>
        </Tooltip>
        <Tooltip showArrow={true} color="primary" content="React.js">
          <div className="hover:bg-blue-50 border-1 hover:border-blue-500 transition-all  p-8 rounded-2xl cursor-pointer">
            <i className="ri-reactjs-line text-8xl"></i>
          </div>
        </Tooltip>
        <Tooltip showArrow={true} color="primary" content="Next.js">
          <div className="hover:bg-blue-50 border-1 hover:border-blue-500 transition-all  p-8 rounded-2xl cursor-pointer">
            <i className="ri-nextjs-fill text-8xl"></i>
          </div>
        </Tooltip>
        <Tooltip showArrow={true} color="primary" content="Node.js">
          <div className="hover:bg-blue-50 border-1 hover:border-blue-500 transition-all  p-8 rounded-2xl cursor-pointer">
            <i className="ri-nodejs-line text-8xl"></i>
          </div>
        </Tooltip>
        <Tooltip showArrow={true} color="primary" content="MongoDB">
          <div className="hover:bg-blue-50 border-1 hover:border-blue-500 transition-all  p-8 rounded-2xl cursor-pointer">
            <i className="ri-database-2-fill text-8xl"></i>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default TechStacks;
