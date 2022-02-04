import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was cicket");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDownClick = () => {
    // console.log("Uppercase was cicket");
    let newText = text.toLowerCase();
    setText(newText);
  }; 
  const handleOnChange = (event) => {
    // console.log("on change clicked");
    setText(event.target.value);
  };
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value); 
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  //state{usestate is hook}
  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743' }}
            id="myBox"
            rows="8"
            
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-1 " onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 " onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 " onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>

      </div>
      <div className="className my-2" style={{color: props.mode==='dark'?'white':'#042743' }}>
          <h3>Your Text Summary</h3>
          <p>{text.split(" ").length} words and {text.length} cahracters</p>
          <p>It will take {0.008 *(text.split(" ").length)} Minutes</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Text Box is Empty"}</p>
      </div>
    </>
  );
}
