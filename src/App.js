// import logo from './logo.svg';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const txt= " This is a new  ";
  const txt2 = 12;
  return (
    <div className="App">
    <Navbar/>
      <div className="content"> 
    <Home/>
 </div>
    </div>
  );
}

export default App;
