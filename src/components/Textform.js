import React, {useState} from 'react'
// import PropTypes from 'prop-types'


export default function Textform(props) {
    const handleUpClick= () =>{
        // console.log("Button Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
        // setCount(text.length);
    }
    const handleLowClick= () =>{
        // console.log("Button Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
        // setCount(text.length);
    }
    const handleclearClick= () =>{
    setText("");
    props.showAlert("Text Cleared", "success");
    }
    const handleOnChange= (event) =>{
        // console.log("On Change");
        // console.log(event.target.value);
        setText(event.target.value);
    }
    const [text,setText] =useState('');  
    // const [count,setCount]= useState(0); 
  return (
    <>
     <div className={`container text-${props.hcolor}`}>
        <div className="mb-3">
        <label  className="form-label"><h1>{props.heading}</h1></label>
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn-primary mx-2"onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn-primary"onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn-primary mx-2"onClick={handleclearClick}>Clear Text</button>
    </div>
    <div className={`container2 text-${props.hcolor}`}>
        <h1>Your Text Summary</h1>
        <p>{(text.split(" ")).length} Words and {text.length} Characters</p>
        <p>{(text.split(" ")).length * 0.008} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
   
  )
}
