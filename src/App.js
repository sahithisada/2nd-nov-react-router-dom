import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Tasks from './components/Tasks';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import EditProfile from './components/EditProfile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Leaves from './components/Leaves';
import Pagenotfound from './components/Pagenotfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/tasks" element={<Tasks/>}></Route>
        <Route path="/leaves" element={<Leaves/>}></Route>
        <Route path="/editprofile" element={<EditProfile/>}></Route>
        <Route path="*" element={<Pagenotfound/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
