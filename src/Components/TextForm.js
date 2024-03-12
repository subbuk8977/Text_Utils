import React,{useState} from 'react'


export default function (props) {

  const [text,setText]=useState("Enter data");
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  const changeUpper=()=>{
    setText(text.toUpperCase());
  }

  const changeLower=()=>{
    setText(text.toLowerCase());
  }

  const clearText=()=>{

    setText("");
  }


  // const [Mode, setMode] = useState({
  //   color : 'light',
  //   backgroundColor : 'dark'
  // })

  // let toggleMode=()=>{
  //   setMode.color='dark'
  //   setMode.backgroundColor='light'
  // }
  
  return (
    
      <div className={`text-${props.mode === 'light'}?'dark':'light'`}>
        <div className='container'>
          <h1>Enter your Text Analyze</h1>
          <div className="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={handleOnChange} rows="3"></textarea>
          </div>
          <button className="btn btn-primary" onClick={changeUpper}>UPPERCASE</button>
          <button className="btn btn-primary mx-2" onClick={changeLower}>LOWERCASE </button>
          <button className="btn btn-primary mx-2" onClick={clearText}>CLEAR </button>
          {/* <button className="btn btn-primary mx-2" style={Mode}>Dark Mode </button> */}
          <div>
            Total No of Words:{text.split(" ").filter((element)=>{return element.length !== 0}).length}
            <br></br>Total No of Characters:{text.length}   
          </div>
        </div>
      </div>
    
    
  )
}
 