import React from "react";
import { checkOtp } from "services/otp";
import { cookie } from "util/cooki";
import { Navigate, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "services/user";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Checkotp({ code, setCode, mobile, setStep }) {
  const navigate = useNavigate();
  const { refetch } = useQuery(["user"], getUser);

  const submitHandler = async (e) => {
    e.preventDefault();
    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      cookie(response.data);
      navigate("/");
      refetch();
    }
    {
      error && console.log(error.response.data.message);
    }
  };

  return (
    <>
      <div className="w-full   flex items-center  gap-1 bg-slate-200 mb-3">
        <FaArrowRightLong className="mr-1" onClick={() => navigate(-1)} />
        <h4 className="my-1 ">ورود به حساب کاربری</h4>
      </div>
      <form onSubmit={submitHandler}>
        <h4 className="mb-2">کد تایید را وارد کنید</h4>
        <p className="text-sm text-slate-400 mb-3">
          لطفا کد تاییدی را که به شماره {mobile} پیامک شده را وارد کنید{" "}
        </p>
        <div className="mb-3">
          <input
            className="w-full rounded border-solid border-2 border-[#a62626] p-[.5rem] placeholder-shown:text-center"
            type="text"
            id="code"
            placeholder="کد تایید"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="text-sm mb-4">
          <Link className="text-red-600"> شرایط و قوانین استفاده </Link>
          <span> و </span>
          <Link className="text-red-600">سیایت نامه حریم خصوصی</Link>
          <span> دیوار را میپذیرم</span>
        </div>
        <div className="w-full text-left  ">
          <button
            className="  bg-[#a62626] text-white px-[1rem] py-[5px] rounded"
            type="submit"
          >
            ورود
          </button>
          <button
            className="  bg-[#a62626] text-white px-[1rem] py-[5px] rounded mr-[5px]"
            onClick={() => setStep(1)}
          >
            تغیر شماره موبایل
          </button>
        </div>
      </form>
    </>
  );
}

export default Checkotp;
