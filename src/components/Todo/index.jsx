import React, { useState, useEffect } from "react";
import "./index.css";
import { Card } from "antd";
import Api from "../../services/Api";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const id = sessionStorage.getItem("userId");

  useEffect(() => {
    Api.get(`/users/${id}`)
      .then(({ data }) => {
        setTodos(data.data.todos);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="todo-container">
      {todos.map((todo) => {
        return (
          <Card key={todo.id}>
            <p>{todo.content}</p>
          </Card>
        );
      })}
    </div>
  );
}
