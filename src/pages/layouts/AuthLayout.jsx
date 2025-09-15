import { Outlet } from "react-router";
import logo from "/Logo-Vertical-Dark.png";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export default function AuthLayout() {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col bg-(--primary-color)">
      <div className="flex items-center justify-center pt-6 pb-20">
        <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-md">
          <img
            src={logo}
            alt="FutMap Logo"
            className="w-28 h-28 object-contain"
          />
        </div>
      </div>

      <div className="flex-1 bg-gray-200 rounded-t-3xl p-4 shadow-inner relative flex justify-center">
        <div className="bg-gray-200 rounded-2xl shadow-lg p-6 -mt-16 w-full max-w-[750px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
