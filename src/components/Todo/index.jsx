import React, { useState, useEffect } from "react";
import "./index.css";
import { Button, Card } from "antd";
import Api from "../../services/Api";
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const id = sessionStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    Api.get(`/users/${id}`)
      .then(({ data }) => {
        setTodos(data.data.todos);
      })
      .catch((err) => console.log(err));
  });

  function editTodo(id) {
    navigate(`/todos/${id}`);
  }
  return (
    <div className="todo-container">
      {todos.map((todo) => {
        return (
          <Card key={todo.id} className="card-content">
            <p>{todo.content}</p>
            <div>
              <Button
                type="link"
                onClick={() => {
                  editTodo(todo.id);
                }}
              >
                Edit
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
