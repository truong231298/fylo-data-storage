import React, { useState } from "react";
import iconDocument from "/images/icon-document.svg";
import iconFolder from "/images/icon-folder.svg";
import iconUpload from "/images/icon-upload.svg";
import logo from "/images/logo.svg";

const App = () => {
  const [storage, setStorage] = useState(37);
  const totalStorage = 1000;

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue)) {
      setStorage(newValue);
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-VeryDarkBlue bg-bg-mobile sm:bg-bg-Desktop sm:bg-no-repeat sm:bg-bottom bg-cover sm:bg-auto">
      <section className="flex flex-col sm:flex-row gap-4 sm:-translate-y-[70%]">
        {/* icon part */}
        <div className="flex flex-col w-72 gap-4 p-6 bg-DarkBlue rounded-lg rounded-tr-[40%]">
          <img src={logo} alt="Logo" className="w-28" />
          <div className="flex flex-row gap-2 py-2">
            {[iconFolder, iconDocument, iconUpload].map((icon, index) => (
              <span key={index} className="p-2 rounded-lg bg-VeryDarkBlue">
                <img src={icon} alt={`Icon ${index}`} />
              </span>
            ))}
          </div>
        </div>
        {/* input part */}
        <div className="bg-DarkBlue flex flex-col gap-2 p-4 rounded-lg w-72 sm:w-96 sm:h-32 sm:mt-10">
          <span className="hidden sm:block absolute bg-PaleBlue w-36 rounded-lg p-4 ml-52 -translate-y-[80%]">
            <h1 className="inline-flex text-GrayishBlue items-center gap-1 text-sm">
              <p className="text-2xl font-semibold text-VeryDarkBlue">
                {totalStorage - storage}
              </p>{" "}
              GB LEFT
            </h1>
          </span>
          <h1 className="inline-flex sm:gap-1 text-GrayishBlue text-sm">
            You’ve used{" "}
            <p className="font-semibold text-PaleBlue">{storage} GB</p> of your
            storage
          </h1>
          <span>
            <input
              type="range"
              className="w-full rounded-full appearance-none bg-gradient-to-r from-custom-yellow to-custom-pink"
              min={0}
              max={totalStorage}
              value={storage}
              onChange={handleChange}
            />
          </span>
          <span className="flex justify-between font-medium text-PaleBlue mb-6">
            <h1>0GB</h1>
            <p>{totalStorage}GB</p>
          </span>
          {/* absolute part mobile*/}
          <span className="absolute sm:hidden bg-PaleBlue w-36 rounded-lg p-4 mx-16 my-24">
            <h1 className="inline-flex text-GrayishBlue items-center gap-1 text-sm">
              <p className="text-2xl font-semibold text-VeryDarkBlue">
                {totalStorage - storage}
              </p>{" "}
              GB LEFT
            </h1>
          </span>
        </div>
      </section>
    </main>
  );
};

export default App;
