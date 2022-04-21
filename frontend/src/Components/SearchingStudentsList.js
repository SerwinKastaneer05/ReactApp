import { useState, useEffect, React } from 'react'
import "./Home.css"
import axios from 'axios';

export const SearchingStudentsList = () => {

  const [DataList, setDataList] = useState([]);
const[name,setName]=useState("")
  useEffect(() => {
    axios.get('http://localhost:3001/students').then((response) => {
      setDataList(response.data);
    })
  }, [])
  return (
    <div className='section-item'>
      <h1>Show All Students</h1>


      <section>
        <legend>Student Search List</legend>
        <div id="buttons">
        <p>Search Students using their First Name, Last Name, GPA and Enrollment</p>
          <div className="container">
          <textarea onChange={(e) => { setName(e.target.value) }} id="studentid" rows="1" cols="40" placeholder="Ex: Suzy or John or 4.0 or True/False"></textarea><br />
            {
        
                DataList.map((val, key) => {
                if (name===val.first_name ||name===val.last_name ||name===val.gpa ||name===val.enrolled )  {
                    return <div key={key} className="data-container">
                     
                    <table>
                      <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>GPA</th>
                        <th>Enrolled</th>
                      </tr>
                      <tr>
                        <td>{val._id}</td>
                        <td>{val.first_name}</td>
                        <td>{val.last_name}</td>
                        <td>{val.gpa}</td>
                        <td>{val.enrolled}</td>
                      </tr>

                    </table>
                
                  </div>}
                  return <></>
                }) 
            }
          </div>
        </div>

      </section>
    </div>
  )
}
