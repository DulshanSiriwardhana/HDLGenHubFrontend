import { useParams } from "react-router";
import { SERVER } from '../../env.js';
import './deletecourse.css';
import { useState } from "react";
import axios from "axios";

const Deletecourse=()=>{
    const courseid = useParams();
    const [isopen, setIsopen] = useState(1);
    console.log(courseid.id);

    const handleDelete=async()=>{
        const res = await axios.delete(`${SERVER}/Course/${courseid.id}`);
        console.log(res);
        alert("Deleted :", courseid.id);
        setIsopen(0);
        window.location.reload();
    }
    const closeWindow=()=>{
        setIsopen(0);
    }
    if(isopen){
        return(
            <div className="deletecoursecontainer">
                <h1>Do you want to delete this course?</h1>
                <div className="deletecourse-button">
                    <button onClick={handleDelete} className="deletecourse-button1">Yes</button>
                    <button onClick={closeWindow} className="deletecourse-button2">No</button>
                </div>
            </div>
        );
    }
}

export default Deletecourse;