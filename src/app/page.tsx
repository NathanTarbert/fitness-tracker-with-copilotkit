"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import "@copilotkit/react-textarea/styles.css";
import App from "./components/App";
import CreateFitness from "./create/page";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  //handle loading state

  //   useEffect(() => {
  //     const userToken = localStorage.getItem("userToken");

  //     if (!userToken) {
  //       router.push("/login");
  //     } else {
  //       setIsLoading(false);
  //     }
  //   }, [router]);

  //   if (isLoading) {
  //     return <div>Loading...</div>; // or a spinner or any loading indicator
  //   }

  return (
    <CopilotKit runtimeUrl="/api/copilotkit/">
      <App />

      <CopilotPopup
        instructions="Help the user update and manipulate data on the chart, table, todo, and card components."
        defaultOpen={true}
        labels={{
          title: "Data Visualization Copilot",
          initial:
            "Hello there! Welcome to your Fitness Dashboard, please give me a command and I will help you. Let's get started!",
        }}
        clickOutsideToClose={false}
      />
    </CopilotKit>
  );
}
