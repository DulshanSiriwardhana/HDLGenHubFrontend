import { useParams } from "react-router";
import Coursecard from "../../components/coursecard/coursecard";

const StudentCoursePage =()=>{
    const {id} = useParams();
    console.log("This :",id);

    return(
        <div className="student-coursepage-container mt-20">
            <Coursecard/>
        </div>
    );
}

export default StudentCoursePage;