import React, { useState, useEffect } from "react";
import "./index.css";
import Api from "../../services/Api";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Modal, Space, Spin, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";

export default function EditTodo() {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const { confirm } = Modal;

  useEffect(() => {
    Api.get(`/todos/${id}`)
      .then(({ data }) => {
        setTodo(data.data);
        setLoading(true);
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
      .then(() => {
        navigate("/todos");
        message.success("Tarefa atualizada com sucesso.");
      })
      .catch((error) =>
        message.error("Aconteceu um erro. Espere um pouco e tente novamente.")
      );
    navigate("/todos");
  };

  function cancel() {
    navigate("/todos");
  }

  function deleteTodo(id) {
    Api.delete(`/todos/${id}`)
      .then(() => {
        message.info("Tarefa deletada com sucesso.");
        navigate("/todos");
      })
      .catch((error) =>
        message.error("Aconteceu um erro. Tente novamente mais tarde.")
      );
  }

  function showDeleteConfirm(id) {
    confirm({
      title: "Tem certeza que quer deletar essa tarefa?",
      icon: <ExclamationCircleOutlined />,
      content: "Uma vez deletada, não há como voltar atrás.",
      okText: "Sim",
      okType: "danger",
      cancelText: "Não",
      onOk() {
        deleteTodo(id);
      },
      onCancel() {
        navigate(`/todos/${id}`);
      },
    });
  }
  return (
    <div className="edit-container">
      <h2>Edit todo here</h2>
      {!loading && (
        <Space>
          <Spin size="large" />
        </Space>
      )}
      <form onSubmit={handleSubmit(submit)} className="edit-form">
        <input
          type="text"
          {...register("content")}
          placeholder="Edite sua tarefa aqui."
        />
        <div className="edit-buttons">
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
              showDeleteConfirm(id);
            }}
          >
            Deletar tarefa
          </Button>
        </div>
      </form>
    </div>
  );
}
