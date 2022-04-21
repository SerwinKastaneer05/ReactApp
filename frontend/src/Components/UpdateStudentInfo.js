import { useState, React } from 'react'
import "./Home.css"
import axios from 'axios';

export const UpdateStudentInfo = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [gpa, setGpa] = useState("");
  const [enrolled, setEnrolled] = useState("");
  const [upID, setUpID] = useState("")
  const [resetkey, setresetkey] = useState(10);
  const[updated, setupdated]=useState(false);

//Using PUT 
  const updateData = (id) => {
    axios.put(`http://localhost:3001/students/${id}`, { id: id, first_name: first, last_name: last, gpa: gpa, enrolled: enrolled });
    setresetkey(resetkey + 1);
    setupdated(true);
  }
  return (
    <div className='section-item'>
      <h1>UpdateStudentInfo</h1>



      <section key={resetkey}>
        <legend>Update By ID</legend>
        <label for="studentid">Enter Student ID:</label>
        <textarea onChange={(event) => { setUpID(event.target.value) }} id="studentid" rows="1" cols="40" placeholder="Ex: A202129301"></textarea><br />
        <label for="firstname">First Name:</label>
        <textarea onChange={(event) => { setFirst(event.target.value) }} id="firstname" rows="1" cols="40" placeholder="Ex: Jeter"></textarea><br />
        <div>
          <label for="lastname">Last Name:</label>
          <textarea onChange={(event) => { setLast(event.target.value) }} id="lastname" rows="1" cols="40" placeholder="Ex: Cano"></textarea><br />
        </div>
        <label for="gpa">GPA:</label>
        <textarea onChange={(event) => { setGpa(event.target.value) }} id="gpa" rows="1" cols="40" placeholder="Ex: 3.0"></textarea><br />
        <label for="enrollment">Enrollment:</label>
        <textarea onChange={(event) => { setEnrolled(event.target.value) }} id="enrollment" rows="1" cols="40" placeholder="Ex: true or false"></textarea><br />

        <div id="buttons">
          <input type="submit" id="search" onClick={() => updateData(upID)} value="Update" /></div>
          {updated?<h5>Data Updated Successfully!</h5>:""}
      </section>
    </div>
  )
}
