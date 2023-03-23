import AdminHome from "pages/admin/AdminHome";
import AdminPage from "pages/admin/AdminPage";
import HomePage from "pages/HomePage";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";

const clientRoutes = [
  {
    path: "/",
    component: HomePage,
    children: [
      {
        index: true,
        component: SignIn,
      },

      {
        path: "/signUp",
        component: SignUp,
      },
    ],
  },
];

const adminRoutes = [
  {
    path: "/admin",
    component: AdminPage,
    children: [
      {
        index: true,
        component: AdminHome,
      },
    ],
  },
];

export { clientRoutes, adminRoutes };
