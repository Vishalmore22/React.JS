import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  fetchUsers, createUser, updateUser, deleteUser,
} from "../features/users/usersSlice";

// Validation regex
const NAME_REGEX = /^[A-Za-z][A-Za-z\s]{2,49}$/; // letters + spaces, 3-50 chars
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^.{6,}$/; // min 6 chars

// Today's date as YYYY-MM-DD (for date input)
const today = () => new Date().toISOString().split("T")[0];

const blank = {
  name: "",
  email: "",
  password: "",
  role: "employee",
  hourlyRate: 200,
  joinDate: today(), // auto-fill current date
};

export default function AdminUsers() {
  const dispatch = useDispatch();
  const { list } = useSelector((s) => s.users);
  const [form, setForm] = useState(blank);
  const [editing, setEditing] = useState(null);

  useEffect(() => { dispatch(fetchUsers()); }, [dispatch]);

  const validate = () => {
    if (!NAME_REGEX.test(form.name.trim())) {
      toast.error("Name must contain only letters/spaces (3–50 chars)");
      return false;
    }
    if (!EMAIL_REGEX.test(form.email.trim())) {
      toast.error("Please enter a valid email");
      return false;
    }
    if (!editing && !PASSWORD_REGEX.test(form.password)) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    const rate = Number(form.hourlyRate);
    if (Number.isNaN(rate) || rate < 200 || rate > 500) {
      toast.error("Hourly rate must be between 200 and 500");
      return false;
    }
    if (!form.joinDate) {
      toast.error("Join date is required");
      return false;
    }
    return true;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (editing) {
      await dispatch(updateUser({ ...editing, ...form, hourlyRate: +form.hourlyRate }));
      toast.success("User updated");
    } else {
      await dispatch(createUser({ ...form, hourlyRate: +form.hourlyRate }));
      toast.success("User created");
    }
    setForm({ ...blank, joinDate: today() });
    setEditing(null);
  };

  const edit = (u) => {
    setEditing(u);
    setForm({ ...u, joinDate: u.joinDate || today() });
  };

  const remove = async (id) => {
    if (!window.confirm("Delete user?")) return;
    await dispatch(deleteUser(id));
    toast.success("Deleted");
  };

  return (
    <div>
      <div className="card">
        <h3>{editing ? "Edit User" : "Add New User"}</h3>
        <form onSubmit={submit} className="grid">
          <input
            placeholder="Name (letters only, 3–50 chars)"
            value={form.name}
            onChange={(e) =>
              // strip anything that isn't a letter or space as user types
              setForm({ ...form, name: e.target.value.replace(/[^A-Za-z\s]/g, "") })
            }
            pattern="^[A-Za-z][A-Za-z\s]{2,49}$"
            title="Only letters and spaces, 3 to 50 characters"
            minLength={3}
            maxLength={50}
            required
          />
          <input
            placeholder="Email"
            value={form.email}
            type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            placeholder="Password (min 6 chars)"
            value={form.password}
            type="password"
            minLength={6}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required={!editing}
          />
          <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>
          <input
            type="number"
            placeholder="Hourly Rate (200–500)"
            value={form.hourlyRate}
            min={200}
            max={500}
            step={1}
            onChange={(e) => setForm({ ...form, hourlyRate: e.target.value })}
            required
          />
          <input
            type="date"
            value={form.joinDate}
            max={today()}
            onChange={(e) => setForm({ ...form, joinDate: e.target.value })}
            required
          />
          <button className="btn">{editing ? "Update" : "Create"}</button>
          {editing && (
            <button
              type="button"
              className="btn-ghost"
              onClick={() => { setEditing(null); setForm({ ...blank, joinDate: today() }); }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      <div className="card">
        <h3>All Users ({list.length})</h3>
        <table className="tbl">
          <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Rate</th><th>Join</th><th></th></tr></thead>
          <tbody>
            {list.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td><td>{u.email}</td><td>{u.role}</td>
                <td>₹{u.hourlyRate}</td><td>{u.joinDate}</td>
                <td>
                  <button className="btn-sm" onClick={() => edit(u)}>Edit</button>
                  <button className="btn-sm danger" onClick={() => remove(u.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
