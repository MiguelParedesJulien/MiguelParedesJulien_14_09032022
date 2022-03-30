import { statesOfUsa } from "assets/data/StatesOfUsa";
import { departments } from "assets/data/Departments";

/**
 * Create all the parts of the state and methods that will be accessible from any component of the website
 * @param {object} children
 * @return {void}
 */
const INITIAL_STATE_EMPLOYEE = {
  firstName: "",
  lastName: "",
  dateOfBirth: new Date(),
  startDate: new Date(),
  street: "",
  city: "",
  state: statesOfUsa[0].label,
  zipCode: "",
  department: departments[0].label,
};

const ADD_EMPLOYEE = "ADD_EMPLOYEE";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export { INITIAL_STATE_EMPLOYEE, ADD_EMPLOYEE, MONTHS };
