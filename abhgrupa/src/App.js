import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const App =() => {
  return (
    <>
      <Router>
        <Navbar>
          <Routes>
            <Route exact path='/' />
          </Routes>
        </Navbar>
      </Router>
    </>
  );
}

export default App;
