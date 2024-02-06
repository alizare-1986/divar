import { useNavigate } from "react-router-dom";
import { checkOtp } from "services/auth";
import { setCookie } from "utils/cookie";

const CheckOtpForm = ({ mobile, setCode, code, setAuthStep }) => {
  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) return;
    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      setCookie(response.data);
      navigate("/");
      window.location.reload()
    }

    if (error) alert("مشکلی در دریافت کد پیش آمده است");
  };

  return (
    <form
      style={{
        maxWidth: 500,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        marginTop: 100,
        border: "1px solid silver",
        borderRadius: 5,
        padding: 30,
      }}
      onSubmit={submitHandler}
    >
      <p
        style={{
          fontSize: "1.1rem",
          fontWeight: "500",
          marginBottom: 20,
        }}
      >
        تایید کد دریافتی
      </p>
      <span
        style={{
          color: "gray",
          fontSize: "0.8rem",
          margin: 20,
        }}
      >
        کدپیامک شده به شماره *{mobile}* را وارد کنید{" "}
      </span>
      <label htmlFor="input">کد را وارد کنید</label>
      <input
        style={{
          margin: "10px 0 20px",
          padding: 5,
          border: "1px solid silver",
          borderRadius: 5,
        }}
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <button
          style={{
            width: 100,
            padding: "5px 10px",
            border: "none",
            backgroundColor: "#a62626",
            color: "#fff",
            borderRadius: 5,
            cursor: "pointer",
          }}
          type="submit"
        >
          ورود
        </button>
        <button
          style={{
            backgroundColor: "#fff",
            color: "#a62626",
            border: "1px solid silver",
            width: 150,

            borderRadius: 5,
          }}
          onClick={() => setAuthStep(1)}
        >
          تغییر شماره فعلی
        </button>
      </div>
    </form>
  );
};

export default CheckOtpForm;
