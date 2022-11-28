import "./styles.css";
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


  const App = ()=> {
  const pageSize = 5;
  const apiKey = "165e0500ff2e46f9ae0052b9bc4729ae"
  const [progress, setProgress] = useState(0)


  return (
    <div>
      <Router>
      <Navbar/> 
      <LoadingBar
      height={3}
      color='#f11946'
      progress={progress} 
      />
        
      
       <Routes>
        <Route exact path="/" key="general" element={<News setProgress ={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general"/>}/>
        <Route exact path="/business" key="business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="business"/>}/>
        <Route exact path="/entertainment" key="entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment"/>}/>
        <Route exact path="/general" key="general" element={<News setProgress = {setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general"/>}/>
        <Route exact path="/health" key="health" element={<News setProgress = {setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="health"/>}/>
        <Route exact path="/science" key="science" element={<News setProgress = {setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="science"/>}/>
        <Route exact path="/sports" key="sports" element={<News setProgress = {setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="sports"/>}/>
        <Route exact path="/technology" key="technology" element={<News setProgress = {setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="technology"/>}/>
       </Routes>
       </Router> 
     </div> 
  
     )
  }
  export default App;
