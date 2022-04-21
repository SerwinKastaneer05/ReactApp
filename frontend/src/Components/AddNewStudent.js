import { useState, React } from 'react'
import "./Home.css"
import axios from 'axios';

const AddNewStudent = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [gpa, setGpa] = useState("");
  const [enrolled, setEnrolled] = useState("");
  const [resetkey, setresetkey] = useState(10);
  const[updated, setupdated]=useState(false);

  const addToList = () => {
    axios.post("http://localhost:3001/students",
     { 
       first_name: first, 
       last_name: last, 
       gpa: gpa, 
       enrolled: enrolled });
    setresetkey(resetkey + 1);
    setupdated(true);

  }
  return (
    <div className='section-item' >
      <h1>Add a New Student</h1>
      <section key={resetkey} >
        <legend>Student Information</legend>

        <label for="firstname">First Name:</label>
        <textarea onChange={(event) => { setFirst(event.target.value) }} id="firstname" rows="1" cols="40" placeholder="Ex: Jeter"></textarea><br />
        <div>
          <label for="lastname">Last Name:</label>
          <textarea onChange={(event) => { setLast(event.target.value) }} id="lastname" rows="1" cols="40" placeholder="Ex: Cano"></textarea><br />
        </div>
        <label for="gpa">GPA:</label>
        <textarea type="number" onChange={(event) => { setGpa(event.target.value) }} id="gpa" rows="1" cols="40" placeholder="Ex: 3.0"></textarea><br />
        <label for="enrollment">Enrollment:</label>
        <textarea onChange={(event) => { setEnrolled(event.target.value) }} id="enrollment" rows="1" cols="40" placeholder="Ex: true or false"></textarea><br />
        <div id="buttons">
          <input type="submit" id="search" onClick={addToList} />
          <input type="reset" id="clear" onClick={() => { setresetkey(resetkey + 1) }} /><br />
          {updated?<h5>Student Added Successfully!</h5>:""}
        </div>
      </section>
    </div>


  )
}

export default AddNewStudent