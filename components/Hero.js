import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md"; 

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-5">
          <p className="text-6xl font-bold">Make The Best Financial Decisions</p>
          <p >
            Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquot
            Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Port-titor.
          </p>
          <div className="flex items-center gap-5">
            <button className="btn btn-active rounded-none flex items-center gap-3 hover:bg-primary border-none">
              Get Started <BsArrowRight className="text-xl" />
            </button>
            <div className="flex items-center gap-3 cursor-pointer ">
              <MdSlowMotionVideo className="text-3xl" />
              <p className="text-xl font-medium">WatchVideo</p>
             
            </div>
          </div>
          <img className="h-[350px]" src="/assets/downhero.svg" alt="" />
        </div>
        <img src="/assets/hero.svg" alt="" />
        
      </div>
    </div>
  );
};

export default Hero;
