import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl,technos}) => {
  return (
    // <div>
    //   <div
    //     className="h-52 md:h-72 rounded-t-xl relative group"
    //     style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
    //   >
    //     <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
    //       <Link
    //         href={gitUrl}
    //         className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
    //       >
    //         <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
    //       </Link>
    //       <Link
    //         href={previewUrl}
    //         className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
    //       >
    //         <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
    //     <h5 className="text-xl font-semibold mb-2">{title}</h5>
    //     <p className="text-[#ADB7BE]">{description}</p>
    //   </div>
    // </div>
    <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 max-w-7xl mx-auto w-full hover:cursor-pointer">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-900 min-h-[550px] lg:min-h-[400px]"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {title}{" "}
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            {description}
          </p>
          <div className="flex flex-row">

          </div>
          <div className="flex flex-row">
          <Link
            href={gitUrl}
            className="h-10 w-10 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          </div>
          <div>
            <div className="flex flex-row gap-2 flex-wrap mr-2">
        {technos.map((techno) => (
          
            <p className="flex flex-row rounded-lg bg-slate-500 p-2">
              {techno}
            </p>
        ))}
        </div>
      </div>
        </div>
        <Image
          src={imgUrl}
          width={500}
          height={400}
          alt="linear demo image"
          className="absolute -right-3 lg:-right-[10%] lg:-bot-3  grayscale-2 filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
};

export default ProjectCard;
