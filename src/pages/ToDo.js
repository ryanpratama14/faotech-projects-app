import "/Users/ryanpratama/Desktop/faotech-projects-app/src/App.css";
import React from "react";
import "./Background.css";
import InputField from "./components/InputField";
import ToDoCard from "./components/ToDoCard";
import { useState } from "react";
import { createContext, useEffect } from "react";

const ToDo = () => {
  useEffect(() => {
    document.title = "#4: To Do App";
  }, []);
  const UserContext = createContext();
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [totalTask, setTotalTask] = useState(0);
  const regex = /^[a-zA-Z, ЁёА-я]+$/;
  const [data, setData] = useState([
    {
      name: "Ryan",
      task: "Mastering Tailwind CSS",
      date: "2022-30-12",
      totalTask: 5,
    },
  ]);

  return (
    <div class="font-mono ">
      <section class=" text-white reviews" id="ceo">
        <div class="px-8 py-12 sm:px-6  lg:px-8">
          <div class="mx-auto max-w-xl text-center mb-12">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to
              <br />
              <span class="text-sky-300">To </span>
              <span class="text-red-300">Do </span>App!
            </h2>
          </div>
          <div class="flex flex-wrap justify-center">
            {data?.map((e) => {
              return (
                <div>
                  <ToDoCard
                    nameProps={e.name}
                    taskProps={e.task}
                    dateProps={e.date}
                    totalTaskProps={e.totalTask}
                  />
                </div>
              );
            })}
          </div>
          <div class="text-center text-black dark:text-white">
            <div className=" mt-4">
              <InputField
                valueTyped={(e) => {
                  setName(e);
                }}
                type="text"
                lengthMax={20}
                placeholderValue="Your Name"
              />
            </div>
            <div className=" mt-4">
              <InputField
                valueTyped={(e) => {
                  setTask(e);
                }}
                type="text"
                lengthMax={360}
                placeholderValue="English lesson chapter 37"
              />
            </div>
            <div className=" mt-4">
              <InputField
                valueTyped={(e) => {
                  setTotalTask(e);
                }}
                type="number"
                placeholderValue="32 tasks"
              />
            </div>
            <div className=" mt-4">
              <InputField
                valueTyped={(e) => {
                  setDate(e);
                }}
                type="date"
              />
            </div>
            <button
              onClick={() => {
                if (
                  name.length > 0 &&
                  name.match(regex) &&
                  task.length > 0 &&
                  date.length > 0 &&
                  totalTask > 0
                ) {
                  setData([...data, { name, task, date, totalTask }]);
                }
              }}
              className="btn btn-primary mt-4 mb-4 w-72"
            >
              Add new task
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// export default ToDo = React.createContext(data[0].totalTask);
export default ToDo;
