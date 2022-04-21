import { useState, useEffect, React } from 'react'
import "./Home.css"
import axios from 'axios';

export const SearchStudent = () => {
  const [stdID, setStdID] = useState("")
  const [stdID2, setStdID2] = useState("")
  const [quest, setQuest] = useState("");
  const [resetkey, setresetkey] = useState(10);
  useEffect(() => {
    const id = stdID2;
    axios.get(`http://localhost:3001/students/${id}`).then((response) => {
      setQuest(response.data);
    })
  }, [stdID2])
  return (
    <div className='section-item'>
      <h1> Search a Student</h1>


      <section key={resetkey}>
        <legend>Student ID</legend>
        <label for="studentid">Enter Student ID:</label>
        <textarea onChange={(e) => { setStdID(e.target.value) }} id="studentid" rows="1" cols="40" placeholder="Ex: A202129301"></textarea><br />
        <div id="buttons">
          <input onClick={(e) => { e.preventDefault(); setStdID2(stdID) }} type="submit" id="search" />
          <input type="reset" id="clear" onClick={() => { setresetkey(resetkey + 1) }} /><br />
        </div>
        <div className="data">

          <table>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>GPA</th>
              <th>Enrolled</th>
            </tr>
            <tr>
              <td>{quest._id}</td>
              <td>{quest.first_name}</td>
              <td>{quest.last_name}</td>
              <td>{quest.gpa}</td>
              <td>{quest.enrolled}</td>
            </tr>

          </table>
        </div>
       
      </section>
    </div>
  )
}
