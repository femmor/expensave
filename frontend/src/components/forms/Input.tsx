import { ChangeEvent, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

interface InputProps {
  id: string;
  type: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input = ({
  id,
  type,
  label,
  name,
  value,
  onChange,
  placeholder,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <label htmlFor={id} className="text-[13px] text-slate-800">
        {label}
      </label>
      <div className="input-box">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
        />
        {type === "password" && (
          <button type="button" onClick={toggleShowPassword}>
            {showPassword ? (
              <FaRegEyeSlash className="text-slate-400 cursor-pointer" />
            ) : (
              <FaRegEye className="text-blue-500 cursor-pointer" />
            )}
          </button>
        )}
      </div>
    </>
  );
};
export default Input;
