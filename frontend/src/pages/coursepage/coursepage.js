import axios from "axios";
import { SERVER } from '../../env.js';
import { useEffect, useState } from "react";
import { getCache } from "../../caching/cache";
import Smallcoursecard from "../../components/smallcoursecard/smallcoursecard";
import './coursepage.css';
import Coursepagecover from "../../components/coursepagecover/coursepagecover";

const CoursePage = () => {
    const [courses, setCourses] = useState([]);
    const [teacher, setTeacher] = useState(null);

    useEffect(() => {
        const loggedTeacher = getCache('HDLGenHub_Teacher');
        setTeacher(loggedTeacher);
        if (loggedTeacher) {
            getcourses(loggedTeacher._id);
        }
    }, []);

    const getcourses = async (id) => {
        try {
            const response = await axios.get(`${SERVER}/Course/courses/${id}`);
            setCourses(response.data);
            console.log("Courses under the logged user: ", response.data);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    }

    return (
        <div className="coursepagecontainer bg-slate-900 bg-opacity-75">
            <div className="coursepagecover">
                <Coursepagecover />
            </div>
            <div className="coursepagecoursecontainer bg-white">
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <div className="coursecontainer-each" key={course._id}>
                            <Smallcoursecard data={course} />
                        </div>
                    ))
                ) : (
                    <p>No courses found</p>
                )}
            </div>
        </div>
    );
}

export default CoursePage;
