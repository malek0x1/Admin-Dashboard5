import './App.css';
import Main from './Components/Main/Main';
import RightBar from './Components/RightBar/RightBar';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
     <SideBar/>
     <Main/>
     <RightBar/>
    </div>
  );
}

export default App;
