import React, { useState, useTransition } from 'react';

const mockUserCredentials = { username: 'user123', password: 'password123' };
const initialBalance = 1000;

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [balance, setBalance] = useState(initialBalance);
  const [transferAmount, setTransferAmount] = useState('');
  const [message, setMessage] = useState('');

  // State for managing the transition
  const [isPending, startTransition] = useTransition();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   startTransition(() => {
  //     if (username === mockUserCredentials.username && password === mockUserCredentials.password) {
  //       setIsLoggedIn(true);
  //       setMessage('Login successful! Welcome.');
  //     } else {
  //       setMessage('Invalid username or password.');
  //     }
  //   });
  // };

  const handleLogin = e => {
    e.preventDefault();

    // Simulate a "slow" process (like an API call or validation)
    setTimeout(() => {
      if (
        username === mockUserCredentials.username &&
        password === mockUserCredentials.password
      ) {
        setIsLoggedIn(true); // Blocks the UI during state update
        setMessage('Login successful! Welcome.');
      } else {
        setMessage('Invalid username or password.');
      }
    }, 2000); // Simulate delay (e.g., network request)
  };

  // Handle transfer funds
  const handleTransfer = e => {
    e.preventDefault();

    // Use startTransition for the transfer operation
    startTransition(() => {
      const amount = parseFloat(transferAmount);
      if (isNaN(amount) || amount <= 0) {
        setMessage('Please enter a valid amount.');
      } else if (balance >= amount) {
        setBalance(balance - amount);
        setMessage(`Transfer successful! New balance: $${balance - amount}`);
      } else {
        setMessage('Insufficient funds.');
      }
    });
    setTransferAmount('');
  };

  // Render login screen or dashboard based on login status
  return (
    <div className='App'>
      <h1>Online Banking App</h1>
      {!isLoggedIn ? (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Username:</label>
              <input
                type='text'
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button type='submit'>Login</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      ) : (
        <div>
          <h2>Dashboard</h2>
          <p>Your current balance: ${balance}</p>
          <div>
            <h3>Transfer Money</h3>
            <form onSubmit={handleTransfer}>
              <div>
                <label>Transfer Amount:</label>
                <input
                  type='number'
                  value={transferAmount}
                  onChange={e => setTransferAmount(e.target.value)}
                  min='1'
                />
              </div>
              <button type='submit'>Transfer</button>
            </form>
          </div>
          {message && <p>{message}</p>}
          <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
        </div>
      )}
      {isPending && <p>Loading...</p>}{' '}
      {/* Show loading indicator while transition is happening */}
    </div>
  );
}
