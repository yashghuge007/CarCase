"use client";

import { FormEvent, useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ dynamicStyles }: { dynamicStyles: string }) => (
  <button type="submit" className={`-ml-4 z-10 ${dynamicStyles}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="search"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

   const updateSearchParams = (model: string, manufacturer: string) => {
     // Create a new URLSearchParams object using the current URL search parameters
     const searchParams = new URLSearchParams(window.location.search);

     // Update or delete the 'model' search parameter based on the 'model' value
     if (model) {
       searchParams.set("model", model);
     } else {
       searchParams.delete("model");
     }

     // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
     if (manufacturer) {
       searchParams.set("manufacturer", manufacturer);
     } else {
       searchParams.delete("manufacturer");
     }

     // Generate the new pathname with the updated search parameters
     const newPathname = `${
       window.location.pathname
     }?${searchParams.toString()}`;

     router.push(newPathname);
   };

  return (
    <form className="searchbar gap-5" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton dynamicStyles="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Polo GT"
          className="searchbar__input"
        />
        <SearchButton dynamicStyles="sm:hidden" />
      </div>
      <SearchButton dynamicStyles="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
