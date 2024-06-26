import { useState } from 'react';
import './addcourseitem.css';
import Addingvideo from '../additemsforms/addingvideo/addingvideo';
import Addingdocument from '../additemsforms/addingdocument/addingdocument';
import Addingquiz from '../additemsforms/addingquiz/addingquiz';
import Addingassignment from '../additemsforms/addingassignment/addingassignment';

const Addcourseitem =()=>{
    const [isOpen, setIsOpen] = useState(1);
    const [value, setValue] = useState();

    const handleClose =()=>{
        setIsOpen(0);
    }

    const handleSelect =(e)=>{
        setValue(e.target.value);
    }

    if(isOpen){
        return(
            <div className="addcourseitemcontainer">
                <div className='addcourseitem-button'>
                    <button onClick={handleClose}>X</button>
                </div>
                <div className='addcourseitem'>
                    <div className="addcourseitem-select">
                        <h2>Select Item</h2>
                        <select value={value} onChange={handleSelect}>
                            <option value="video">video</option>
                            <option value="document">document</option>
                            <option value="quiz">quiz</option>
                            <option value="assignment">assignment</option>
                            <option value="poster">poster</option>
                        </select>
                    </div>
                    {(value==="video")?(
                        <Addingvideo/>
                    ):(value==="document")?(
                        <Addingdocument/>
                    ):(value==="quiz")?(
                        <Addingquiz/>
                    ):(value==="assignment")?(
                        <Addingassignment/>
                    ):(value==="poster")?(
                        <Addingvideo/>
                    ):
                        <Addingvideo/>
                    }
                </div>
            </div>
        );
    }
}

export default Addcourseitem;