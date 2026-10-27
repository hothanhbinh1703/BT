import { useState } from "react";
import Form from "../Form";
import InfoBox from "../InfoBox";

const RegisterPage = ({ users, setUsers, goTo }) => {
  const [message, setMessage] = useState("");
  const [registered, setRegistered] = useState(null);

  const handleRegister = (form) => {
    if (users.some((u) => u.email === form.email)) {
      setMessage("Email đã tồn tại!");
      setRegistered(null);
      return;
    }
    setUsers([...users, form]);
    setMessage("");
    setRegistered(form);
  };

  return (
    <div>
      <Form title="Đăng ký" isRegister onSubmit={handleRegister} message={message} />
      {registered && <InfoBox user={registered} />}
      <button onClick={() => goTo("login")}>Đã có tài khoản? Đăng nhập</button>
    </div>
  );
};

export default RegisterPage;