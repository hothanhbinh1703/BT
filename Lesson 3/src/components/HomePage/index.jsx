const HomePage = ({ user, onLogout }) => {
  return (
    <div>
      <h2>Xin chào, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={onLogout}>Đăng xuất</button>
    </div>
  );
};

export default HomePage;