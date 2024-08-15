"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  FormControl,
  Input,
  Button,
  ButtonGroup,
  Switch,
  FormLabel,
  Divider,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import App from "../components/App";
import { Arbutus } from "next/font/google";
import { request } from "http";

const Home: React.FC = () => {
  const [username, setUsername] = useState<string>(""); // State for the username input
  const [password, setPassword] = useState<string>(""); // State for the password input
  const [errorMessage, setErrorMessage] = useState<string>(""); // State for storing error messages
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // console.log({ username });
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
    <Box
      h="200px"
      className="flex items-center justify-between p-6 lg:px-8 shadow sticky bg-white bg-opacity-50 backdrop-blur-lg backdrop-filter dark:border dark:border-gray-100/10 dark:bg-boxdark-2 bg-slate-50"
      aria-label="Global">
      <form onSubmit={handleSubmit}>
        <Input
          paddingLeft={20}
          type="text"
          color="black"
          fontFamily={"Arbutus"}
          fontSize={25}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          _hover={{
            borderColor: "gray.400",
          }}
          _focus={{
            borderColor: "gray.400",
          }}
          sx={{
            "::placeholder": {
              color: "gray.400",
            },
          }}
        />

        <Input
          color="black"
          fontFamily={"Arbutus"}
          fontSize={25}
          placeholder="Password"
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          _hover={{
            borderColor: "gray.400",
          }}
          _focus={{
            borderColor: "black.500",
          }}
          sx={{
            "::placeholder": {
              color: "gray.500",
            },
          }}
        />

        {errorMessage && <p>{errorMessage}</p>}
        <Box paddingLeft={20} paddingTop={40}>
          <button
            className="px-4 py-2 bg-blue-500 text-blue-50 rounded-md"
            type="submit">
            Login
          </button>
        </Box>
      </form>
      <Box fontSize={30} fontFamily={"Arbutus"} paddingBottom={80}>
        HI FI Inc.
      </Box>
    </Box>
  );
};

export default Home;
