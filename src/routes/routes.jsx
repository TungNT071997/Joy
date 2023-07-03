import config from "./config";
import Home from "./Pages/Home";
import VayCuoi from "./Pages/VayCuoi";
import MakeUp from "./Pages/MakeUp";
import Price from "./Pages/Price";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.vaycuoi, component: VayCuoi },
  { path: config.routes.makeup, component: MakeUp },
  { path: config.routes.price, component: Price },
];
export default publicRoutes;
