import { useRef, useState } from "react";
import "./List.css"

function List({ data, set_records }) {
  function del_fn(id) {
    var updated_data = data.filter((item, index) => index !== id);
      set_records(updated_data);
  }
  return (
    <table
      border="1"
      width="90%"
      style={{ margin: "20px auto", textAlign: "center" }}
    >
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Gender</th>
          <th>City</th>
          <th>Hobby</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>

            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.pass}</td>
            <td>{item.gender}</td>
            <td>{item.city}</td>
            <td>{item.hobby.join(", ")}</td>

            <td>
              <button>Update</button>
            </td>
            <td>
              <button
                onClick={() => {
                  del_fn(index);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default List;
