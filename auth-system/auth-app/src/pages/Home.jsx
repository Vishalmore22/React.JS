import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from '../features/auth/authSlice';

export default function Home() {
  const user = useSelector((s) => s.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    toast.info('Logged out');
    navigate('/login');
  };

  return (
    <div className="home">
      <div className="card">
        <h2>Welcome, {user.name} </h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}
