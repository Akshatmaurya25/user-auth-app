import { Link, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'


function App() {
  

  return (
    <>
        <Router>
      <div className='flex flex-col bg-slate-950 h-screen w-screen text-slate-200 justify-center items-center'>
        <div className='flex w-3/6  bg-slate-500'>
      <button className='btn1'>

       <Link to="/login">Login</Link> 
      </button>
      <button className="btn1">

       <Link to="/signup">Sign Up</Link> 
      </button>
      <button className="btn1">

       <Link to="/home">Home</Link> 
      </button>

        </div>
          <Routes>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/signup' element={<Signup/>}></Route>
          <Route exact path='/home' element={<Home/>}></Route>
          </Routes>
      </div>
        </Router>
    </>
  )
}

export default App
