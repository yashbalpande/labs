// components/GrowthEngine.tsx
import { FaRocket, FaUsers, FaHandshake, FaChartLine, FaLightbulb } from "react-icons/fa";

export default function GrowthEngine() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-5 gap-4 relative">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#4DD1F4] p-4 rounded-full text-white text-3xl">
            <FaLightbulb />
          </div>
          <p className="mt-2 font-semibold">Idea</p>
          <p className="text-sm text-gray-600">Generate ideas for growth</p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#4DD1F4] p-4 rounded-full text-white text-3xl">
            <FaUsers />
          </div>
          <p className="mt-2 font-semibold">Audience</p>
          <p className="text-sm text-gray-600">Find your target customers</p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#4DD1F4] p-4 rounded-full text-white text-3xl">
            <FaHandshake />
          </div>
          <p className="mt-2 font-semibold">Engagement</p>
          <p className="text-sm text-gray-600">Build strong connections</p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#4DD1F4] p-4 rounded-full text-white text-3xl">
            <FaRocket />
          </div>
          <p className="mt-2 font-semibold">Launch</p>
          <p className="text-sm text-gray-600">Release your product</p>
        </div>

        {/* Step 5 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#4DD1F4] p-4 rounded-full text-white text-3xl">
            <FaChartLine />
          </div>
          <p className="mt-2 font-semibold">Growth</p>
          <p className="text-sm text-gray-600">Scale your success</p>
        </div>

        {/* Connecting Lines */}
        <svg
          className="absolute top-10 left-0 w-full h-10 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="10%" y1="50%" x2="30%" y2="50%" stroke="#4DD1F4" strokeWidth="2" />
          <line x1="30%" y1="50%" x2="50%" y2="50%" stroke="#4DD1F4" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="70%" y2="50%" stroke="#4DD1F4" strokeWidth="2" />
          <line x1="70%" y1="50%" x2="90%" y2="50%" stroke="#4DD1F4" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
