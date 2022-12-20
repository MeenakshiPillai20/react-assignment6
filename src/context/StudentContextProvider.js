import React,{createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
export const StudentContext = createContext()

const StudentContextProvider = (props) => {
    
  const [student,setStudent] = useState([
        {id:uuidv4(), name: 'Meenakshi Pillai', age:'23', course: 'BCA', batch: "MCA"},
        {id:uuidv4(), name: 'Meenakshi Pillai', age:'7', course: 'BCA', batch: "MCA"},
        {id:uuidv4(), name: 'Meenakshi Pillai', age:'3', course: 'BCA', batch: "MCA"},
        {id:uuidv4(), name: 'Meenakshi Pillai', age:'3', course: 'BCA', batch: "MCA"},
  ])
  
  // const addStudent = (name, age, course, batch) => {
  //   setStudent([...student , {id:uuidv4(), name, age, course, batch}])
  // }
  console.log(student)
  return (
    <StudentContext.Provider value={[student, setStudent]}>
        {props.children}
    </StudentContext.Provider>
  )
}
export default StudentContextProvider