import BottomNavigationBar from "../components/BottomNavigationBar";
import Header from "../components/Header";
import { Outlet } from "react-router";

export default function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <BottomNavigationBar />
        </>
    );
}
