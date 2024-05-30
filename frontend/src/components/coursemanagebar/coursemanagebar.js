import { useEffect, useState } from 'react';
import './coursemanagebar.css';
import axios from 'axios';
import { useParams } from 'react-router';
import Enrolledstudentshow from '../enrolledstudentshow/enrolledstudentshow';
import Popup from 'reactjs-popup';
import Addcourseitem from '../addcourseitem/addcourseitem';
import Removecourseitem from '../removecourseitem/removecourseitem';
import Deletecourse from '../deletecourse/deletecourse';

const Coursemanagebar =()=>{
    const {id} = useParams();
    const [Enrolls, setEnrolls] = useState();
    const [student, setStudent] = useState([]);
    console.log("courseId", id);
    useEffect(()=>{
        const fetchEnrollment =async()=>{
            const response = await axios.get(`http://localhost:4000/EnrolledCourse/enrolledcourses/${id}`);
            setEnrolls(response.data);
        }
        fetchEnrollment();
    },[])


    return(
        <div className="coursemanagebarconatiner">
            <div className='coursemanagebar-item'>
                <Popup trigger = {<button>Add New Item</button>} modal nested>
                    {
                        <Addcourseitem/>
                    }
                </Popup>
                
                <Popup trigger = {<button>Remove Item</button>} modal nested>
                    {
                        <Removecourseitem/>
                    }
                </Popup>

                <Popup trigger = {<button>Delete Course</button>} modal nested>
                    {
                        <Deletecourse/>
                    }
                </Popup>

            </div>
            <div className='coursemanagebar-students'>
                <div>
                    <h1>Enrolled Students</h1>
                    <h2>{Enrolls?(Object.keys(Enrolls).length):0}</h2>

                    <div className='coursemanagebar-students-each'>
                        {Enrolls?(Enrolls.map((enroll)=>(
                            <div key={enroll.enrolledby} className='coursemanagebar-onestudent'>{<Enrolledstudentshow studentid={enroll.enrolledby}/>}</div>
                        ))):null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Coursemanagebar;