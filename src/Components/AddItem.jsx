import React,{useState,useContext} from 'react'
import Student from '../Pages/Student';
import StudentContextProvider, { StudentContext } from '../context/StudentContextProvider';

export default function AddItem() {
    const [active,setActive] = useState();
    const [isShown, setIsShown] = useState(true);
  

    const [student] = useContext(StudentContext)
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [course,setCourse] = useState("");
    const [batch,setBatch] = useState("");

  //   const [newStudent, setNewStudent] = useState({
  //     name:"", age:"", course:"", batch:""
  // });

 
    // function onInputChange(e){
      // setNewStudent({...newStudent,[e.target.name]: e.target.value})
  
    // }

    // const {name, age, course, batch} = newStudent;

    function onSubmit(e){
        e.preventDefault();
        // addStudent(name,age,course,batch)
        const addStudent = student;
    console.log('hello',{addStudent});
    addStudent.push({
        id: addStudent.length,
        name : setname,
        age : age,
        course : course,
        batch : batch
    })
        setActive(!active);
        setIsShown(current => !current);
        // console.log("Name value : "+name+age+course+batch);
        
    
    }
  return (
    <>
     <div className='container' style={{display: isShown ? 'block' : 'none'}}>
     <form >
        <div className='form'>
           <fieldset className='field'>
              <legend>Name</legend>
              <input type="text" name='name' value={name} onChange={(e) => () => {setName(e.target.value)} } required />
            </fieldset>

            <fieldset className='field'>
              <legend> Age </legend>
              <input type="number" name='age' value={age} onChange={(e) => () => {setAge(e.target.value)} }  required />
            </fieldset>

            <fieldset className='field'>
              <legend> Course </legend>
              <input type="text" name='course' value={course} onChange={(e) => () => {setCourse(e.target.value)} } required />   
            </fieldset>
           
            <fieldset className='field'>
               <legend> Batch </legend>
               <input type="text" name='batch' value={batch} onChange={(e) => () => {setBatch(e.target.value)} } required /> 
            </fieldset>  
         </div>
         <div className='grid-btn'>
            <button className=' button btn1' onClick={() => {setActive(!active);setIsShown(current => !current);}}>Cancel</button> 
            <button className=' button btn2' onClick={onSubmit} >Submit</button> 
            
        </div>  
      </form>
       
     </div>
     {active ? <StudentContextProvider><Student/></StudentContextProvider>: null}
    </>
  )
}
