import { useState } from "react";
import SendOtpForm from "components/template/SendOtpForm";
import CheckOtpForm from "components/template/CheckOtpForm";

const AuthPage = () => {
  const [authStep, setAuthStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  return (
    <div>
      {authStep === 1 && (
        <SendOtpForm
          setAuthStep={setAuthStep}
          mobile={mobile}
          setMobile={setMobile}
        />
      )}
      {authStep === 2 && <CheckOtpForm code={code} setCode={setCode} mobile={mobile} setAuthStep={setAuthStep} />}
    </div>
  );
};


export default AuthPage;