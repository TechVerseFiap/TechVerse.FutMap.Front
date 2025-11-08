import Header from "../../components/Header";
import { Outlet } from "react-router";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import BottomNavigationBar from "../../components/BottomNavigationBar";

export default function MainLayout() {
  useScrollToTop();

  return (
    <>
      <Header />
      <Outlet />
      <BottomNavigationBar />
    </>
  )
}