import { useEffect, useState } from 'react';
import { SERVER } from '../../env.js';
import './creationpage.css';
import { getCache } from '../../caching/cache';
import axios from 'axios';
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router';

const CreationPage =()=>{
    const [teacher, setTeacher] = useState();
    const [name, setName] = useState();
    const [coverimage, setCoverimage] = useState();
    const [description, setDescription] = useState();
    const [createdby, setCreatedby] = useState();
    const [quizheading, setQuizheading] = useState();
    const [quizdescription, setQuizdescription] = useState();
    const [newquizid, setNewquizid] = useState();
    //const [newquestionid, setNewquestionid] = useState();
    const [question, setQuestion] = useState();
    const [questionimage, setQuestionimage] = useState();
    const [correctanswer, setCorrestanswer] = useState();
    const [wronganswer1, setWronganswer1] = useState();
    const [wronganswer2, setWronganswer2] = useState();
    const [wronganswer3, setWronganswer3] = useState();
    const [marks, setMarks] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        setTeacher(getCache('HDLGenHub_Teacher'));
        setCreatedby(getCache('HDLGenHub_Teacher')._id);
    },[])

    const postCourse=async()=>{
        if(name && coverimage && description){
            const res = await axios.post(`${SERVER}/Course/`, {
                name,
                coverimage,
                description,
                createdby
            })
            console.log(res);
            alert(name,' is created');
            setName('');
            setCoverimage('');
            setDescription('');
        }
    }

    const handleAddquestion=async()=>{
        console.log(newquizid);
        if(!newquizid){
            const name = quizheading;
            const description = quizdescription;
            try{
                const resquiz = await axios.post(`${SERVER}/Quiz/`,{
                    name,
                    description                    
                })
                setNewquizid(resquiz.data._id);
                alert(resquiz.data._id);
                const quizid = resquiz.data._id;
                const problem = question;
                const image = questionimage;
                const answer = correctanswer;
                try{
                    const resquestion = await axios.post(`${SERVER}/Question/`,{
                        quizid,
                        problem,
                        image,
                        answer,
                        wronganswer1,
                        wronganswer2,
                        wronganswer3,
                        marks
                    })
                    alert(resquestion);
                    console.log(resquestion);
                } catch{
                    alert("Error creating question");
                }
            } catch{
                alert("Error creating the quiz");
            }
        }
        else{
            const quizid = newquizid;
            const problem = question;
            const image = questionimage;
            const answer = correctanswer;
            try{
                const resquestion = await axios.post(`${SERVER}/Question/`,{
                    quizid,
                    problem,
                    image,
                    answer,
                    wronganswer1,
                    wronganswer2,
                    wronganswer3,
                    marks
                })
                alert(resquestion);
                console.log(resquestion);
            } catch{
                alert("Error creating question");
            }
        }
    }
    const handleSavequiz=async()=>{
        alert(newquizid);
        setNewquizid(null);
        console.log(newquizid);
        const teacherid = teacher._id;
        try{
            const resquiz = await axios.put(`${SERVER}/Quiz/${newquizid}`,{
                teacherid                   
            })
            console.log(resquiz);
        } catch{
            alert("Error saving the quiz");
        }
    }
    const handleGotoquizes=()=>{
        navigate('/quizpage');
    }

    return(
        <div className='creationpagecontainer'>
            <div className='creationcoursecontainer'>
                <h1>Course Creation</h1>
                <div className='creationcourseform'>
                    <label>Course Heading</label>
                    <input alt='name' value={name} onChange={(e)=>setName(e.target.value)} type='text'></input>
                    <label>Cover Image Url</label>
                    <input alt='coverimage' value={coverimage} onChange={(e)=>setCoverimage(e.target.value)} type='text'></input>
                    <label >Course Description</label>
                    <input alt='description' value={description} onChange={(e)=>setDescription(e.target.value)} className='creationcourseform-description' type='text'></input>
                    <button onClick={postCourse}>Create Course</button>
                </div>
            </div>
            <div className='creationquizcontainer'>
                <h1>Quiz Creation</h1>
                <div className='creationquizform'>
                    <label>Quiz Heading</label>
                    <input alt='quizheading' value={quizheading} onChange={(e)=>setQuizheading(e.target.value)} type='text'></input>
                    <label>Quiz Description</label>     
                    <input style={{minHeight:"260px"}} alt='quizdescription' value={quizdescription} onChange={(e)=>setQuizdescription(e.target.value)} type='text'></input>
                    <Popup className='quizcreation-button' trigger={
                        <button>
                            Add a question
                        </button>
                    } modal nested>{
                        <div className='quizcreation-popup'>
                            <div className='quizcreation-popup-form'>
                                <label>Question</label>
                                <input onChange={(e)=>setQuestion(e.target.value)} type='text'></input>
                                <label>Question Image</label>
                                <input onChange={(e)=>setQuestionimage(e.target.value)} type='text'></input>
                                <label>Correct Answer</label>
                                <input onChange={(e)=>setCorrestanswer(e.target.value)} type='text'></input>
                                <label>Wrong Answer 1</label>
                                <input onChange={(e)=>setWronganswer1(e.target.value)} type='text'></input>
                                <label>Wrong Answe 2r</label>
                                <input onChange={(e)=>setWronganswer2(e.target.value)} type='text'></input>
                                <label>Wrong Answer 3</label>
                                <input onChange={(e)=>setWronganswer3(e.target.value)} type='text'></input>
                                <label>Mark</label>
                                <input onChange={(e)=>setMarks(e.target.value)} type='text'></input>
                                <button onClick={handleAddquestion}>Add</button>
                            </div>
                        </div>
                    }</Popup>   
                    <button onClick={handleSavequiz}>Save Quiz</button>
                    <button onClick={handleGotoquizes}>Go to Quizes</button>
                </div>
            </div>

            {/*<div className='challenges-creation-container'>
                <h1>Course Creation</h1>
                <div className='creationchallengesform'>
                    <label>Challenge Heading</label>
                    <input alt='name' value={name} onChange={(e)=>setQuizheading(e.target.value)} type='text'></input>
                    <label >Challenge Description</label>
                    <input alt='description' value={description} onChange={(e)=>setDescription(e.target.value)} className='creationchallengeform-description' type='text'></input>
                    <label>Is Challenge Private</label>
                    <div className='challenges-radio'>
                        <div>
                            <label>Yes</label>
                            <input name='bool' type='radio'/>
                        </div>
                        <div>
                            <label>No</label>
                            <input name='bool' type='radio'/>
                        </div>
                    </div>
                    <button onClick={postCourse}>Create Course</button>
                </div>
            </div>*/}
        </div>
    )
}

export default CreationPage;