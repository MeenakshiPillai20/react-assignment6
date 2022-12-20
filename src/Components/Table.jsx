import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContextProvider";
// import StudentData from "./StudentData";

export default function Table() {
  // const mydata = useContext(Data);
  // // const list = props.data;
  // // const [list,setList]=useState([data]);
  // console.log("data",mydata);

  const [student] = useContext(StudentContext);
  // const [student,setStudent]=useState([
  //   {id:1, name:'Meenakshi',age:'23',course:"bca",batch:"mca"},
  //   {id:2, name:'Meenakshi',age:'23',course:"bca",batch:"mca"}
  // ])

  return (
    <table id="details">
      <thead>
        <tr>
          <td className="t-head">Name</td>
          <td className="t-head">Age</td>
          <td className="t-head">Course</td>
          <td className="t-head">Batch</td>
          <td className="t-head">Change</td>
        </tr>
      </thead>
      <tbody>
        {/* //    list.map((curEle)=> */}
        {/* <tr>
                       <td>{props.name}</td>
                       <td>{props.age}</td>
                       <td>{props.course}</td>
                       <td>{props.batch}</td>
                       <td><a href='#link'>{props.btn}</a></td>
                   </tr> */}
        {/* //    ) */}
        {student.map((stu) => {
          return(
          <tr key={stu.id}>
            <td>{stu.name}</td>
            <td>{stu.age}</td>
            <td>{stu.course}</td>
            <td>{stu.batch}</td>
            <td>
              <a href="#link">Edit</a>
            </td>
          </tr>
          )
          })}
      </tbody>
    </table>
  );
}
