import Header from "../../components/Header";
import { Outlet, useLocation } from "react-router";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import BottomNavigationBar from "../../components/BottomNavigationBar"

export default function MainLayout() {
  const location = useLocation();

  // figure out the index of the route in nav order
  const routeIndex = navItems.findIndex(
    (item) => "/" + item.route === location.pathname
  );

  useScrollToTop();
  return (
    <>
      <Header />
      <div className="relative overflow-hidden flex-1">
        <AnimatePresence mode="wait" custom={routeIndex}>
          <motion.div
            key={location.pathname} // important: re-render per route
            custom={routeIndex}
            initial={(custom) => ({
              x: custom < routeIndex ? "100%" : "-100%",
              opacity: 0,
            })}
            animate={{ x: 0, opacity: 1 }}
            exit={(custom) => ({
              x: custom < routeIndex ? "-100%" : "100%",
              opacity: 0,
            })}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute w-full h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
      <BottomNavigationBar />
    </>
  )
}