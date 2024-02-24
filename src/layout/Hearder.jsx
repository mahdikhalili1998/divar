import React from "react";
import { Link } from "react-router-dom";

function Hearder() {
  return (
    <div className="flex justify-between mx-2 my-1 pb-1 border-solid border-b-2  border-slate-200 ">
      <div className="flex gap-2">
        <img className="w-4" src="divar.svg" alt="divar-logo" />
        <div className="flex items-center">
          <img src="location.svg" alt="location-logo" />
          <span>تهران</span>
        </div>
      </div>
      <div className="flex gap-2">
        <Link to="/dashbord" className="flex items-center gap-[5px]">
          <img src="profile.svg" alt="profile-logo" />
          <span>دیوار من</span>
        </Link>
        <button className="bg-[#a62626] text-white py-[5px] px-1 rounded-md">
          ثبت آگهی
        </button>
      </div>
    </div>
  );
}

export default Hearder;
