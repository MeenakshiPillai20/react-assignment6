import React from "react";

export default function StudentData({ stu }) {
  return (
    <>
      <td>{stu.name}</td>
      <td>{stu.age}</td>
      <td>{stu.course}</td>
      <td>{stu.batch}</td>
      <td>
        <a href="#link">Edit</a>
      </td>
    </>
  );
}
