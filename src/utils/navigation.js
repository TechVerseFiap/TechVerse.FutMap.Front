import { Routes } from "../routes/routes";

export const navItemType = {
  Events: "Eventos",
  Map: "Mapa",
  Profile: "Perfil",
};

export const navItems = [
  { type: navItemType.Events, route: Routes.Event },
  { type: navItemType.Map, route: Routes.Root },
  { type: navItemType.Profile, route: Routes.Profile },
];

export const getNavItemFromRoute = (pathname) => {
  const currentNavItem = navItems.find(item => {
    if (item.route === Routes.Root) {
      return pathname === "/";
    }
    return item.route === pathname.replace("/", "");
  });
  return currentNavItem?.type || navItemType.Map;
};

export const getRouteIndex = (pathname) => {
  return navItems.findIndex(item => {
    if (item.route === Routes.Root) {
      return pathname === "/";
    }
    return item.route === pathname.replace("/", "");
  });
};
