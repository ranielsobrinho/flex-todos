import React from "react";
import Header from "../../components/Header";
import Todo from "../../components/Todo";
import TodoForm from "../../components/TodoForm";

export default function TodosPage() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todo />
    </div>
  );
}
