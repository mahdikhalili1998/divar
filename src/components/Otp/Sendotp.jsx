import React from "react";
import { sendOtp } from "services/otp";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

function Sendotp({ mobile, setMobile, setStep }) {
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (mobile.length !== 11) return;
    const { response, error } = await sendOtp(mobile);
    console.log({ response, error });
    {
      response && setStep(2);
    }
    {
      error && alert(error);
    }
  };
  return (
    <>
      <div className="w-full   flex items-center  gap-1 bg-slate-200 mb-3">
        <FaArrowRightLong className="mr-1" onClick={() => navigate(-1)} />
        <h4 className="my-1 ">ورود به حساب کاربری</h4>
      </div>
      <form onSubmit={submitHandler}>
        <h4 className="mb-2">شماره موبایل خود را وارد کنید </h4>
        <p className="text-sm text-slate-400 mb-3">
          برای استفاده از امکانات دیوار , لطفا شماره موبایل خود را وارد کنید .
          کد تایید به این شماره پیامک خواهد شد
        </p>
        <div className="mb-3 ">
          <input
            className="w-full rounded border-solid border-2 border-[#a62626] p-[.5rem] placeholder-shown:text-center"
            type="text"
            value={mobile}
            placeholder="09xx xxx xxxx"
            id="number"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="text-sm mb-4">
          <Link className="text-red-600"> شرایط و قوانین استفاده </Link>
          <span> و </span>
          <Link className="text-red-600">سیایت نامه حریم خصوصی</Link>
          <span> دیوار را میپذیرم</span>
        </div>
        <div className="w-full text-left">
          <button
            className="  bg-[#a62626] text-white px-[1rem] py-[5px] rounded"
            type="submit"
          >
            بعدی
          </button>
        </div>
      </form>
    </>
  );
}

export default Sendotp;
