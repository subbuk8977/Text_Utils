import React,{useState} from 'react'


export default function About(props) {

    // const [myStyle,setMyStyle]=useState(
    //     {
    //         color:"white",
    //         backgroundColor:"black"
    //     }
    // )
    
    // const [btn,setBtn]=useState("Enable Dark Mode")
    let myStyle={
        color: props.mode === 'dark'?'light':'dark',
        backgroundColor: props.mode === 'dark'?'black':'white'
    }

    // let toggleMode=()=>{

    //     if(myStyle.color === 'white')
    //     {
    //         setMyStyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         setBtn("Enable Dark Mode");
    //     }
    //     else
    //     {
    //         setMyStyle({
    //             color:"white",
    //             backgroundColor:"black"
    //         })
    //         setBtn("Enable Light Mode");
    //     }
    // }
  return (
    <div>
        <div className="container" style={myStyle}>
            <h1>Hello World</h1>
            <button className='btn btn-dark' onClick={toggleMode}>{btn}</button>
            {/* <button className='btn btn-primary mx-2' onClick={darkMode}>Disable Dark Mode</button> */}
        </div>
    </div>
  )
}
