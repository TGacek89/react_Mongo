import React from "react";
import { Route, Routes } from "react-router-dom";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import "./App.css";
import Detail from "./components/detail";

const App = () => {
  return (
    <div>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
