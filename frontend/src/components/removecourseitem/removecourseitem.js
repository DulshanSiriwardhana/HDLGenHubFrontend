import { useEffect, useState } from 'react';
import { SERVER } from '../../env.js';
import './removecourseitem.css';
import axios from 'axios';
import { useParams } from 'react-router';

const Removecourseitem =()=>{
    const [isOpen, setIsOpen] = useState(1);
    const [coursecomponents, setCoursecomponents] = useState();
    const [checked, setChecked] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const fetchCourses=async()=>{
            const res = await axios.get(`${SERVER}/Coursecomponent/course/${id}`);
            setCoursecomponents(res.data);
        }
        fetchCourses();
    },[])

    const handleClose =()=>{
        setIsOpen(0);
    }
    const handleChnage=(e)=>{
        if(checked.includes(e)){
            var tempList = checked;
            tempList = tempList.filter(item => item!=e);
            setChecked(tempList);
            console.log(checked);
        }
        else{
            var tempList = checked;
            tempList.push(e);
            console.log(tempList);
        }
    }
    const deleteCoursecomponent=async(coursecomponentid)=>{
        const res = await axios.delete(`${SERVER}/Coursecomponent/${coursecomponentid}`);
        console.log("response: ", res);
    }
    const handleDelete=()=>{
        console.log(JSON.stringify(checked));
        checked.map(com=>{
            deleteCoursecomponent(com);
        })
    }

    if(isOpen){
        return(
            <div className="removecourseitemcontainer">
                <div className='removecourseitem-button'>
                    <button onClick={handleClose}>X</button>
                </div>
                <div className='removecourseitem'>
                    <div className="removecourseitem-select">
                        <h1>Select items</h1>
                        <div className='removecourseitem-select-items'>
                                {coursecomponents?(coursecomponents.map(item=>{
                                    return (
                                    <label key={item._id}>
                                        <input 
                                                type='checkbox' 
                                                name='item' 
                                                value={item._id}
                                                onChange={()=>handleChnage(item._id)}
                                        />
                                        {item.name}
                                    </label>
                                )
                                })):<h1> Loading...</h1>}


                        </div>
                    </div>
                    <button onClick={handleDelete}>Remove</button>
                </div>
            </div>
        );
    }
}

export default Removecourseitem;