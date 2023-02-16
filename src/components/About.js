import React, { useState } from 'react'

export default function About() {
  const [mystyle, setmystyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });
  const [btntext, setbtntext] = useState("Enable Dark Mode")
  let ToggleTheme = ()=>{
    if (mystyle.color === 'black') {
      setmystyle({
        color: 'white',
        backgroundColor: 'black',
        borderRadius:"30px"
      });
      setbtntext("Enable Light Mode")
    }
    else{
      setmystyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setbtntext("Enable Dark Mode")

    }
  }
  return (
    <div>
      <div className="container py-5" style={mystyle}>
        <div className="row h-100 align-items-center py-5">
          <div className="col-lg-6">
            <h1 className="display-4">About us page</h1>
            <p className="lead text-muted mb-0">Create a minimal about us page using Bootstrap 4.</p>
            <p className="lead text-muted">Snippet by </p>
          </div>
        </div>
        <button type='submit' onClick={ToggleTheme} className="btn btn-primary">{btntext}</button>
      </div>
    </div>
  )
}
