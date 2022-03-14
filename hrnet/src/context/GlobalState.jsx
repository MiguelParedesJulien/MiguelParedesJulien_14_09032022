import { ADD_EMPLOYEE } from "utils/Constants";
import { employeeReducer } from "context/Reducers";
import EmployeeContext from "context/Context";
import PropTypes from "prop-types";
import React, { useReducer } from "react";

const GlobalState = (props) => {
  const employee = [];
  const [listState, dispatch] = useReducer(employeeReducer, { employeeList: [] });

  const addEmployeeToList = (employee) => {
    dispatch({ type: ADD_EMPLOYEE, employee: employee });
  };

  return (
    <EmployeeContext.Provider
      value={{
        employee: employee,
        list: listState,
        addEmployeeToList: addEmployeeToList,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

GlobalState.propTypes = {
  children: PropTypes.object,
};

export default GlobalState;
