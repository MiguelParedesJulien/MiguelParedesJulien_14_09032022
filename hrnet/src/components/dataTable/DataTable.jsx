import DataTables from "datatables-plugin-react";
import { dataTableLabels } from "assets/data/DataTableLabels";
import EmployeeContext from "context/Context";
import moment from "moment";
import React, { useContext } from "react";
import "components/dataTable/dataTable.css";

/**
 * Data-Table component calling on the data included in the EmployeeContext
 * @return {void}
 */
const Table = () => {
  const context = useContext(EmployeeContext);
  let employees = context.list.employeeList || [];

  employees = employees.map((employee) => ({
    ...employee,
    dateOfBirth: moment(employee.dateOfBirth).format("MM/DD/yyyy"),
    startDate: moment(employee.startDate).format("MM/DD/yyyy"),
  }));

  return <DataTables labels={dataTableLabels} data={employees} />;
};

export default Table;
