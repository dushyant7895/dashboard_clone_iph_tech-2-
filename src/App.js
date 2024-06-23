
import './App.css';
import Dashboard from './main/Dashboard';
import SideBar from './main/SideBar';

function App() {
  return (
    <div className='w-full flex '>
      <div className='w-[20%] bg-[#1E293B]'>
        <SideBar />
      </div>
      <div className='w-[80%] bg-[#e8f1fa] '>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
