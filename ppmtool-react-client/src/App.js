import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Component/Layout/header';
import Dashboard from './Component/Dashboard';
import { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddProject from './Component/Project/AddProject';

class App extends Component {
  render() {
    return (  
      <BrowserRouter>    
      <div className="App">
        <Header />
        <Routes>
        <Route path ="/dashboard" element = {<Dashboard />} />
        <Route path ="/addProject" element = {<AddProject />} />
        
        </Routes>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
