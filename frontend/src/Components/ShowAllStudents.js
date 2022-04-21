import { useState, useEffect, React } from 'react'
import "./Home.css"
import axios from 'axios';

export const ShowAllStudents = () => {

  const [DataList, setDataList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/students').then((response) => {
      setDataList(response.data);
    })
  }, [])
  return (
    <div className='section-item'>
      <h1>Show All Students</h1>


      <section>
        <legend>Student List</legend>
        <div id="buttons">

          <div className="container">
            {
        
                DataList.map((val, key) => {
                  return <div key={key} className="data-container" >

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

                  </div>
                }) 
            }
          </div>
        </div>

      </section>
    </div>
  )
}
