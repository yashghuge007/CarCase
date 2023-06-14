"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

function HomepageBanner() {
  const handleScroll = () => {};
  return (
    <div className="HomepageBanner">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="HomepageBanner__title">
          Find, Book or Rent a Car -- quickly and easily!
        </h1>

        <p className="HomepageBanner__subtitle">
          Enhancing your car booking experience
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="HomepageBanner__image-container">
        <div className="HomepageBanner__image">
          <Image
            src="/HomepageBanner.png"
            alt="HomepageBanner"
            fill
            className="object-contain"
          />
        </div>
        <div className="HomepageBanner__image-overlay" />
      </div>
    </div>
  );
}

export default HomepageBanner;
