import { useEffect, useState } from 'react';
import { SERVER } from '../../env.js';
import './coding.css';
import { Editor } from '@monaco-editor/react';
import { Rapidapiexecute, execute } from '../api/compiler';
import axios from 'axios';
import { getCache } from '../../caching/cache';

const Coding=()=>{
    const [code, setCode] = useState('');
    const [response, setResponse] = useState('');
    const [student, setStudent] = useState();
    const [codefiles, setCodefiles] = useState();
    const [dfile, setFile] = useState();

    const RandomText =()=>{
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i < 5; i++ )
        {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text
    }
    const getCodefiles=async()=>{
        const res = await axios.get(`${SERVER}/Code/`);
        console.log(res);
        setCodefiles(res);
    }

    const postCodefile=async()=>{
        const type = "playground";
        const date = new Date();
        const filename = student.name+RandomText()+ date;
        const res = await axios.post(`${SERVER}/Code/`, {
            student,
            code,
            type,
            filename
        });
        console.log(res);
    }


    useEffect(()=>{
        console.log(code);
        setStudent(getCache('HDLGenHub_Student'));
        getCodefiles();
    },[code]);
    

    /*
    const handleExecute=async()=>{
        const res = await execute("python","3.10.0", code);
        setResponse(res);
    }
    */
   
    const handleExecute=async()=>{
        const res = await Rapidapiexecute('verilog', code);
        setResponse(res);
    }

    const handleSave=async()=>{
        postCodefile();
        alert("File Saved");
    }

    const handleSelectfile=(file)=>{
        setCode(file.code);
    }
    const delfile=async(id)=>{
        const res = await axios.delete(`${SERVER}/Code/${id}`);
        //alert(res);
        getCodefiles();
    }
    const handleDelete=()=>{
        delfile(dfile._id);
    }

    return(
        <div className='codespace-container mt-20'>
            <div className='codespace-files-conatiner'>
                <div className='codespace-files'>
                    {codefiles?codefiles.data.map((codefile)=>(
                        <div onClick={()=>setFile(codefile)} className='codespace-file-each'>
                            <button onClick={()=>handleSelectfile(codefile)}>{codefile.filename}</button>
                        </div>
                    )):null}
                </div>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <div className='coding-container'>
                <Editor 
                    height="80vh" 
                    width="100%" 
                    defaultLanguage="verilog" 
                    defaultValue="// some comment"
                    theme='vs-dark'
                    value={code}
                    onChange={(e)=>setCode(e)}
                    />
            </div>
            <div className='running-container'>
                <div className='running-saving'>
                    <button onClick={handleExecute}>Run</button>
                    <button onClick={handleSave}>Save</button>
                </div>
                <h1>{response.output}</h1>
            </div>
        </div>
    );
}

export default Coding;