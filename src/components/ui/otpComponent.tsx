import React, {
  useState,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
} from "react";

interface OTPComponentProps {
  length: number;
  separatorIndex: number;
}

const OTPComponent: React.FC<OTPComponentProps> = ({
  length = 6,
  separatorIndex = 3,
}) => {
  const [otp, setOTP] = useState<string[]>(Array(length).fill(""));
  const otpInputs = useRef<HTMLInputElement[]>(Array(length).fill(undefined));

  console.log(length);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (value !== "" && index < length - 1 && otpInputs.current[index + 1]) {
        otpInputs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      otpInputs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      console.log("All inputs are filled:", otp.join("")); //You can handle an action once the OTP is filled here.
    }
  }, [otp]);

  return (
    <div>
      {otp.map((digit, index) => (
        <React.Fragment>
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyUp={(e) => handleKeyUp(e, index)}
            ref={(input) => {
              if (input && otpInputs.current) {
                otpInputs.current[index] = input;
                otpInputs.current = otpInputs.current.filter(
                  (item) => item !== undefined,
                );
              }
            }}
            className="aspect-square items-center rounded-md border border-neutral-400 bg-transparent text-center text-white focus-within:placeholder-transparent focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-[#d4d4d8] disabled:cursor-not-allowed disabled:opacity-50"
            style={{ width: "30px", marginRight: "5px" }}
          />
          {index === separatorIndex - 1 && index !== length - 1 && (
            <span
              style={{ marginRight: "5px" }}
              className="h-9 border-[0.3px] border-neutral-400"
            ></span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default OTPComponent;
