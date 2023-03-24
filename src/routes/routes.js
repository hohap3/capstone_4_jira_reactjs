import AdminHome from "pages/admin/AdminHome";

import SettingPage from "pages/admin/SettingPage";

import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";

const clientRoutes = [
  {
    path: "/signIn",
    component: SignIn,
  },

  {
    path: "/signUp",
    component: SignUp,
  },
];

const adminRoutes = [
  {
    path: "home",
    component: AdminHome,
  },
  {
    path: "setting",
    component: SettingPage,
  },
];

export { clientRoutes, adminRoutes };
