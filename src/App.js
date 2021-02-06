import './App.css';
import Home from './Home';
import Profile from './Profile';
import Users from './functional_component/Users';
import Userclass from './class_component/UserClass';
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Profile /> */}
      <Users data="Data from functional component11" />
      <Userclass />
    </div>
  );
}

export default App;
