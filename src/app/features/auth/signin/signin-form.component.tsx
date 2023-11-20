import Image from "next/image";
function SignIn() {
  return (
    <div className="flex flex-row bg-whtie-500 rounded ">
      <div className="bg-[#3F8CFF] rounded h-[870px] w-[940px]">
        <div className="flex flex-row gap-4 pt-[60px] pl-[94px]">
          <img src="/logo.ico" alt="Company Logo" width="80px" height="50px" />
          <h1 className="p-3 font-[700] text-[30px] font-sans">Woorkroom</h1>
        </div>
        <div className="pt-[60px] pl-[94px]">
          <h1 className="font-[700] text-[40px] font-sans">
            Your place to work <br /> Plan. Create. Control.
          </h1>
        </div>
        <div className="pt-[60px] pl-[94px]">
          <img src="/background.png " width={600} height={600} />
        </div>
      </div>
      <div className="bg-white p-20 rounded h-[870px] w-[940px]">
        <div className="pt-[115px] pl-[270px]">
          <h1 className="text-[#0A1629] font-sans font-[700] text-[22px] leading-[30px] h-[30px]">
            Sign In to Woorkroom
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
