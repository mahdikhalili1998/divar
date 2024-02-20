import React from "react";

function Checkotp({ code, setCode, mobile, setStep }) {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ code, mobile });
  };
  return (
    <form onSubmit={submitHandler}>
      <h4>ورود به حساب کاربری</h4>
      <p>کد به شماره موبایل {mobile} پیامک شد</p>
      <div>
        <label htmlFor="code">وارد کردن کد : </label>
        <input
          type="number"
          id="code"
          placeholder="کد رو اینجا برن"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغیر شماره موبایل</button>
    </form>
  );
}

export default Checkotp;
