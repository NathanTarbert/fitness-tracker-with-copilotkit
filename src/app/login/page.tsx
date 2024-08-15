"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  FormControl,
  Input,
  Form,
  Button,
  FormErrorMessage,
  Flex,
  Switch,
  FormLabel,
  Divider,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

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
    <Box textAlign="left" px={3}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          color="black"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          _hover={{
            borderColor: "gray.300",
          }}
          _focus={{
            borderColor: "blue.500",
          }}
          sx={{
            "::placeholder": {
              color: "gray.400",
            },
          }}
        />

        <Input
          type="text"
          color="black"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          _hover={{
            borderColor: "gray.300",
          }}
          _focus={{
            borderColor: "blue.500",
          }}
          sx={{
            "::placeholder": {
              color: "gray.400",
            },
          }}
        />

        {/* <div>
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
        </div> */}
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </Box>
  );
};

export default Home;
