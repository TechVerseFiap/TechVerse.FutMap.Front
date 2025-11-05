import { useScrollToTop } from "../../hooks/useScrollToTop";
import ToolBar from "../../components/ToolBar";
import { Outlet, useMatches, useNavigate } from "react-router";

export default function ToolbarLayout() {
  useScrollToTop();
  const navigate = useNavigate();
  const matches = useMatches();

  const currentRoute = matches.find((m) => m.handle?.title);
  const title = currentRoute?.handle?.title || "Tela";

  return (
    <>
      <ToolBar title={title} onBack={() => navigate(-1)} />
      <Outlet />
    </>
  );
}
