import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
function Hearder() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className={`relative flex justify-between items-center mx-2 my-1 pb-1 border-solid border-b-2  border-slate-200`}
      >
        <img className="w-4" src="divar.svg" alt="divar-logo" />

        {show ? (
          <div className="flex absolute bg-slate-300 left-[-20px] top-[2px] w-[10rem] p-1 rounded-md justify-between">
            <div className="flex items-start justify-center flex-col gap-2">
              <Link
                to="/dashbord"
                onClick={() => setShow(false)}
                className="bg-[#a62626] text-white py-[5px] px-1 rounded-md"
              >
                ثبت آگهی
              </Link>
              <div className="flex items-center">
                <img src="location.svg" alt="location-logo" />
                <span>تهران</span>
              </div>
              <Link
                to="/dashbord"
                onClick={() => setShow(false)}
                className="flex items-center gap-[5px]"
              >
                <img src="profile.svg" alt="profile-logo" />
                <span>دیوار من</span>
              </Link>
            </div>
            <IoCloseCircle
              className="text-2xl text-[#a62626] "
              onClick={() => setShow(false)}
            />
          </div>
        ) : (
          <IoMenu className="text-2xl" onClick={() => setShow(true)} />
        )}
      </div>
    </>
  );
}

export default Hearder;
