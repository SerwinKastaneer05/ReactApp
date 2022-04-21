import { useState, React } from 'react'
import "./Home.css"
import axios from 'axios';

export const DeleteStudent = () => {
  const [resetkey, setresetkey] = useState(10);
  const [upID, setUpID] = useState("")
  const [deleted, setDeleted] = useState(false)
  const deleteData = (id) => {
    axios.delete(`http://localhost:3001/students/${id}`, { id: id });
    setresetkey(resetkey + 1);
    setDeleted(true);
  }

  return (
    <div className='section-item'>
      <h1>Delete Student</h1>

      <section key={resetkey}>
        <legend>Delete Student By ID</legend>
        <label for="studentid">Enter Student ID:</label>
        <textarea id="studentid" onChange={(event) => { setUpID(event.target.value) }} rows="1" cols="40" placeholder="Ex: A202129301"></textarea><br />
        <div id="buttons">
          <input type="submit" id="search" onClick={() => deleteData(upID)} value="Delete" /></div>
        {deleted ? <h5>Student Deleted Successfully!</h5> : ""}
      </section>
    </div>



  )
}
