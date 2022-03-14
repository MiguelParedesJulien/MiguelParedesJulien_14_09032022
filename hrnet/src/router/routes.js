import CreateEmployee from "pages/createEmployee/CreateEmployee";
import CurrentEmployee from "pages/currentEmployee/CurrentEmployee";
import Error from "pages/error/Error";
import Homepage from "pages/homepage/Homepage";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Homepage,
  },
  {
    path: "/new-employee",
    exact: true,
    component: CreateEmployee,
  },
  {
    path: "/employee-list",
    exact: true,
    component: CurrentEmployee,
  },
  {
    path: "*",
    exact: false,
    component: Error,
  },
];
