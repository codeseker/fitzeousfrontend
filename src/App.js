import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Room from "./Components/Room";
import Signup from "./Components/Signup";

import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Main />} />
        <Route path="/room/:roomID" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
