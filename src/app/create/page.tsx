"use client";
import { useState } from "react";
import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import "@copilotkit/react-textarea/styles.css";
import Nav from "../components/Nav";
import "../globals.css";
import CheckboxComponent from "../components/Checkbox";
import { Checkbox } from "@/components/ui/checkbox";

export default function CreateFitness(props: Todo) {
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      id: 1,
      text: "Validate my product",
      completed: false,
    },
    {
      id: 2,
      text: "Research the first steps to creating a startup",
      completed: false,
    },
    {
      id: 3,
      text: "Start hiring an all-star team",
      completed: false,
    },
  ]);

  const TodoContext = useCopilotReadable({
    description:
      "The todo list is a list of tasks that need to be completed. You can add, edit, and remove tasks from the list.",
    value: todoList,
  });

  useCopilotReadable({
    description:
      "The todo list is a list of tasks that need to be completed. You can add, edit, and remove tasks from the list.",
    value: todoList,
    parentId: TodoContext,
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
      setTodoList(
        todoList.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      );
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
      setTodoList((prev) => {
        return [...prev, { id: prev.length + 1, text, completed: false }];
      });
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
      setTodoList((prev) => {
        return prev.filter((item) => item.id !== id);
      });
    },
  });

  return (
    <CopilotKit runtimeUrl="/api/copilotkit/">
      <Checkbox />
      <CheckboxComponent todoList={todoList} setTodoList={setTodoList} />
      <main>
        <CopilotPopup
          instructions="Help the user update and manipulate data on the chart, table, todo, and card components."
          defaultOpen={true}
          labels={{
            title: "Data Visualization Copilot",
            initial:
              "Hello there! I can help you add, edit, and remove data from the various components on the page. You can update the chat, table, and todo list. Let's get started!",
          }}
          clickOutsideToClose={false}
        />
        <div className="w-full flex items-center justify-between p-4 md:flex-row space-x-4"></div>
        <div className="lg:w-1/2 w-full h-full lg:mb-0 mb-4"></div>
      </main>
    </CopilotKit>
  );
}
