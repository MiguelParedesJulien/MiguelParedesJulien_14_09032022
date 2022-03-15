import React from "react";
import Table from "components/dataTable/DataTable";

const CurrentEmployee = () => {
  return (
    <section className="containerWrapper">
      <article className="formHeader">
        <h2>Current Employee</h2>
      </article>
      <span className="lineForm" />
      <Table />
    </section>
  );
};

export default CurrentEmployee;
