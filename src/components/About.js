import React,{useState} from 'react'

export default function About() {

    const [myStyle, setmyStyle] = useState({
        color:'white',
        backgroundColor:'cyan'
    })
    const [btnText, setbtnText] = useState(" Dark Mode")
    const Toggle= () =>{
        if(myStyle.backgroundColor === 'cyan')
          {
            setmyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setbtnText("White Mode");

          }
            else{
                setmyStyle({
                    color:'white',
                    backgroundColor:'cyan'
                })
                setbtnText("Dark Mode");

            }
    }
  return (
    <div className='container' style={myStyle}>
        <h1>About us </h1>
        <div className="alert alert-primary" role="alert">
        This is a primary alert with <a href="\" className="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div className="alert alert-secondary" role="alert">
        This is a secondary alert with <a href="\" className="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div className="alert alert-success" role="alert">
        This is a success alert with <a href="\" className="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div className="alert alert-danger" role="alert">
        This is a danger alert with <a href="\" className="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div className="alert alert-warning" role="alert">
        This is a warning alert with <a href="\" className="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div className="alert alert-info" role="alert">
        This is a info alert with <a href="\" className="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div className="alert alert-light" role="alert">
        This is a light alert with <a href="\" className="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div className="alert alert-dark" role="alert">
        This is a dark alert with <a href="\" className="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div className="container">
        <button type="button" className="btn btn-dark" onClick={Toggle}>{btnText}</button> 
        </div>
       
    </div>
  )
}
