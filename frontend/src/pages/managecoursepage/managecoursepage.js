import Coursecard from "../../components/coursecard/coursecard";
import Coursemanagebar from "../../components/coursemanagebar/coursemanagebar";
import './managecoursepage.css';

const Managecoursepage =()=>{
    return(
        <div className="managecoursepagecontainer">
            <div className="manageopenedcourse">
                <div className="managecoursepage-coursecard">
                    <Coursecard/>
                </div>
                <div className="managecoursepagebar">
                    <Coursemanagebar/>
                </div>
                
            </div>
        </div>
    );
}

export default Managecoursepage;