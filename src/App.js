import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Train from './Train';
import Station from './Station';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Train />} />
        <Route path='/station' element={<Station />} />
      </Routes>
    </Router>
  );
}

export default App;
