import React from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import { Button, message } from "antd";
import Api from "../../services/Api";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    Api.post("/users", data)
      .then(() => {
        message.success(
          "Cadastro feito com sucesso. Faça o login para continuar."
        );
        navigate("/");
      })
      .catch((error) =>
        message.error(
          "Houve um problema com os servidores. Tente novamente mais tarde."
        )
      );
  };
  return (
    <div className="form-container">
      <h2>Registrar</h2>
      <form onSubmit={handleSubmit(submit)} className="register-form">
        <input
          name="name"
          type="text"
          {...register("name")}
          placeholder="Name"
        />
        <input
          name="username"
          type="text"
          {...register("username")}
          placeholder="Username"
        />
        <input
          name="email"
          type="email"
          {...register("email")}
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <Button type="primary" htmlType="submit">
          Registrar
        </Button>
      </form>
    </div>
  );
}
