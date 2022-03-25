import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import {categories} from "./sources/data";

function App() {
  return (
    <div className="body">
      <Navbar />
      <div className="container">
        <div className="smallcon"></div>
        <Header />
        <div className="mainContainer">
          <Main data={categories} />
        </div>
      </div>
    </div>
  );
}

export default App;
