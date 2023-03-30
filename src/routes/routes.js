import AdminHome from "pages/admin/AdminHome";
import CreateProjectPage from "pages/admin/CreateProject";
import ProjectManager from "pages/admin/ProjectManager";
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
    path: "createProject",
    component: CreateProjectPage,
  },
  {
    path: "projectManager",
    component: ProjectManager,
  },
];

export { clientRoutes, adminRoutes };
