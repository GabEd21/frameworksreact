import React, { useState } from 'react';
import Axios from 'axios';
import {useNavigate } from 'react-router-dom';

function Addstudent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [subjects, setSubjects] = useState([]);
    const navigate = useNavigate();
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSubjects(prevSubjects => [...prevSubjects, value]);
        } else {
            setSubjects(prevSubjects => prevSubjects.filter(subject => subject !== value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (subjects.length === 0) {
            alert("Please select at least one subject.");
            return;
        }
        console.log(name)
        console.log(age)
        console.log(course)
        console.log(subjects)
        Axios.post('http://localhost:2000/', { name, age, course, subjects })
        .then(response => {
            console.log('Response:', response.data);
            navigate('/', { replace: true });
            window.location.reload();
            alert("New Student added");
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <h1>Add student</h1>
            <a href='/'><button type="button" className="btn btn-outline-primary">Home</button></a>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Student Details</legend>
                    <div>
                        <label className="form-label mt-4">Name</label>
                        <input type="text" className="form-control" placeholder="Enter name" onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                        <label className="form-label mt-4">Age</label>
                        <input type="number" className="form-control" placeholder="Enter age" onChange={(e) => setAge(e.target.value)} required />
                    </div>
                    <div>
                        <label className="form-label mt-4">Course</label>
                        <input type="text" className="form-control" placeholder="Enter course" onChange={(e) => setCourse(e.target.value)} required />
                    </div>
                    <legend className="mt-4">Subjects</legend>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="ComProg" id="comProgCheckbox" onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="comProgCheckbox">ComProg</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Frameworks" id="frameworksCheckbox" onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="frameworksCheckbox">Frameworks</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Thesis" id="thesisCheckbox" onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="thesisCheckbox">Thesis</label>
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-outline-success">Submit</button>
            </form>
        </div>
    );
}

export default Addstudent;
