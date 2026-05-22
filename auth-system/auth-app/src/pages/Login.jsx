import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../features/auth/authSlice';
import Loader from '../components/Loader';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((s) => s.auth);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return toast.error('Invalid email');
    if (!form.password) return toast.error('Password required');
    const res = await dispatch(loginUser(form));
    if (loginUser.fulfilled.match(res)) {
      toast.success(`Welcome ${res.payload.name}`);
      navigate('/');
    } else {
      toast.error(res.payload || 'Login failed');
    }
  };

  return (
    <>
      <div className="auth-wrap">
        <form className="card" onSubmit={onSubmit}>
          <h2>Sign in</h2>
          <input name="email" placeholder="Email" value={form.email} onChange={onChange} />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} />
          <button disabled={loading}>{loading ? <Loader /> : 'Login'}</button>
          <p>No account? <Link to="/register">Register</Link></p>
        </form>
      </div>
    </>
  );
}
