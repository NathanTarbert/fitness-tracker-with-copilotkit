"use client";
import { useState, FormEvent, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const [username, setUsername] = useState<string>(""); // State for the username input
  const [password, setPassword] = useState<string>(""); // State for the password input
  const [errorMessage, setErrorMessage] = useState<string>(""); // State for storing error messages
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log({ handleSubmit });
    event.preventDefault(); // Prevent the default form submission behavior

    if (!username || !password) {
      setErrorMessage("Username and password are required"); // Set an error message if fields are empty
      return;
    }
    setErrorMessage(""); // Clear any existing error messages

    // Make an API request to the login endpoint
    // const searchParams = useSearchParams();
    // const code = searchParams.get("code");
    // console.log({ code });

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const { success, message } = await res.json();
      if (success == true) {
        router.push("/");
      }
      //handle fail state
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Home;
