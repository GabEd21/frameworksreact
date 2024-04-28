import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios'

function Home(){
    const [students, setStudents] = useState([])
    useEffect(() =>{
        Axios.get('http://localhost:8000/studentslist').then((response) => {
            setStudents(response.data);
        })
      }, [])
    console.log(students)
    return(
        <div>
            <h1>Welcome to my world.</h1>
            <a href='/addstudent'><button type="button" class="btn btn-outline-primary">Add Student</button></a>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Course</th>
                        <th scope="col">Subjects</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((val)=>{
                        return (
                            <tr class="table-active">
                                <th scope="row">{val.name}</th>
                                <td>{val.age}</td>
                                <td>{val.course}</td>
                                <td>
                                {val.subjects.map((value, index) => {
                                    return(
                                        <span key={index}>{value}, </span>
                                    )
                                })}
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Home;