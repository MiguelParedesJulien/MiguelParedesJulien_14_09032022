import "components/form/form.css";
import { departments } from "assets/data/Departments";
import Dropdown from "components/dropdown/Dropdown";
import CreateDatePicker from "components/datepicker/Datepicker";
import EmployeeContext from "context/Context";
import { INITIAL_STATE_EMPLOYEE } from "utils/Constants";
import Input from "components/input/Input";
import React, { useState, useContext } from "react";
import { statesOfUsa } from "assets/data/StatesOfUsa";

const Form = () => {
  const [newEmployee, setNewEmployee] = useState(INITIAL_STATE_EMPLOYEE);
  const [errorMessage, setErrorMessage] = useState("");
  const context = useContext(EmployeeContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      newEmployee.firstName.trim().length === 0 ||
      newEmployee.lastName.trim().length === 0 ||
      newEmployee.street.trim().length === 0 ||
      newEmployee.city.trim().length === 0 ||
      newEmployee.zipCode.trim().length === 0
    ) {
      return setErrorMessage("Please fill in all fields");
    }
    setErrorMessage("");
    context.addEmployeeToList(newEmployee, setErrorMessage);
  };

  return (
    <section className="container">
      <form action="#" id="createEmployee" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <Input inputType="text" inputName="firstName" newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
        <label htmlFor="lastName">Last Name</label>
        <Input inputType="text" inputName="lastName" newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <CreateDatePicker inputName="dateOfBirth" newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
        <label htmlFor="startDate">Start Date</label>
        <CreateDatePicker inputName="startDate" newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <Input inputType="text" inputName="street" newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
          <label htmlFor="city">City</label>
          <Input inputType="text" inputName="city" newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
          <label htmlFor="state">State</label>
          <Dropdown inputName="state" options={statesOfUsa} newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
          <label htmlFor="zip-code">Zip Code</label>
          <Input inputType="text" inputName="zipCode" newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
        </fieldset>
        <label htmlFor="department">Department</label>
        <Dropdown inputName="department" options={departments} newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
        <span className="errorMessage">{errorMessage}</span>
        <button className="btn-submit" type="submit">
          Save
        </button>
      </form>
    </section>
  );
};

export default Form;
