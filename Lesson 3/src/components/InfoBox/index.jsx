const InfoBox = ({ user }) => {
  return (
    <div style={{ border: "1px solid green", padding: 8, marginTop: 8 }}>
      <b>Đăng ký thành công</b>
      <p>Họ tên: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Mật khẩu: {user.password}</p>
    </div>
  );
};

export default InfoBox;