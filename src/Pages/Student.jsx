import React,{useState} from 'react';
import AddItem from '../Components/AddItem';
import Table from '../Components/Table';
import StudentContextProvider from '../context/StudentContextProvider';


const Student = (props) => {
    const [active,setActive] = useState();
    const [isShown, setIsShown] = useState(true);
    // const [records, setRecords] = useState([]);
    
    // const list = props.data;
    // const list={id: new Date().getTime().toString(), name:props.name, age:props.age, course:props.course, batch:props.batch};
    // const record = {...record,list}
    // setList(...list,{id:list.length,})
    // console.log(list);
    
    return (
        <>
        <div className="container" style={{display: isShown ? 'block' : 'none'}}>
            <header>
                <h1 className='head1'>Student Details</h1>
                <button className='btn' onClick={() => {setActive(!active); setIsShown(current => !current);}}>Add new student</button>

    
            </header>
<StudentContextProvider>
  <Table />
</StudentContextProvider>
           
        </div>
      {active ? <AddItem/> : null}
     </>
    );
}

export default Student;
