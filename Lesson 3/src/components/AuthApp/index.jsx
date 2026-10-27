
import { useState } from "react";
import useLocalStorage from "../../Hook/useLocalStorage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import HomePage from "../HomePage";

const AuthApp = () => {
  const [users, setUsers] = useLocalStorage("users", []);
  const [page, setPage] = useState("login");
  const [currentUser, setCurrentUser] = useState(null);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setPage("home");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setPage("login");
  };

  return (
    <>
      {page === "login" && (
        <LoginPage
          users={users}
          onLoginSuccess={handleLoginSuccess}
          goTo={setPage}
        />
      )}

      {page === "register" && (
        <RegisterPage
          users={users}
          setUsers={setUsers}
          goTo={setPage}
        />
      )}

      {page === "home" && (
        <HomePage
          user={currentUser}
          onLogout={handleLogout}
        />
      )}
    </>
  );
};

export default AuthApp;
