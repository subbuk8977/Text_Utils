import './App.css';
//import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React from 'react'


function App(){
  //const [Mode,setMode] = useState("dark");
  // let toggleMode=()=>{
  //   if(Mode === "light")
  //   {
  //     setMode("dark");
  //     document.style.backgroundColor="light";
  //   }
  //   else
  //     setMode("light");
  //     document.style.backgroundColor="dakr";
  // }
  return(
    <div>
      {/* <Navbar heading="subbu" mode={Mode} toggleMode={toggleMode}/>
      <TextForm /> */}
      {/* <Navbar heading="subbu" mode={Mode} toggleMode={toggleMode}></Navbar> */}
      <TextForm></TextForm>
      
    </div>
  );

}

export default App;
