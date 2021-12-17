import { Button } from "antd";
import "./index.css";
import { useForm } from "react-hook-form";

export default function TodoForm() {
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    console.log(data);
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
