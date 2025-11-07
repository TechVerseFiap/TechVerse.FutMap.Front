import Header from "../../components/Header";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import BottomNavigationBar from "../../components/BottomNavigationBar"
import { Outlet } from "react-router";

export default function MainLayout() {
  useScrollToTop();
  return (
    <>
      <Header />
      <div className="relative overflow-hidden flex-1">
        <Outlet />
      </div>
      <BottomNavigationBar />
    </>
  )
}