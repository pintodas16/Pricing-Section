import { useState } from "react";

function Cards() {
  const [activeCard, setActiveCard] = useState("pro");
  const handleActive = (id) => {
    setActiveCard(id);
  };
  console.log(activeCard);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 md:px-8 gap-10 md:gap-6 ">
      <div
        id="free"
        className={`p-8 border ${
          activeCard === "free" ? "bg-[#724FD8] text-[#fff] " : "text-[#000]"
        }`}
        onClick={() => handleActive("free")}
      >
        {/* <!-- title  --> */}
        <h5 className="font-satoshi font-medium  text-4xl  pb-8">Free</h5>
        <p
          className={` font-satoshi font-normal ${
            activeCard === "free" ? "text-[#fff]" : "text-[#5A5A5A]"
          } `}
        >
          Our software allows you to create graphics instantly. It&apos;s free
          and easy to use.
        </p>

        <p className="py-8">
          <span className="text-5xl font-satoshi font-bold">$0 </span>
          <span className="font-satoshi font-normal text-base">/month</span>
        </p>

        <button
          className={`w-full  px-7 py-3.5  font-bold text-base mb-8  ${
            activeCard === "free"
              ? "text-[#724FD8] bg-[#fff]"
              : "bg-[#724FD8] text-[#fff]"
          }`}
        >
          Get free
        </button>

        {/* <!-- features  --> */}

        <ul
          className={`${
            activeCard === "free" ? "text-[#fff]" : "text-[#5A5A5A]"
          }`}
        >
          <li className="flex gap-3">
            <span className="">
              <i className="fa-solid fa-check"></i>
            </span>
            <p className=" font-satoshi font-normal text-base">
              10K+ design templates
            </p>
          </li>
          <li className="flex gap-3">
            <span className="">
              <i className="fa-solid fa-check"></i>
            </span>
            <p className=" font-satoshi font-normal text-base">
              10K+ creative assets
            </p>
          </li>
          <li className="flex gap-3">
            <span className="">
              <i className="fa-solid fa-check"></i>
            </span>
            <p className=" font-satoshi font-normal text-base">
              Brand Kit with colors, logos, and fonts
            </p>
          </li>
        </ul>
      </div>
      {/* <!-- single card  --> */}
      <div
        id="pro"
        className={`p-8 border ${
          activeCard === "pro" ? "bg-[#724FD8] text-[#fff] " : "text-[#000]"
        }`}
        onClick={() => handleActive("pro")}
      >
        {/* <!-- title  --> */}
        <h5 className="font-satoshi font-medium  text-4xl  pb-8">Pro+</h5>
        <p
          className={` font-satoshi font-normal ${
            activeCard === "pro" ? "text-[#fff]" : "text-[#5A5A5A]"
          } `}
        >
          Our tools are easy to use and will help you create a professional,
          beautiful design quickly.
        </p>

        <p className="py-8 ">
          <span className="text-5xl font-satoshi font-bold">$5 </span>
          <span className="font-satoshi font-normal text-base">/month</span>
        </p>

        <button
          className={`w-full  px-7 py-3.5 font-bold text-base mb-8  ${
            activeCard === "pro"
              ? "text-[#724FD8] bg-[#fff]"
              : "bg-[#724FD8] text-[#fff]"
          } `}
        >
          Get Pro+
        </button>

        {/* <!-- features  --> */}

        <ul
          className={`${
            activeCard === "pro" ? "text-[#fff]" : "text-[#5A5A5A]"
          }`}
        >
          <li className="flex gap-3">
            <span className="">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className=" font-satoshi font-normal text-base">
              50K+ design templates
            </span>
          </li>
          <li className="flex gap-3">
            <span className="">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className=" font-satoshi font-normal text-base">
              100K+ design templates
            </span>
          </li>
          <li className="flex gap-3">
            <span className="">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className="font-satoshi font-normal text-base">
              Brand Kit with colors, logos, and fonts
            </span>
          </li>
          <li className="flex gap-3">
            <span className="">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className=" font-satoshi font-normal text-base">
              Background removal feature
            </span>
          </li>
          <li className="flex gap-3">
            <span className="">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className=" font-satoshi font-normal text-base">
              10 GB storage for files and projects
            </span>
          </li>
        </ul>
      </div>
      {/* <!-- single card  --> */}
      <div
        id="business"
        className={`p-8 border ${
          activeCard === "business"
            ? "bg-[#724FD8] text-[#fff] "
            : "text-[#000]"
        }`}
        onClick={() => handleActive("business")}
      >
        {/* <!-- title  --> */}
        <h5 className="font-satoshi font-medium  text-4xl  pb-8">Business</h5>
        <p
          className={` font-satoshi font-normal ${
            activeCard === "business" ? "text-[#fff]" : "text-[#5A5A5A]"
          } `}
        >
          You can create beautiful designs by using our powerful and simple
          design tools.
        </p>

        <p className="py-8">
          <span className="text-5xl font-satoshi font-bold">$9 </span>
          <span className="font-satoshi font-normal text-base">/month</span>
        </p>

        <button
          className={`w-full ${
            activeCard === "business"
              ? "text-[#724FD8] bg-[#fff]"
              : "bg-[#724FD8] text-[#fff]"
          } font-bold text-basepx-7 py-3.5  mb-8`}
        >
          Get Business
        </button>

        {/* <!-- features  --> */}

        <ul
          className={`${
            activeCard === "business" ? "text-[#fff]" : "text-[#5A5A5A]"
          }`}
        >
          <li className="flex gap-3">
            <span className="">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className=" font-satoshi font-normal text-base">
              100K+ design templates
            </span>
          </li>
          <li className="flex gap-3">
            <span className="">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className=" font-satoshi font-normal text-base">
              1M+ design templates
            </span>
          </li>
          <li className="flex gap-3">
            <span className="">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className=" font-satoshi font-normal text-base">
              Brand Kit with colors, logos, and fonts
            </span>
          </li>
          <li className="flex gap-3">
            <span className="">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className=" font-satoshi font-normal text-base">
              Background removal feature
            </span>
          </li>
          <li className="flex gap-3">
            <span className="">
              <i className="fa-solid fa-check"></i>
            </span>
            <span className=" font-satoshi font-normal text-base">
              15 GB storage for files and projects
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cards;
