import { Button, message } from "antd";
import "./index.css";
import { useForm } from "react-hook-form";
import Api from "../../services/Api";

export default function TodoForm() {
  const { register, handleSubmit } = useForm();
  const user = sessionStorage.getItem("userId");
  const submit = (data) => {
    Api.post("/todos", {
      content: data.content,
      userId: user,
    })
      .then((res) => {
        message.info("Tarefa adicionada com sucesso.");
      })
      .catch((error) =>
        message.error(
          "Houve um problema com os servidores. Tente novamente mais tarde."
        )
      );
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)} className="todo-form">
        <input
          name="content"
          {...register("content")}
          placeholder="What to do today?"
        />
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </form>
    </div>
  );
}
