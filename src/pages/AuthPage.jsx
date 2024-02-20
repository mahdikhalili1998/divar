import React, { useState } from "react";
import Sendotp from "../components/Otp/Sendotp";
import Checkotp from "../components/Otp/Checkotp";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  return (
    <>
      {step === 1 && (
        <Sendotp mobile={mobile} setMobile={setMobile} setStep={setStep} />
      )}
      {step === 2 && (
        <Checkotp
          code={code}
          mobile={mobile}
          setCode={setCode}
          setStep={setStep}
        />
      )}
    </>
  );
}

export default AuthPage;
