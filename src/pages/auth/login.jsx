import "./auth.css";
import { Navbar } from "components";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "contexts/auth-context";
import axios from "axios";

export const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ emailAddress: "", password: "" });
  const { authData, setAuthData } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const formHandler = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  async function LoginHandler(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: formData.emailAddress,
        password: formData.password,
      });

      const {
        status,
        data: { encodedToken, foundUser },
      } = response;

      if (status === 200) {
        localStorage.setItem("token", encodedToken);
        localStorage.setItem("user", JSON.stringify(foundUser));
        setAuthData({
          ...authData,
          isAuthenticated: true,
          user: foundUser,
          token: encodedToken,
        });
      }

      let wasRedirectedFrom = location.state?.from?.pathname || "/";
      navigate(wasRedirectedFrom);
    } catch (error) {
      if (error.response.status === 401) {
        alert(
          "The email and password combination is wrong. Please check it again."
        );
      } else {
        console.error(error.response);
      }
    }
  }

  useEffect(() => {
    document.title = "Padhaku | Login";
  }, []);
  return (
    <>
      <Navbar />
      <main className="login flex flex--center">
        <div className="card p--3 m--y-1">
          <h2 className="h--2">Login</h2>
          <form action="POST" className="flex flex__dir--col align--center">
            <label className="label--text text--sbold">Email Address</label>
            <div className="input__container m--y-0-5">
              <input
                className="input input--text"
                type="email"
                placeholder="frequentbuyer@xmail.com"
                onInput={(e) => formHandler("emailAddress", e.target.value)}
                required
              />
            </div>

            <label className="label--text text--sbold">Password</label>
            <div className="input__container flex flex__dir--row items--center m--y-0-5">
              <input
                className="input input--text"
                type={passwordVisible ? "text" : "password"}
                onChange={(e) => formHandler("password", e.target.value)}
                placeholder="*********"
                required
              />
              <span onClick={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? (
                  <i className="fa fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa fa-solid fa-eye"></i>
                )}
              </span>
            </div>
            <div className="input__container--row m--y-0-5">
              <input id="remember-me" type="checkbox" />
              <label className="label--text" htmlFor="remember-me">
                Remember me
              </label>
            </div>
            <button
              className="btn btn--primary p--1"
              disabled={formData.password.length < 8}
              onClick={(e) => {
                LoginHandler(e);
              }}
            >
              Login
            </button>
          </form>

          <p className="m--y-1 signup-link">
            <Link to="/signup">New user? Create an account here</Link>
          </p>
        </div>
      </main>
    </>
  );
};
