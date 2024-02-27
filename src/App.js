import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from "./components/Alert";
import Textform from './components/Textform';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [hcolor, setHcolor] = useState("black"); // whether darkmode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  const toggleMode=() =>{
    if(mode==="light")
      {
        setMode("#212529");
        setHcolor("white");
        document.body.style.backgroundColor = 'black';
        showAlert("dark Mode is being enabled","success");
        document.title="TextUtils - Dark Mode";
        // setInterval(() => {
        //   document.title="TextUtils is amazing";
        // }, 2000);
        // setInterval(() => {
        //   document.title="Install TextUtils now";
        // }, 1500);
      }
      else
      {
        setMode("light");
        setHcolor("black");
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode is being enabled","success");
        document.title="TextUtils - Light Mode";
      }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="Transformation literally means going beyond your form." mode={mode} toggleMode={toggleMode} hcolor={hcolor}/>
    {/* style={{backgroundColor: "orange"}} */}
    <Alert alert={alert}/>
   <div className="container">
   {/* <Router> */}
   {/* <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
          <Textform showAlert={showAlert} heading=" Enter the data to Analyze below :" hcolor={hcolor}/>
          </Route>
        </Switch> */}
   {/* <Routes>
        <Route path="/" element={<Textform showAlert={showAlert} heading=" Enter the data to Analyze below :" hcolor={hcolor}/>} />
        <Route path="/about" element={<About/>} />
    </Routes>
   </Router> */}
   <Textform showAlert={showAlert} heading=" Enter the data to Analyze below :" hcolor={hcolor}/>
   </div>
   </>
  );
}

export default App;
