import React, { useState, useEffect } from "react";
import Api from "../../services/Api";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useForm } from "react-hook-form";

export default function EditTodo() {
  const [todo, setTodo] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    Api.get(`/todos/${id}`)
      .then(({ data }) => {
        setTodo(data.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    reset({
      content: todo.content,
    });
  }, [reset, todo]);

  const submit = (data) => {
    Api.put(`/todos/${id}`, {
      content: data.content,
      id: id,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
    navigate("/todos");
  };

  function cancel() {
    navigate("/todos");
  }

  function deleteTodo(id) {
    Api.delete(`/todos/${id}`)
      .then((res) => {
        alert("Tarefa deletada com sucesso.");
        cancel();
      })
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <h2>Edit todo here</h2>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          {...register("content")}
          placeholder="Edite sua tarefa aqui."
        />
        <Button type="primary" htmlType="submit">
          Editar
        </Button>
        <Button
          type="text"
          onClick={() => {
            cancel();
          }}
        >
          Cancelar
        </Button>
        <Button
          type="link"
          onClick={() => {
            deleteTodo(id);
          }}
        >
          Deletar tarefa
        </Button>
      </form>
    </div>
  );
}
