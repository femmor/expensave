import { ReactNode } from "react";
import all_transactions from "../../assets/images/all_transactions.jpg";
import { LuTrendingUpDown, LuWalletMinimal } from "react-icons/lu";
import StatsInfoCard from "../StatsInfoCard";

interface AuthLayoutProps {
  children?: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pb-12 pt-8">
        <div className="flex items-center">
          <LuWalletMinimal className="text-blue-500 mr-1" size={30} />
          <span className="font-light text-gray-500">Expen</span>
          <span className="text-blue-500 italic font-bold">Save</span>
        </div>
        {children}
      </div>

      <div className="hidden md:block w-[40vw] h-screen bg-blue-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        <div className="w-48 h-48 rounded-[40px] bg-blue-600 absolute -top-7 -left-8"></div>
        <div className="w-48 h-80 rounded-[40px] border-blue-300 border-[20px] absolute top-[28%] -right-8"></div>
        <div className="w-48 h-48 rounded-[40px] bg-blue-600 absolute -bottom-7 -left-8"></div>

        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track your income and expenses seamlessly"
            value="$430,000"
            color="bg-primary"
          />
        </div>

        <img
          src={all_transactions}
          alt="all_transactions"
          className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15 rounded-2xl"
        />
      </div>
    </div>
  );
};
export default AuthLayout;
