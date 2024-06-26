import { useState } from 'react';
import { SERVER } from '../../env.js';
import './signin.css'
import axios from 'axios';
import { setCache } from '../../caching/cache';
import { useNavigate } from "react-router-dom";

const Signin =()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedstudent, setLoggedstudent] = useState("");
    const [loggedteacher, setLoggedteacher] = useState("");
    const navigate = useNavigate();

    const handleSignin =async()=>{
        if(email && password){
            try{
                console.log({email, password});
                const student = await axios.post(`${SERVER}/Student/login`,{
                    email,
                    password
                });
                const teacher = await axios.post(`${SERVER}/Teacher/login`,{
                    email,
                    password
                });
                if(student.data.status === "success"){
                    setLoggedstudent(student);
                    setCache('HDLGenHub_Student', JSON.stringify(student.data.response));
                    setCache('HDLGenHub_User', JSON.stringify({data:student.data.response, role:'student'}));
                    setCache('HDLGenHub_loggedState',1);
                    alert('Student logged');
                    console.log({student, teacher});
                    setEmail('');
                    setPassword('');
                    navigate('/');
                    window.location.reload();
                }
                else if(teacher.data.status === "success"){
                    setLoggedteacher(teacher);
                    setCache('HDLGenHub_Teacher', JSON.stringify(teacher.data.response));
                    setCache('HDLGenHub_User', JSON.stringify({data:teacher.data.response, role:'teacher'}));
                    setCache('HDLGenHub_loggedState',1);
                    alert('Teacher logged');
                    console.log({student, teacher});
                    setEmail('');
                    setPassword('');
                    navigate('/');
                    window.location.reload();
                }
                else if(teacher.data.status === "incorrect password" || student.data.status === "incorrect password"){
                    alert("Incorrect password")
                }
                else if(teacher.data.status === "user not found" || student.data.status === "user not found"){
                    alert("User not found")
                }
                else if(teacher.data.status === "error with login" || student.data.status === "error with login"){
                    alert("Error with login")
                }
            } catch{
                alert('User logging failed');
            }
        }
    }
    return(
        <div className="signincontainer">
            <div className='signinheader'>
                <h1>Sign In</h1>
            </div>
            <div className='signininputs'>
                <div className='signininputfield'>
                    <label>Email Address</label>
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
            </div>
            <div className='signinbottom'>
                <div className='signinforgotpw'><a href='#'>Forgot Password ?</a></div>
                <div className='signinagreementtext'>
                    <label>By clicking "Sign in," you agree to our <span className='signinterms'>
                        <a href='#'>Terms of Use</a>
                        </span> and our <span className='signinprivacy'>
                        <a href='#'>Privacy Policy</a></span>.
                    </label>
                </div>
                <div className='signinbutton hover:scale-105'>
                    <button onClick={handleSignin}>Sign In</button>
                </div>
                <div className='singindonthaveacc'>Don't have an account? <a href='/signuppage'>Sign Up</a></div>
            </div>
        </div>
    );
}

export default Signin;