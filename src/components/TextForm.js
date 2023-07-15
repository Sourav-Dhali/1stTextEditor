import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("On Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const onLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const onCopyText=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success");
    }
    const ohandleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText (newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");

    }


    const [text, setText] = useState("");

    return (
        <>
            <div className='container' 
            style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} 
                    style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', 
                    color: props.mode === 'dark' ? 'white' : 'black' }} 
                    onChange={handleOnChange} id="myBox" rows="6">

                    </textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={onLowercase}>
                    Convert To Lowerrcase</button>
                <button className="btn btn-primary mx-1" onClick={onCopyText}>
                    Copy to Clipboard</button>
                <button className="btn btn-primary mx-1" onClick={ohandleExtraSpaces}>
                    Remove Extra Spaces</button>
            </div>
            <div className="container my-4" 
            style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summery</h1>
                <p>{text.split(" ").length} Words, {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
