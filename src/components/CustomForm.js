import React, { useState } from 'react'

export default function CustomForm(props) {
    const [text , newtext] = useState("Enter Your Text For Analyzation");
    const Uppercase = ()=>{
        let UpperText = text.toUpperCase();
        newtext(UpperText);
    }   
    const Lowercase = ()=>{
        let LowerCase = text.toLowerCase();
        newtext(LowerCase);
    }   
    const Clear = ()=>{
        let clear = "";
        newtext(clear);
    }    
    const Copy = ()=>{
        var text = document.getElementById("textbox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }      
    const RemoveSpaces = ()=>{
        let filteredtext = text.split(/[ ]+/)
        newtext(filteredtext.join(" "))
    } 
    const ErrorHandler = (event)=>{
        console.log("Error Handler");
        newtext(event.target.value)
    }
    return (
        <div className='container'>
            <h1>{props.BoxTitle}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={ErrorHandler} id="textbox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={Uppercase} >UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={Lowercase} >LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={Clear} >Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={Copy} >Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={RemoveSpaces} >Remove Extra Spaces</button>
            <div className="alert alert-info">
                {text.split(" ").length} Words & {text.length} Characters 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>About {0.008 * text.split(" ").length} Minutes To Read</i>
            </div>
            <div className='alert alert-success'><strong>Preview</strong> <br/> {text}</div>
        </div>
    )
}
