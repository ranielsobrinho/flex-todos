import "./index.css";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import Api from "../../services/Api";
import { useNavigate } from "react-router-dom";

export default function SignForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    console.log(data);
    Api.post("/auth", data)
      .then(({ data }) => {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("userId", data.userId);
        navigate("/todos");
      })
      .catch((error) => alert("Username ou senha incorretas."));
  };
  return (
    <div className="form-container">
      <h2>Entrar</h2>
      <form onSubmit={handleSubmit(submit)} className="sign-in-form">
        <input
          name="username"
          type="text"
          {...register("username")}
          placeholder="Username"
        />
        <input
          name="password"
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <Button type="primary" htmlType="submit">
          Entrar
        </Button>
      </form>
    </div>
  );
}
