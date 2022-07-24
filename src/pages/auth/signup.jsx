import "./auth.css";
import { Navbar } from "components";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "contexts/auth-context";
import axios from "axios";

export const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    confPassword: "",
  });

  const formHandler = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const { authData, setAuthData } = useAuth();
  const navigate = useNavigate();

  async function SignupHandler(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.emailAddress,
        password: formData.password,
      });
      const {
        status,
        data: { encodedToken, createdUser },
      } = response;
      if (Number(status) >= 200 && Number(status) <= 299) {
        localStorage.setItem("token", encodedToken);
        localStorage.setItem("user", JSON.stringify(createdUser));
        setAuthData({
          ...authData,
          isAuthenticated: true,
          user: createdUser,
          token: encodedToken,
        });
      }
    } catch (errorMsg) {
      console.error(errorMsg);
    } finally {
      navigate("/");
    }
  }

  useEffect(() => {
    document.title = "Padhaku | Signup";
  }, []);
  return (
    <>
      <Navbar />
      <main className="signup flex justify--center p--y-1">
        <div className="card p--x-2 p--y-1 m__t-1 m__b-1">
          <h2 className="h--2 m__b-2">Register an account</h2>
          <form action="POST" className="flex flex__dir--col align--center">
            <div className="flex justify--around">
              <div className="flex flex__dir--col justify--start">
                <label className="label--text text--sbold">First Name</label>
                <div className="input__container">
                  <input
                    className="input input--text"
                    type="text"
                    placeholder="John"
                    onInput={(e) => formHandler("firstName", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex flex__dir--col justify--start">
                <label className="label--text text--sbold">Last Name</label>
                <div className="input__container">
                  <input
                    className="input input--text"
                    type="text"
                    placeholder="Doe"
                    onInput={(e) => formHandler("lastName", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex__dir--col m--x-3 m--y-1">
              <label className="label--text text--sbold">Email Address</label>
              <div className="input__container">
                <input
                  className="input input--text"
                  type="email"
                  placeholder="frequentbuyer@xmail.com"
                  onInput={(e) => formHandler("emailAddress", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex items--center justify--evenly gap--1">
              <div className="flex flex__dir--col justify--start">
                <label className="label--text text--sbold">Password</label>
                <div className="input__container flex flex__dir--row items--center justify--around">
                  <input
                    className="input input--text"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="*********"
                    onInput={(e) => formHandler("password", e.target.value)}
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
              </div>

              <div className="flex flex__dir--col justify--start">
                <label className="label--text text--sbold">
                  Confirm Password
                </label>
                <div className="input__container">
                  <input
                    className="input input--text"
                    type="password"
                    placeholder="*********"
                    onChange={(e) =>
                      formHandler("confPassword", e.target.value)
                    }
                    required
                  />
                </div>
              </div>
            </div>
            <div className="input__container--row m--y-1">
              <input id="terms-conditions__check" type="checkbox" required />
              <label htmlFor="terms-conditions__check" className="label--text">
                I accept all
                <Link
                  to="/terms-conditions"
                  className="terms-conditions m--0-5"
                >
                  terms and conditions
                </Link>
              </label>
            </div>

            <button
              className="btn btn--primary p--1"
              disabled={
                formData.password.length < 8 ||
                formData.password !== formData.confPassword
              }
              onClick={(e) => {
                SignupHandler(e);
              }}
            >
              Register
            </button>
          </form>

          <p className="m--y-1 login-link">
            <Link to="/login">Already have an account?</Link>
          </p>
        </div>
      </main>
    </>
  );
};
