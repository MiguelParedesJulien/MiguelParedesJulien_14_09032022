import PropTypes from "prop-types";
import React from "react";
import Select, { createFilter } from "react-select";

const Dropdown = (props) => {
  return (
    <Select
      className="custom-select"
      options={props.options}
      value={{ label: props.newEmployee[props.inputName] }}
      filterOption={createFilter({ ignoreAccents: false })}
      classNamePrefix="custom-select"
      onChange={(e) => {
        props.setNewEmployee((state) => ({
          ...state,
          [props.inputName]: e.label,
        }));
      }}
    />
  );
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  newEmployee: PropTypes.object.isRequired,
  inputName: PropTypes.string.isRequired,
  setNewEmployee: PropTypes.func.isRequired,
};

export default Dropdown;
