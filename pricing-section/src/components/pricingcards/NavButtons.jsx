import { useState } from "react";
import { Link } from "react-router-dom";
function NavButtons() {
  const [active, setActive] = useState("yearly");
  const handleActive = (status) => {
    setActive(status);
  };

  return (
    <div className=" my-8 ">
      <div className="flex justify-center items-center">
        <div className="flex items-center p-1 bg-[rgb(238,237,240)] rounded-full">
          <Link
            to="/monthly"
            onClick={() => handleActive("monthly")}
            className={`px-7 py-3   rounded-full  font-satoshi text-sm text-center font-medium ${
              active === "monthly"
                ? "bg-[#000000] text-[#FFFFFF]"
                : "bg-[#EEEDF0] text-[#000000]"
            } `}
          >
            Monthly
          </Link>
          <Link
            to="/yearly"
            onClick={() => handleActive("yearly")}
            className={`px-7 py-3   rounded-full  font-satoshi text-sm text-center font-medium ${
              active === "yearly"
                ? "bg-[#000000] text-[#FFFFFF]"
                : "bg-[#EEEDF0] text-[#000000]"
            } `}
          >
            Yearly Save 50%
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavButtons;
