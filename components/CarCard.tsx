"use client";

import { CarCardProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useState } from "react";
import CarDetails from "./CarDetails";

function CarCard({ car }: CarCardProps) {
  const carRent = calculateCarRent(car.city_mpg, car.year);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{`${car.make} ${car.model}`}</h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">&#8377;</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative h-40 w-full my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          fill
          className="object-contain"
          alt="car-model"
          priority
        />
      </div>

      <div className="relative mt-2 flex w-full">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="Steering-Wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px] font-semibold">
              {car.transmission === "a" ? "AUTOMATIC" : "MANUAL"}
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Image src="/tire.svg" alt="driving tires" width={20} height={20} />
            <p className="text-[14px] font-semibold">
              {car.drive.toUpperCase()}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" alt="Mileage" width={20} height={20} />
            <span className="flex gap-2">
              <span className=" flex flex-col text-[14px] font-semibold justify-center items-center">
                <p>City</p>
                <p>{Math.round(car.city_mpg * 0.425)} Km/L</p>
              </span>

              <span className=" flex flex-col text-[14px] font-semibold justify-center items-center">
                <p>Highway</p>
                <p>{Math.round(car.highway_mpg * 0.425)} Km/L</p>
              </span>
            </span>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="Details"
            containerStyle="w-full bg-primary-blue rounded-full py-16"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setModalIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={modalIsOpen}
        car={car}
        closeModal={() => setModalIsOpen(false)}
      />
    </div>
  );
}

export default CarCard;
