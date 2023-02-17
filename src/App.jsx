import {BrowserRouter, Routes, Route} from "react-router-dom";
import Courses from "./components/Courses";
import Addcourse from "./components/Addcourse";
import Editcourse from "./components/Editcourse";
import Login from "./components/Login";
function App() {

  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route  path="/courses" element={<Courses/>}/>
          <Route path="/add" element={<Addcourse/>}/>
          <Route path="/edit/:id" element={<Editcourse/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
