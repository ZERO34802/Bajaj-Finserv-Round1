import React, { useState } from 'react';

const DataTable = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [designationFilter, setDesignationFilter] = useState('');

  const filteredData = data.employees.filter(
    (employee) =>
      employee.name &&
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (designationFilter === '' || employee.designation === designationFilter)
  );

  const designations = ['Developer', 'Designer', 'Manager', 'QA Engineer'];

  return (
    <div className="table-container">
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <select
        value={designationFilter}
        onChange={(e) => setDesignationFilter(e.target.value)}
      >
        <option value="">All Designations</option>
        {designations.map((designation) => (
          <option key={designation} value={designation}>
            {designation}
          </option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>{employee.skills.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
