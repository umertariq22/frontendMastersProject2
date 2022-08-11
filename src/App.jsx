import './App.css'
import Rating from './Rating'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Submit from './Submit';



function App() {

  return (
    <Router>
      <div class="container">
        <Routes>
          <Route path="/" element={<Rating/>}>
          </Route>
          <Route path='/submit' element={<Submit/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App
