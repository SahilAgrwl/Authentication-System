import { useAuthSession } from '../hooks/useAuthSession';
import { useState } from 'react';

export default function Home() {
  const { user, login, logout, loading } = useAuthSession();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="card">
        {user ? (
          <div>
            <h1>Welcome, {user.username}</h1>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
}
