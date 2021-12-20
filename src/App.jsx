import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import TodosPage from "./pages/TodosPage";
import EditTodo from "./pages/EditTodo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/todos" exact element={<TodosPage />} />
        <Route path="/todos/:id" exact element={<EditTodo />} />
      </Routes>
    </Router>
  );
}

export default App;
