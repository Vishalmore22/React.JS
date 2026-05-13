import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../features/auth/authSlice";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^.{6,}$/;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { status, error } = useSelector((s) => s.auth);

  const submit = async (e) => {
    e.preventDefault();

    if (!EMAIL_REGEX.test(email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!PASSWORD_REGEX.test(password)) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    const res = await dispatch(loginUser({ email: email.trim(), password }));
    if (res.meta.requestStatus === "fulfilled") {
      toast.success("Welcome " + res.payload.name);
      nav("/dashboard");
    } else {
      toast.error(res.payload || "Login failed");
    }
  };

  return (
    <div className="login-wrap">
      <form className="card login-card" onSubmit={submit}>
        <h2>HRMS Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          title="Enter a valid email address"
          maxLength={100}
          required
        />
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          minLength={6}
          maxLength={50}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn" disabled={status === "loading"}>
          {status === "loading" ? "..." : "Login"}
        </button>
        {error && <p className="error">{error}</p>}
        <div className="hint">
          <p><b>Demo:</b></p>
          <p>admin@hrms.com / admin123</p>
          <p>manager@hrms.com / manager123</p>
          <p>john@hrms.com / john123</p>
        </div>
      </form>
    </div>
  );
}
