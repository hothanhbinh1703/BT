import { useState } from "react";

const Form = ({ title, isRegister, onSubmit, message }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {isRegister && (
        <div>
          <input name="name" placeholder="Họ tên" value={form.name} onChange={handleChange} required />
        </div>
      )}
      <div>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      </div>
      <div>
        <input name="password" type="password" placeholder="Mật khẩu" value={form.password} onChange={handleChange} required />
      </div>
      <button type="submit">{title}</button>
      <p>{message}</p>
    </form>
  );
};

export default Form;