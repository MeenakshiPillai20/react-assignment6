import React,{createContext, useState} from 'react'

export const StudentContext = createContext()

const StudentContextProvider = (props) => {
    
  const [student,setStudent] = useState([
        {id:'1', name: 'Meenakshi Pillai', age:'23', course: 'MERN', batch: "July"},
  ])
  
  const addStudent = (name, age, course, batch) => {
    setStudent([...student , {id:student.length, name, age, course, batch}])
  }
 const updateStudent = (id, updatedStudent) => {
    setStudent(student.map((stu) => stu.id === id  ? updatedStudent : stu))
  }
  console.log("new detail",student)
  return (
    <StudentContext.Provider value={{student, addStudent,updateStudent}}>
        {props.children}
    </StudentContext.Provider>
  )
}
export default StudentContextProvider