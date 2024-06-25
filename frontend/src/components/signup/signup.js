import { useState } from 'react';
import { SERVER } from '../../env.js';
import './signup.css';
import axios from 'axios';
import { Hashing } from '../../security/hashing';
import { useNavigate } from 'react-router';

const Signup =()=>{
    const [gender, setGender] = useState("");
    const [role, setRole] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup =async()=>{
        console.log({gender, role, firstname, lastname, email, password});
        if(gender && role && firstname && lastname && email && password){
            const name = firstname+" "+lastname;
            var res;
            try{
                if(role==="Student"){
                    res = await axios.post(`${SERVER}/Student`, {
                        name,
                        email,
                        gender,
                        password
                    });
                }
                else{
                    res = await axios.post(`${SERVER}/Teacher`, {
                        name,
                        email,
                        gender,
                        password
                    });
                }
                console.log(res);
                alert("User Registered Succussfuly");
                setFirstName('');
                setLastName('');
                setGender('');
                setRole('');
                setEmail('');
                setPassword('');
                navigate('/signinpage');
            } catch{
                alert("User Registration Failed");
            }
        }
        else{
            alert("Please fill all the fields");
        }
    }

    return(
        <div className="signupcontainer">
            <div className='signupheader'>
                <h1>Sign Up</h1>
            </div>
            <div className='signupinputs'>
                <div className='signupinputfield'>
                    <label>First Name</label>
                    <input type='text' value={firstname} onChange={(e)=>setFirstName(e.target.value)}></input>
                    <label>Last Name</label>
                    <input type='text' value={lastname} onChange={(e)=>setLastName(e.target.value)}></input>
                    <label>Email Address</label>
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <div className='signupselection'>
                <label>Gender</label>
                    <div className='signupgenderselectiondiv'>
                        <label>
                            <input  
                                    className='signupradio'
                                    type='radio' 
                                    name='gender' 
                                    value="Male" 
                                    checked={gender==="Male"}
                                    onChange={()=>setGender("Male")}
                            />
                            Male
                        </label>
                        <label>
                            <input 
                                    className='signupradio'
                                    type='radio' 
                                    name='gender' 
                                    value="Female"
                                    checked={gender==="Female"}
                                    onChange={()=>setGender("Female")}
                            />
                            Female
                        </label>
                    </div>
                    <label>Your Role</label>
                    <div className='signuproleselectiondiv'>
                        <label>
                            <input 
                                    type='radio' 
                                    name='role' 
                                    value="Teacher" 
                                    checked={role==="Teacher"}
                                    onChange={()=>setRole("Teacher")}
                            />
                            Teacher
                        </label>
                        <label>
                            <input 
                                    type='radio' 
                                    name='role' 
                                    value="Student" 
                                    checked={role==="Student"}
                                    onChange={()=>setRole("Student")}
                            />
                            Student
                        </label>
                    </div>
                </div>
            </div>
            <div className='signupbottom'>
                <div className='signupagreementtext'>
                    <label>By clicking "Sign up," you agree to our <span className='signupterms'>
                        <a href='#'>Terms of Use</a>
                        </span> and our <span className='signupprivacy'>
                        <a href='#'>Privacy Policy</a></span>.
                    </label>
                </div>
                <div className='signupbutton'>
                    <button onClick={handleSignup}>Sign Up</button>
                </div>
                <div className='singinhaveacc'>Already have an account? <a href='/signinpage'>Sign In</a></div>
            </div>
        </div>
    );
}

export default Signup;