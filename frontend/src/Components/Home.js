import AddNewStudent from './AddNewStudent';
import { DeleteStudent } from './DeleteStudent';
import { SearchStudent } from './SearchStudent';
import { ShowAllStudents } from './ShowAllStudents';
import { UpdateStudentInfo } from './UpdateStudentInfo';
import { Route,Routes } from "react-router-dom";
import { Link } from 'react-router-dom'
import { SearchingStudentsList } from './SearchingStudentsList';

// Main Page 
export const Home = () => {
  return (
    <div className='Home'>
      <h1 >Student  Form</h1>

      <nav
      >
        
        <Link className='item' to="/AddNewStudent">Add New Student</Link> 
        <Link className='item' to="/ShowAllStudents">Show All Students</Link>
        <Link className='item' to="/deletestudent">Delete Student</Link>
        <Link className='item' to="/SearchStudent">Search Student ID</Link> 
        <Link className='item' to="/UpdateStudent">Update Student</Link>
        <Link className='item' to="/SearchStudentsList">Search Students List</Link>
       

      </nav>
      <Routes>
      <Route path="AddNewStudent" element={<AddNewStudent />} />
      <Route path="deletestudent" element={<DeleteStudent />} />
      <Route path="SearchStudent" element={<SearchStudent />} />
      <Route path="ShowAllStudents" element={<ShowAllStudents />} />
      <Route path="UpdateStudent" element={<UpdateStudentInfo />} />
      <Route path="SearchStudentsList" element={<SearchingStudentsList/>} />
     
    </Routes>

    </div>
  )
}
