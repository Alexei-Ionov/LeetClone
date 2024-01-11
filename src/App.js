import './App.css';
import Navbar from './components/ Navbar';
import Problems from './pages/Problems';
import Progress from './pages/Progress';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Tools from './pages/Tools';
import ProblemFramework from './Problems-Folder/ProblemFramework';
import TimeAnalyzer from './components/TimeAnalyzer';


function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/progress' element={<Progress/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/problems' element={<Problems/>}/>
          <Route path='/tools' element = {<Tools/>}/>
          <Route path='/tools/time-analyzer' element = {<TimeAnalyzer/>}/>
          <Route path='/problems/two-sum' element={<ProblemFramework id={0}/>}/>
          <Route path='/problems/three-sum' element={<ProblemFramework id={1}/>}/>

        </Routes>

      </div>
      
      
    
    </>
   
  );
}

export default App;
