import React from "react";
import "./index.css";
import { Button, Layout } from "antd";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { Header } = Layout;
  const navigate = useNavigate();

  function logOut() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    navigate("/");
  }

  return (
    <div>
      <Header>
        <h2 className="logo">Todo's here</h2>
        <div className="button">
          <Button
            type="link"
            onClick={() => {
              logOut();
            }}
          >
            Sair
          </Button>
        </div>
      </Header>
    </div>
  );
}
