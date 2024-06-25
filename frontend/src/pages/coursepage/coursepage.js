import axios from "axios";
import { SERVER } from '../../env.js';
import { useEffect, useState } from "react";
import { getCache } from "../../caching/cache";
import Smallcoursecard from "../../components/smallcoursecard/smallcoursecard";
import './coursepage.css';
import Coursepagecover from "../../components/coursepagecover/coursepagecover";

const CoursePage =()=>{
    const [courses, setCourse] = useState([]);
    const [teacher, setTeacher] = useState(null);
    useEffect(()=>{
        const loggedTeacher = getCache('HDLGenHub_Teacher');
        setTeacher(loggedTeacher);
        getcourses(loggedTeacher._id);
        console.log("Logged Teacher: ",teacher);
    },[ teacher]);

    const getcourses =async(id)=>{
        const response = await axios.get(`${SERVER}/Course/courses/${id}`);
        setCourse(response);
        console.log("Courses under the logged user: ",response);
    }

    return(
        <div className="coursepagecontainer">
            <div className="coursepageheading">
                <h1>Explore Your Courses</h1>
            </div>
            <div className="coursepagecover">
                <Coursepagecover/>
            </div>
            <div className="coursepagecoursecontainer">
                {courses.data?(courses.data.map((course)=>(
                    <div className="coursecontainer-each" key={course._id}>{<Smallcoursecard data={course}/>}</div>
                ))):null}
            </div>
        </div>
    );
}

export default CoursePage;