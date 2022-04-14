import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Component/Layout/header';
import Dashboard from './Component/Dashboard';
import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProject from './Component/Project/AddProject';
import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from './Component/Project/UpdateProject';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/addProject" element={<AddProject />} />
              <Route path="/updateProject/:id" element={<UpdateProject />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
