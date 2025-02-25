import { ReactNode } from "react";

interface StatsInfoCardProps {
    icon: ReactNode;
    label: string;
    value: string;
    color?: string;
}

const StatsInfoCard = ({ icon, label, value, color }: StatsInfoCardProps) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-blue-400/10 border border-blue-200/50 z-10">
        <div className={`flex items-center justify-center w-12 h-12 text-[26px] drop-shadow-xl text-white rounded-full ${color}`}>
            {icon}
        </div>
        <div>
            <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
            <span className="text-[20px] font-semibold text-green-600">{value}</span>
        </div>
    </div>
  )
}
export default StatsInfoCard