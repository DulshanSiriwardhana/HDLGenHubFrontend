import { useParams } from 'react-router';
import { SERVER } from '../../env.js';
import Coursecomponent from '../coursecomponent/coursecomponent';
import './coursecard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setCache } from '../../caching/cache.js';

const Coursecard = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);  // Initialize state as null
    const [coursecomponents, setCoursecomponents] = useState([]);

    useEffect(() => {
        const fetchCoursecomponents = async () => {
            const res = await axios.get(`${SERVER}/Coursecomponent/course/${id}`);
            setCoursecomponents(res.data);
        };
        
        const fetchData = async () => {
            const response = await axios.get(`${SERVER}/Course/${id}`);
            setData(response.data);
            setCache('HDLGenHub_Loggedcourse', JSON.stringify(response.data));
            fetchCoursecomponents();  // Call fetchCoursecomponents after data is set
        };

        fetchData();
    }, [id]);

    console.log("Courses: ", id);
    console.log("Data", data);
    console.log("Course components: ", coursecomponents);

    if (!data) {
        return <div>Loading...</div>;  // Display a loading message until data is available
    }

    return (
        <div className="coursecardcontainer">
            <div className="coursecardpack">
                <div 
                    className='coursecardpack-top'
                    style={{ backgroundImage: `url(${data.coverimage})` }}
                >
                    <h1>{data.name}</h1>
                    <h2>{data.description}</h2>
                </div>
                <div className="coursecard-coursecomponent">
                    {coursecomponents.map((coursecomponentid) => (
                        <div className='coursecard-coursecomponent-each' key={coursecomponentid._id}>
                            <Coursecomponent id={coursecomponentid._id} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Coursecard;
