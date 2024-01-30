import { sendOtp } from "services/auth";

function SendOtpForm({ setAuthStep,  mobile,  setMobile }) {
    const submitHanlder=async(event)=>{
        event.preventDefault()
if(mobile.length!==11)return
const {response,error}=await sendOtp(mobile)
if(error)alert("در دریافت اطلاعات مشکلی پیش آمده است")
if(response)setAuthStep(2)

    }
    
  return (
    <form onSubmit={submitHanlder} style={{
      maxWidth:500,
      margin:"auto",
      display:"flex",
      flexDirection:"column",
      marginTop:100,
      border:"1px solid silver",
      borderRadius:5,
      padding:30
    }} >
      <p style={{
        fontSize:'1.1rem',
        fontWeight:"500",
        marginBottom:20
      }}>ورود به حساب کاربری</p>
      <span style={{
        color:"gray",
        fontSize:"0.8rem",
        marginBottom:20
      }}>برای استفاده از امکانات سایتء لطفا با شماره موبایل خود وارد شوید</span>
      <label htmlFor="input">وارد کردن شماره موبایل</label>
      <input style={{
        margin:"10px 0 20px",
        padding:5,
        border:"rpx solid silver",
        borderRadiusL:5
      }} type="text" id="input" placeholder="شماره موبایل" value={mobile} onChange={e=>setMobile(e.target.value)}/>
      <button style={{
        width:100,
        padding:"5px 10px",
        border:"none",
        backgroundColor:"#a62626",
        color:"#fff",
        borderRadius:5,
       cursor:"pointer"
      }} type="submit">ارسال کد تایید</button>
    </form>
  );
}

export default SendOtpForm;

