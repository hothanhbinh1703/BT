import { useState } from "react";
import Form from "../Form";

const LoginPage = ({ users, onLoginSuccess, goTo }) => {
  const [message, setMessage] = useState("");

  const handleLogin = (form) => {
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );
    if (!user) {
      setMessage("Sai email hoặc mật khẩu!");
      return;
    }
    onLoginSuccess(user);
  };

  return (
    <div>
      <Form title="Đăng nhập" onSubmit={handleLogin} message={message} />
      <button onClick={() => goTo("register")}>Chưa có tài khoản? Đăng ký</button>
    </div>
  );
};

export default LoginPage;