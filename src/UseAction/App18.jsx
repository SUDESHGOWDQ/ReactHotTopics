import  { useState } from 'react';
import { loginUser } from './UseAction/user'; 

const LoginReact18 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setError(null);
    setUser(null);

    try {
      const response = await loginUser(username, password);
      setUser(response.data);
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={isPending}>
        {isPending ? 'Logging in...' : 'Login'}
      </button>

      {user && (
        <p style={{ color: 'green' }}>Logged in: {user.email}</p>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default LoginReact18;
