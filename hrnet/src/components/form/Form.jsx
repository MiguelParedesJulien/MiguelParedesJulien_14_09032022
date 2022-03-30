import "components/form/form.css";
import { departments } from "assets/data/Departments";
import Dropdown from "components/dropdown/Dropdown";
import CreateDatePicker from "components/datepicker/Datepicker";
import EmployeeContext from "context/Context";
import { INITIAL_STATE_EMPLOYEE } from "utils/Constants";
import Input from "components/input/Input";
import React, { useState, useContext } from "react";
import { Modal, useModal } from "modal-top";
import { Link } from "react-router-dom";
import { statesOfUsa } from "assets/data/StatesOfUsa";

/**
 * React Form component allowing user to add employee to list, which will be passed to Data-Table using React Context.
 * If the fields of the table are not correctly filled in an error message will appear.
 * @return {void}
 */
const Form = () => {
  const [newEmployee, setNewEmployee] = useState(INITIAL_STATE_EMPLOYEE);
  const [errorMessage, setErrorMessage] = useState("");
  const context = useContext(EmployeeContext);
  const { showModal, activeModal, handleOpenModal, handleCloseModal } = useModal();

  /**
   * Function called when submitting the form when clicking on the 'Save' button
   * If all the fields are filled in correctly, it passes the data to the EmployeeContext.
   * Otherwise an error message is displayed.
   * @param {event} e
   * @return {void}
   */
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
    handleOpenModal("submitModal");
    setErrorMessage("");
    context.addEmployeeToList(newEmployee, setErrorMessage);
    setNewEmployee(INITIAL_STATE_EMPLOYEE);
  };

  return (
    <section className="containerWrapper">
      <article className="formHeader">
        <h1>NEW EMPLOYEE</h1>
      </article>
      <span className="lineForm" />
      <form action="#" id="createEmployee" onSubmit={handleSubmit} className="form">
        <fieldset className="fieldSetEmployee">
          <legend>EMPLOYEE</legend>
          <article className="formGroup">
            <div className="formGroupItems">
              <label htmlFor="firstName">First Name</label>
              <Input inputType="text" inputName="firstName" newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
            </div>
            <div className="formGroupItems">
              <label htmlFor="lastName">Last Name</label>
              <Input inputType="text" inputName="lastName" newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
            </div>
          </article>
          <article className="formGroup">
            <div className="formGroupItems">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <CreateDatePicker inputName="dateOfBirth" newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
            </div>
            <div className="formGroupItems">
              <label htmlFor="startDate">Start Date</label>
              <CreateDatePicker inputName="startDate" newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
            </div>
          </article>
        </fieldset>
        <fieldset className="fieldSetAddress">
          <legend>ADDRESS</legend>
          <article className="formGroup">
            <div className="formGroupItems">
              <label htmlFor="street">Street</label>
              <Input inputType="text" inputName="street" newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
            </div>
            <div className="formGroupItems">
              <label htmlFor="city">City</label>
              <Input inputType="text" inputName="city" newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
            </div>
          </article>
          <article className="formGroup">
            <div className="formGroupItems">
              <label htmlFor="state">State</label>
              <Dropdown inputName="state" options={statesOfUsa} newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
            </div>
            <div className="formGroupItems">
              <label htmlFor="zipCode">Zip Code</label>
              <Input inputType="number" inputName="zipCode" newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
            </div>
          </article>
        </fieldset>
        <fieldset className="fieldSetDepartment">
          <legend>DEPARTMENT</legend>
          <article className="formGroup">
            <div className="formGroupItems">
              <label htmlFor="department"></label>
              <Dropdown inputName="department" options={departments} newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
            </div>
          </article>
        </fieldset>
        <div className="fieldSetSumbit">
          <article className="formGroup">
            <div className="formSubmitDiv">
              <button type="submit" className="buttonDefault">
                Save
              </button>
              <Modal isOpen={showModal && activeModal === "submitModal"} close={handleCloseModal} addCloseEscape={true}>
                <br />
                <h3>The employee has been registered !</h3>
                <Link to="/employee-list" className="buttonLink">
                  <button type="button" className="buttonDefault">
                    Go to the list
                  </button>
                </Link>
              </Modal>
            </div>
          </article>
        </div>
        <span className="errorMessage">{errorMessage}</span>
      </form>
    </section>
  );
};

export default Form;
