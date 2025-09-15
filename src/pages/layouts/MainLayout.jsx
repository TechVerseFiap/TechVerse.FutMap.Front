import BottomNavigationBar from "../../components/BottomNavigationBar";
import Header from "../../components/Header";
import { Outlet } from "react-router";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export default function MainLayout() {
    useScrollToTop();
    return (
        <>
            <Header />
            <Outlet />
            <BottomNavigationBar />
        </>
    );
}
