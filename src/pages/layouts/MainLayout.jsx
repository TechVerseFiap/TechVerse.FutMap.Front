import BottomNavigationBar from "../../components/BottomNavigationBar";
import Header from "../../components/Header";
import { Outlet } from "react-router";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import Map from "../../components/Map";

export default function MainLayout() {
  useScrollToTop();

  return (
    <div className="relative min-h-screen w-full">
      <Map />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <Outlet />
        <BottomNavigationBar />
      </div>
    </div>
  );
}
