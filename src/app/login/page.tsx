"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Box, FormControl, Input, Flex, Center, Text } from "@chakra-ui/react";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>(""); // State for the username input
  const [password, setPassword] = useState<string>(""); // State for the password input
  const [errorMessage, setErrorMessage] = useState<string>(""); // State for storing error messages
  const [show, setShow] = useState(false);

  const router = useRouter();

  const [input, setInput] = useState("");

  const isError = input === "";

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
    <Flex>
      <Box
        height={1070}
        width={1400}
        sx={{
          borderColor: "gray.400",
          border: "solid",
          bg: "white",
        }}>
        <Center>
          <Text fontSize="50px" fontWeight="bold" fontFamily={"Arbutus"}>
            Hi Fi Inc.
          </Text>
        </Center>
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={isError} isRequired backgroundColor="#EDF2F7">
            <Center p={80}>
              <Input
                backgroundColor="#1A202C"
                border="solid"
                borderColor="black"
                borderRadius={10}
                type="text"
                color="white"
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
            </Center>
            <Center p={30}>
              <Input
                backgroundColor="#1A202C"
                isInvalid={isError}
                isRequired
                border="solid"
                borderColor="gray.400"
                borderRadius={10}
                color="white"
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
            </Center>
            <Box>
              <Center>
                <div>
                  <button className="px-4 py-2 bg-blue-400 text-black-50 font-bold rounded-md">
                    Login
                  </button>
                </div>
              </Center>
            </Box>
          </FormControl>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
