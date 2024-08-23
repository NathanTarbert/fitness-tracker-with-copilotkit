import { useState } from "react";

import Image from "next/image";
import ImageUpload from "@/app/components/Image";
import { Box, Progress } from "@chakra-ui/react";
import ChartComponent from "@/app/components/Chart";
import CheckboxComponent from "@/app/components/Checkbox";
import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";
import Nav from "../components/Nav";
import "../globals.css";
import avatar from "@/public/nathan_headshot_avatar.jpg";

export default function App() {
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      id: 1,
      text: "Run 8 miles today",
      completed: false,
    },
    {
      id: 2,
      text: "Catch the yoga class at noon",
      completed: false,
    },
    {
      id: 3,
      text: "No carb day!",
      completed: false,
    },
  ]);

  const [chartData, setChartData] = useState<Chart[]>([
    {
      name: "Jan",
      uv: 1000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 2000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "March",
      uv: 2200,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "April",
      uv: 2380,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "June",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "July",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 2490,
      pv: 3300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 2490,
      pv: 4900,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 2100,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 2490,
      pv: 2300,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 4490,
      pv: 4100,
      amt: 2100,
    },
  ]);

  const calculateTotal = (key: keyof Chart): number => {
    if (key === "calories")
      return chartData.reduce((acc, item) => acc + item.calories, 0);
    return chartData.reduce((acc, item) => acc + item.steps, 0);
  };

  //👇🏻 pass Chart data to CopilotKit
  useCopilotReadable({
    description:
      "The chart data is a list of sales and customers data for each month. You can update the data for each month. It contains the month, sales, and customers data.",
    value: chartData,
  });

  //👇🏻 action to update chartData
  useCopilotAction({
    name: "updateChartData",
    description: "Update the chart data for the a particular month.",
    parameters: [
      {
        name: "month",
        type: "string",
        description: "The month to update the data for.",
        required: true,
      },
      {
        name: "steps",
        type: "number",
        description: "The sales data for the month.",
        required: true,
      },
      {
        name: "calories",
        type: "number",
        description: "The calorie data for the month.",
        required: true,
      },
    ],
    render: ({ status, args }) => {
      const { month, steps, calories } = args;
      if (month === undefined || steps === undefined || calories === undefined)
        return "";
      if (
        typeof month !== "string" ||
        typeof steps !== "number" ||
        typeof calories !== "number"
      )
        return "";

      const updateChart = () => {
        setChartData((prev) => {
          return prev.map((item) => {
            if (item.month === month) {
              return { month, steps, calories };
            }
            return item;
          });
        });
      };
      return (
        <div className="w-full p-2">
          <p className="text-sm text-blue-400 mb-2">Status: {status}</p>
          <ChartComponent chartData={[{ month, steps, calories }]} />
          <button
            className="px-4 py-2 bg-blue-400 text-white shadow rounded-md"
            onClick={updateChart}>
            Update
          </button>
        </div>
      );
    },
    handler: async ({ steps, calories, month }) => {
      // setChartData((prev) => {
      //   return prev.map((item) => {
      //     if (item.month === month) {
      //       return { month, steps, calories };
      //     }
      //     return item;
      //   });
      // });
    },
  });

  //👇🏻 pass todolist data to CopilotKit
  useCopilotReadable({
    description:
      "The todo list is a list of tasks that need to be completed. You can add, edit, and remove tasks from the list.",
    value: todoList,
  });

  //👇🏻 action to update todo status
  useCopilotAction({
    name: "toggleTodo",
    description: "Toggle the completion status of a todo item.",
    parameters: [
      {
        name: "id",
        type: "number",
        description: "The id of the todo item to toggle.",
        required: true,
      },
    ],
    render: ({ status, args }) => {
      const { id } = args;
      if (id === undefined) return "";
      const getTodo = todoList.find((item) => item.id === id);
      if (!getTodo) return "";

      const toggleTodo = () => {
        setTodoList(
          todoList.map((todo) => {
            if (todo.id === id) {
              return { ...todo, completed: !todo.completed };
            }
            return todo;
          })
        );
      };
      return (
        <div className="w-full p-2">
          <p className="text-sm text-blue-400 mb-2">Status: {status}</p>
          <CheckboxComponent todoList={[getTodo]} setTodoList={setTodoList} />
          <button
            className="px-4 py-2 bg-blue-400 text-white shadow rounded-md"
            onClick={toggleTodo}>
            Toggle Todo
          </button>
        </div>
      );
    },
    handler: async ({ id }) => {
      // setTodoList(
      //   todoList.map((todo) => {
      //     if (todo.id === id) {
      //       return { ...todo, completed: !todo.completed };
      //     }
      //     return todo;
      //   })
      // );
    },
  });

  //👇🏻 action to add new todo
  useCopilotAction({
    name: "addNewTodo",
    description: "Add new todo to the todo list",
    parameters: [
      {
        name: "text",
        type: "string",
        description: "The text of the todo item.",
        required: true,
      },
    ],
    render: ({ status, args }) => {
      const { text } = args;
      if (text === undefined) return "";

      const addTodo = () => {
        setTodoList((prev) => {
          return [...prev, { id: prev.length + 1, text, completed: false }];
        });
      };
      return (
        <div className="w-full p-2">
          <p className="text-sm text-blue-400 mb-2">Status: {status}</p>
          <CheckboxComponent
            todoList={[{ id: todoList.length + 1, text, completed: false }]}
            setTodoList={setTodoList}
          />
          <button
            className="px-4 py-2 bg-blue-400 text-white shadow rounded-md"
            onClick={addTodo}>
            Add to Page
          </button>
        </div>
      );
    },
    handler: async ({ text }) => {
      // setTodoList((prev) => {
      //   return [...prev, { id: prev.length + 1, text, completed: false }];
      // });
    },
  });

  //👇🏻 action to delete todo
  useCopilotAction({
    name: "deleteTodo",
    description: "Remove todo from the todo list",
    parameters: [
      {
        name: "id",
        type: "number",
        description: "The id of the todo item to remove.",
        required: true,
      },
    ],
    render: ({ status, args }) => {
      const { id } = args;
      if (id === undefined) return "";
      const getTodo = todoList.find((item) => item.id === id);
      if (!getTodo) return "";

      const deleteTodo = () => {
        setTodoList((prev) => {
          return prev.filter((item) => item.id !== id);
        });
      };
      return (
        <div className="w-full p-2">
          <p className="text-sm text-blue-400 mb-2">Status: {status}</p>
          <CheckboxComponent todoList={[getTodo]} setTodoList={setTodoList} />
          <button
            className="px-4 py-2 bg-red-500 text-white shadow rounded-md"
            onClick={deleteTodo}>
            Delete
          </button>
        </div>
      );
    },
    handler: async ({ id }) => {
      // setTodoList((prev) => {
      //   return prev.filter((item) => item.id !== id);
      // });
    },
  });

  return (
    <Box>
      <Nav />
      <div className="pt-4 pl-4 ">
        <ImageUpload />
      </div>
      <div className="bg-current">
        <Progress hasStripe value={64} />
      </div>

      <div className="flex items-stretch">
        <div className="lg:w-full  h-[300px] w-full lg:mb-0 mb-4 pt-6   ">
          <ChartComponent chartData={chartData} />
        </div>
      </div>
      <div className="pt-4 p-4 font-bold text-xl mb-3 text-[#071952]  ">
        Steps walked in 2024
      </div>
      <div className="pt-4 p-4 font-bold text-base border-8 mb-3 text-[#071952] ">
        9038 steps total
      </div>

      <div className="items-center border-8">
        <CheckboxComponent todoList={todoList} setTodoList={setTodoList} />
      </div>
    </Box>
  );
}
