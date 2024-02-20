import React from "react";
import { sendOtp } from "../../services/otp";

function Sendotp({ mobile, setMobile, setStep }) {
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
    <form onSubmit={submitHandler}>
      <h4>وارد کردن شماره</h4>
      <p>برای استفاده از امکانات دیوار بیا و با شمارت عضو بشو ...</p>
      <div>
        <label htmlFor="number">شماره تلفن : </label>
        <input
          type="number"
          value={mobile}
          placeholder="شماره موبایل را بزن "
          id="number"
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <button type="submit">ارسال</button>
    </form>
  );
}

export default Sendotp;
