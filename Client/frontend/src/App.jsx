import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from "./components/Landing";
import CreateCourse from './components/CreateCourse';
import Register from './components/Register';
import ShowCourses from './components/ShowCourses';
import AppBar from './components/AppBar';
import Courses from './components/Courses';

// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
    return (
        <div style={{
            backgroundColor:"#e5e0e0",
            minWidth:"100vw",
            minHeight:"100vh"
        }}>
            
              <Router>
              <AppBar></AppBar>
            <Routes>
                
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/CreateCourse" element={<CreateCourse />} />
                <Route path="/courses" element={<Courses />} />
            </Routes>
        </Router>

        </div>
      
    );
}

export default App;