import EmailActivatePage from "../components/Auth/EmailActivate";
import { Forms } from "../components/Auth/Form";
import { PasswordResetPage } from "../components/Auth/PasswordReset";
import RecoveryPage from "../components/Auth/Recovery";
import { Connect } from "../components/Connect/Connect";
import HistoryPage from "../components/History/History";
import MassPage from "../components/Mass/Mass";
import OZONPage from "../components/Ozon/Ozon";
import MainPage from "../components/Profile/Main";
import { InputRich } from "../components/Rich/InputRich";
import PrevPage from "../components/Rich/Prev/Prev";
import RichPage from "../components/Rich/Rich";
import WBPage from "../components/WB/WB";
import AuthPage from "../pages/Auth/AuthMain";
import Politica from "../pages/Politica/Politica";
import ProfilePage from "../pages/Profile/Profile";
import TariffPage from "../pages/Tariff/Tarif";
import {
  ACTIVATE,
  HISTORY,
  LOGIN,
  MASS,
  OZON,
  PASSWORD,
  POLITICA,
  PROFILE,
  RECOVERY,
  RICH,
  RICHPREV,
  TARIFF,
  WB,
  WB_RETRY,
  RICH_RETRY,
  OZON_RETRY,
  CONNECT,
} from "./consts";

export const MainRoots = [
  {
    Component: AuthPage,
    path: LOGIN,
  },
  {
    Component: TariffPage,
    path: TARIFF,
  },
  {
    Component: ProfilePage,
    path: PROFILE,
  },
  {
    path: POLITICA,
    Component: Politica,
  },
];

export const ProfileRoots = [
  {
    Component: WBPage,
    path: WB,
  },
  {
    Component: OZONPage,
    path: OZON,
  },
  {
    Component: WBPage,
    path: WB_RETRY,
  },
  {
    Component: OZONPage,
    path: OZON_RETRY,
  },
  {
    Component: MainPage,
    path: "",
  },
  {
    Component: RichPage,
    path: RICHPREV,
  },
  {
    Component: RichPage,
    path: RICH_RETRY,
  },
  {
    Component: TariffPage,
    path: TARIFF,
  },
  {
    Component: MassPage,
    path: MASS,
  },
  {
    Component: HistoryPage,
    path: HISTORY,
  },
  {
    Component: Connect,
    path: CONNECT,
  },
];

export const LoginRoots = [
  {
    Component: Forms,
    path: "",
  },
  {
    Component: RecoveryPage,
    path: RECOVERY,
  },
  {
    Component: EmailActivatePage,
    path: ACTIVATE,
  },
  {
    Component: PasswordResetPage,
    path: PASSWORD,
  },
];

export const RichRoot = [
  {
    Component: PrevPage,
    path: "",
  },
  {
    Component: InputRich,
    path: RICH,
  },
];
